/*
 * jQuery JSONP Core Plugin 2.1.4 (2010-11-17)
 * 
 * http://code.google.com/p/jquery-jsonp/
 *
 * Copyright (c) 2010 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ , setTimeout ) {
	
	// ###################### UTILITIES ##
	
	// Noop
	function noop() {
	}
	
	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Add script to document
	function appendScript( node ) {
		head.insertBefore( node , head.firstChild );
	}
	
	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}
	
	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}
	
	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ONCLICK = STR_ON + "click",
		STR_ONERROR = STR_ON + STR_ERROR,
		STR_ONLOAD = STR_ON + "load",
		STR_ONREADYSTATECHANGE = STR_ON + "readystatechange",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script/>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",
		
		// Shortcut to jQuery.browser
		browser = $.browser,
		
		// Head element (for faster use)
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,
		
		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,		
			url: location.href
		};
	
	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {
		
		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );
		
		// References to xOptions members (for better minification)
		var completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,
			
			// Abort/done flag
			done = 0,
			
			// Life-cycle functions
			cleanUp = noop;
		
		// Create the abort method
		xOptions.abort = function() { 
			! done++ &&	cleanUp(); 
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend, xOptions , [ xOptions ] ) === false || done ) {
			return xOptions;
		}
			
		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;
			
		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;
		
		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );
		
		// Add anticache parameter if needed
		! cacheFlag && ! pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );
		
		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );
		
		// Success notifier
		function notifySuccess( json ) {
			! done++ && setTimeout( function() {
				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( xOptions.success , xOptions , [ json , STR_SUCCESS ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );
			} , 0 );
		}
		
		// Error notifier
		function notifyError( type ) {
			! done++ && setTimeout( function() {
				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( xOptions.error , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );
			} , 0 );
		}
	    
		// Check page cache
		pageCacheFlag && ( pageCached = pageCache[ url ] ) 
			? ( pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached ) )
			:
			// Initiate request
			setTimeout( function( script , scriptAfter , timeoutTimer ) {
				
				if ( ! done ) {
				
					// If a timeout is needed, install it
					timeoutTimer = timeout > 0 && setTimeout( function() {
						notifyError( STR_TIMEOUT );
					} , timeout );
					
					// Re-declare cleanUp function
					cleanUp = function() {
						timeoutTimer && clearTimeout( timeoutTimer );
						script[ STR_ONREADYSTATECHANGE ]
							= script[ STR_ONCLICK ]
							= script[ STR_ONLOAD ]
							= script[ STR_ONERROR ]
							= null;
						head[ STR_REMOVE_CHILD ]( script );
						scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
					};
					
					// Install the generic callback
					// (BEWARE: global namespace pollution ahoy)
					window[ successCallbackName ] = genericCallback;

					// Create the script tag
					script = $( STR_SCRIPT_TAG )[ 0 ];
					script.id = STR_JQUERY_JSONP + count++;
					
					// Set charset if provided
					if ( charset ) {
						script[ STR_CHARSET ] = charset;
					}
					
					// Callback function
					function callback( result ) {
						( script[ STR_ONCLICK ] || noop )();
						result = lastValue;
						lastValue = undefined;
						result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );
					}
										
					// IE: event/htmlFor/onclick trick
					// One can't rely on proper order for onreadystatechange
					// We have to sniff since FF doesn't like event & htmlFor... at all
					if ( browser.msie ) {
						
						script.event = STR_ONCLICK;
						script.htmlFor = script.id;
						script[ STR_ONREADYSTATECHANGE ] = function() {
							/loaded|complete/.test( script.readyState ) && callback();
						};
						
					// All others: standard handlers
					} else {					
					
						script[ STR_ONERROR ] = script[ STR_ONLOAD ] = callback;
						
						browser.opera ?
							
							// Opera: onerror is not called, use synchronized script execution
							( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "jQuery('#" + script.id + "')[0]." + STR_ONERROR + "()" )
							
							// Firefox: set script as async to avoid blocking scripts (3.6+ only)
							: script[ STR_ASYNC ] = STR_ASYNC;
							
						;
					}
					
					// Set source
					script.src = url;
					
					// Append main script
					appendScript( script );
					
					// Opera: Append trailing script
					scriptAfter && appendScript( scriptAfter );
				}
				
			} , 0 );
		
		return xOptions;
	}
	
	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;
	
} )( jQuery , setTimeout );// Instantiate objects based on a JSON "record". The record must be a statement
// array in the following form:
//
//     [ "{verb} {subject}", arg0, arg1, arg2, ... argn ]
//
// Each record is processed from a passed `context` which starts from the
// global (ie. `window`) context if unspecified.
//
// - `@literal` Evaluate `subject` and return its value as a scalar. Useful for
//   referencing API constants, object properties or other values.
// - `@new` Call `subject` as a constructor with args `arg0 - argn`. The
//   newly created object will be the new context.
// - `@call` Call `subject` as a function with args `arg0 - argn` in the
//   global namespace. The return value will be the new context.
// - `@chain` Call `subject` as a method of the current context with args `arg0
//   - argn`. The return value will be the new context.
// - `@inject` Call `subject` as a method of the current context with args
//   `arg0 - argn`. The return value will *not* affect the context.
// - `@group` Treat `arg0 - argn` as a series of statement arrays that share a
//   context. Each statement will be called in serial and affect the context
//   for the next statement.
//
// Requirements:
//
// - Underscore.js
// - jQuery @TODO: only used for $.browser check. Could probably be removed.
//
// Usage:
//
//     var gmap = ['@new google.maps.Map',
//         ['@call document.getElementById', 'gmap'],
//         {
//             center: [ '@new google.maps.LatLng', 0, 0 ],
//             zoom: 2,
//             mapTypeId: [ '@literal google.maps.MapTypeId.ROADMAP' ]
//         }
//     ];
//     wax.Record(gmap);
var wax = wax || {};
wax.Record = function(obj, context) {
    var getFunction = function(head, cur) {
        var ret = _.reduce(head.split('.'), function(part, segment) {
            return [part[1] || part[0], part[1] ? part[1][segment] : part[0][segment]];
        }, [cur || window, null]);
        if (ret[0] && ret[1]) {
            return ret;
        } else {
            throw head + ' not found.';
        }
    };
    var makeObject = function(fn_name, args) {
        var fn_obj = getFunction(fn_name),
            obj;
        args = args.length ? wax.Record(args) : [];

        // real browsers
        if (Object.create) {
            obj = Object.create(fn_obj[1].prototype);
            fn_obj[1].apply(obj, args);
        // lord have mercy on your soul.
        } else {
            switch (args.length) {
                case 0: obj = new fn_obj[1](); break;
                case 1: obj = new fn_obj[1](args[0]); break;
                case 2: obj = new fn_obj[1](args[0], args[1]); break;
                case 3: obj = new fn_obj[1](args[0], args[1], args[2]); break;
                case 4: obj = new fn_obj[1](args[0], args[1], args[2], args[3]); break;
                case 5: obj = new fn_obj[1](args[0], args[1], args[2], args[3], args[4]); break;
                default: break;
            }
        }
        return obj;
    };
    var runFunction = function(fn_name, args, cur) {
        var fn_obj = getFunction(fn_name, cur);
        var fn_args = args.length ? wax.Record(args) : [];
        // @TODO: This is currently a stopgap measure that calls methods like
        // `foo.bar()` in the context of `foo`. It will probably be necessary
        // in the future to be able to call `foo.bar()` from other contexts.
        if (cur && fn_name.indexOf('.') === -1) {
            return fn_obj[1].apply(cur, fn_args);
        } else {
            return fn_obj[1].apply(fn_obj[0], fn_args);
        }
    };
    var isKeyword = function(string) {
        return _.isString(string) && (_.indexOf([
            '@new',
            '@call',
            '@literal',
            '@chain',
            '@inject',
            '@group'
        ], string.split(' ')[0]) !== -1);
    };
    var altersContext = function(string) {
        return _.isString(string) && (_.indexOf([
            '@new',
            '@call',
            '@chain'
        ], string.split(' ')[0]) !== -1);
    };
    var getStatement = function(obj) {
        if (_.isArray(obj) && obj[0] && isKeyword(obj[0])) {
            return {
                verb: obj[0].split(' ')[0],
                subject: obj[0].split(' ')[1],
                object: obj.slice(1)
            };
        }
        return false;
    };

    var i,
        fn = false,
        ret = null,
        child = null,
        statement = getStatement(obj);
    if (statement) {
        switch (statement.verb) {
        case '@group':
            for (i = 0; i < statement.object.length; i++) {
                ret = wax.Record(statement.object[i], context);
                child = getStatement(statement.object[i]);
                if (child && altersContext(child.verb)) {
                    context = ret;
                }
            }
            return context;
        case '@new':
            return makeObject(statement.subject, statement.object);
        case '@literal':
            fn = getFunction(statement.subject);
            return fn ? fn[1] : null;
        case '@inject':
            return runFunction(statement.subject, statement.object, context);
        case '@chain':
            return runFunction(statement.subject, statement.object, context);
        case '@call':
            return runFunction(statement.subject, statement.object, null);
        }
    } else if (obj !== null && typeof obj === 'object') {
        var keys = _.keys(obj);
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            obj[key] = wax.Record(obj[key], context);
        }
        return obj;
    } else {
        return obj;
    }
};
// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Nondrag
// -------
// A simple abstraction from the `mousemove` handler that doesn't
// trigger mousemove events while dragging.
(function($) {
    $.fn.extend({
        nondrag: function(callback) {
            $(this).bind('mousedown mouseup mousemove', function(evt) {
                var down = false;
                if (evt.type === 'mouseup') {
                    down = false;
                } else if (down || evt.type === 'mousedown') {
                    down = true;
                    // Don't trigger the callback if this is a drag.
                    return;
                }
                callback(evt);
            });
            return this;
        }
    });
})(jQuery);

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            $.jsonp({
                url: url,
                context: this,
                callback: 'grid',
                callbackParameter: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = data;
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url]);
                    }
                },
                error: function() {
                    that.locks[url] = false;
                    that.cache[url] = null;
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url]);
                    }
                }
            });
        }
    }
};

// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
wax.GridInstance = function(grid_tile, formatter) {
    this.grid_tile = grid_tile;
    this.formatter = formatter;
    this.tileRes = 4;
};

// Resolve the UTF-8 encoding stored in grids to simple
// number values.
// See the [utfgrid section of the mbtiles spec](https://github.com/mapbox/mbtiles-spec/blob/master/1.1/utfgrid.md)
// for details.
wax.GridInstance.prototype.resolveCode = function(key) {
  if (key >= 93) key--;
  if (key >= 35) key--;
  key -= 32;
  return key;
};

wax.GridInstance.prototype.getFeature = function(x, y, tile_element, options) {
  if (!(this.grid_tile && this.grid_tile.grid)) return;
  var tileX, tileY;
  if (tile_element.left && tile_element.top) {
      tileX = tile_element.left;
      tileY = tile_element.top;
  } else {
      var $tile_element = $(tile_element);
      // IE problem here - though recoverable, for whatever reason
      tileX = $tile_element.offset().left;
      tileY = $tile_element.offset().top;
  }
  if (Math.floor((y - tileY) / this.tileRes) > 256 ||
    Math.floor((x - tileX) / this.tileRes) > 256) return;

  var key = this.grid_tile.grid[
     Math.floor((y - tileY) / this.tileRes)
  ].charCodeAt(
     Math.floor((x - tileX) / this.tileRes)
  );

  key = this.resolveCode(key);

  // If this layers formatter hasn't been loaded yet,
  // download and load it now.
  if (this.grid_tile.keys[key]) {
    return this.formatter.format(
      options,
      this.grid_tile.data[this.grid_tile.keys[key]]
    );
  }
};

// GridManager
// -----------
// Generally one GridManager will be used per map.
wax.GridManager = function() {
    this.grid_tiles = {};
    this.key_maps = {};
    this.formatters = {};
    this.locks = {};
};

// Get a grid - calls `callback` with either a `GridInstance`
// object or false. Behind the scenes, this calls `getFormatter`
// and gets grid data, and tries to avoid re-downloading either.
wax.GridManager.prototype.getGrid = function(url, callback) {
    var that = this;
    that.getFormatter(that.formatterUrl(url), function(f) {
        if (!f) return callback(false);

        wax.request.get(that.tileDataUrl(url), function(t) {
            callback(new wax.GridInstance(t, f));
        });
    });
};

// Create a cross-browser event object
wax.GridManager.prototype.makeEvent = function(evt) {
  return {
    target: evt.target || evt.srcElement,
    pX: evt.pageX || evt.clientX,
    pY: evt.pageY || evt.clientY,
    evt: evt
  };
};

// Simplistically derive the URL of the grid data endpoint from a tile URL
wax.GridManager.prototype.tileDataUrl = function(url) {
  return url.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, '.grid.json');
};

// Simplistically derive the URL of the formatter function from a tile URL
wax.GridManager.prototype.formatterUrl = function(url) {
  return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

// Request and save a formatter, passed to `callback()` when finished.
wax.GridManager.prototype.getFormatter = function(url, callback) {
  var that = this;
  // Formatter is cached.
  if (typeof this.formatters[url] !== 'undefined') {
    callback(this.formatters[url]);
    return;
  } else {
    wax.request.get(url, function(data) {
        if (data && data.formatter) {
            that.formatters[url] = new wax.Formatter(data);
        } else {
            that.formatters[url] = false;
        }
        callback(that.formatters[url]);
    });
  }
};

// Formatter
// ---------
wax.Formatter = function(obj) {
    // Prevent against just any input being used.
    if (obj.formatter && typeof obj.formatter === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('this.f = ' + obj.formatter);
        } catch (e) {
            // Syntax errors in formatter
            if (console) console.log(e);
        }
    } else {
        this.f = function() {};
    }
};

// Wrap the given formatter function in order to
// catch exceptions that it may throw.
wax.Formatter.prototype.format = function(options, data) {
    try {
        return this.f(options, data);
    } catch (e) {
        if (console) console.log(e);
    }
};
// Wax Legend
// ----------

// Wax header
var wax = wax || {};

wax.Legend = function(context, container) {
    this.context = context;
    this.container = container || $('<div class="wax-legends"></div>');
    this.legends = {};
    $(this.context).append(this.container);
};

wax.Legend.prototype.render = function(urls) {
    $('.wax-legend', this.container).hide();

    var render = $.proxy(function(url, content) {
        if (!content) {
            this.legends[url] = false;
        } else if (this.legends[url]) {
            this.legends[url].show();
        } else {
            this.legends[url] = $("<div class='wax-legend'></div>").append(content);
            this.container.append(this.legends[url]);
        }
    }, this);
    var renderLegend = function(data) {
        if (data && data.legend) render(url, data.legend);
    };
    for (var i = 0; i < urls.length; i++) {
        var url = this.legendUrl(urls[i]);
        wax.request.get(url, renderLegend);
    }
};

wax.Legend.prototype.legendUrl = function(url) {
    return url.replace(/\d+\/\d+\/\d+\.\w+/, 'layer.json');
};

// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};
wax.tooltip = {};

// Get the active tooltip for a layer or create a new one if no tooltip exists.
// Hide any tooltips on layers underneath this one.
wax.tooltip.getToolTip = function(feature, context, index, evt) {
    var tooltip = $(context).children('div.wax-tooltip-' +
        index +
        ':not(.removed)');
    if (tooltip.size() === 0) {
        tooltip = $("<div class='wax-tooltip wax-tooltip-" +
            index +
            "'>" +
            '</div>').html(feature);
        if (!$(context).triggerHandler('addedtooltip', [tooltip, context, evt])) {
            $(context).append(tooltip);
        }
    }
    for (var i = (index - 1); i > 0; i--) {
        var fallback = $('div.wax-tooltip-' + i + ':not(.removed)');
        if (fallback.size() > 0) {
            fallback.addClass('hidden').hide();
        }
    }
    return tooltip;
};

// Expand a tooltip to be a "popup". Suspends all other tooltips from being
// shown until this popup is closed or another popup is opened.
wax.tooltip.click = function(feature, context, index) {
    var tooltip = wax.tooltip.getToolTip(feature, context, index);
    var close = $('<a href="#close" class="close">Close</a>');
    close.click(function() {
        tooltip
            .addClass('removed')
            .fadeOut('fast', function() { $(this).remove(); });
        return false;
    });
    tooltip
        .addClass('wax-popup')
        .html(feature)
        .append(close);
};

// Show a tooltip.
wax.tooltip.select = function(feature, context, layer_id, evt) {
    if (!feature) return;

    wax.tooltip.getToolTip(feature, context, layer_id, evt);
    $(context).css('cursor', 'pointer');
    $('div', context).css('cursor', 'pointer');
};

// Hide all tooltips on this layer and show the first hidden tooltip on the
// highest layer underneath if found.
wax.tooltip.unselect = function(feature, context, layer_id, evt) {
    $(context)
        .css('cursor', 'default');
    if (layer_id) {
        $('div.wax-tooltip-' + layer_id + ':not(.wax-popup)')
            .remove();
    } else {
        $('div.wax-tooltip:not(.wax-popup)')
            .remove();
    }

    // TODO: remove
    $('div', context).css('cursor', 'default');

    $('div.wax-tooltip:first')
        .removeClass('hidden')
        .show();

    $(context).triggerHandler('removedtooltip', [feature, context, evt]);
};
// Wax: Box Selector
// -----------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.boxselector = function(opts) {
    var boxDiv = document.createElement('div');
    boxDiv.id = this.parent.id + '-boxselector';
    boxDiv.className = 'boxselector-box-container';
    boxDiv.style.width = this.dimensions.x + 'px';
    boxDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(boxDiv);

    var box = document.createElement('div');
    box.id = this.parent.id + '-boxselector-box';
    box.className = 'boxselector-box';
    boxDiv.appendChild(box);

    var mouseDownPoint = null;
    var map = this;

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;

    var boxselector = this.boxselector;
    this.boxselector.getMousePoint = function(e) {
        // start with just the mouse (x, y)
        var point = new com.modestmaps.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    this.boxselector.mouseDown = function(e) {
        if (e.shiftKey) {
            mouseDownPoint = boxselector.getMousePoint(e);

            box.style.left = mouseDownPoint.x + 'px';
            box.style.top = mouseDownPoint.y + 'px';
            box.style.height = 'auto';
            box.style.width = 'auto';

            com.modestmaps.addEvent(map.parent, 'mousemove', boxselector.mouseMove);
            com.modestmaps.addEvent(map.parent, 'mouseup', boxselector.mouseUp);

            map.parent.style.cursor = 'crosshair';
            return com.modestmaps.cancelEvent(e);
        }
    };

    this.boxselector.mouseMove = function(e) {
        var point = boxselector.getMousePoint(e);
        box.style.display = 'block';
        if (point.x < mouseDownPoint.x) {
            box.style.left = point.x + 'px';
            box.style.right = (map.dimensions.x - mouseDownPoint.x) + 'px';
        } else {
            box.style.left = mouseDownPoint.x + 'px';
            box.style.right = (map.dimensions.x - point.x) + 'px';
        }
        if (point.y < mouseDownPoint.y) {
            box.style.top = point.y + 'px';
        } else {
            box.style.bottom = (map.dimensions.y - point.y) + 'px';
        }
        return com.modestmaps.cancelEvent(e);
    };

    this.boxselector.mouseUp = function(e) {
        var point = boxselector.getMousePoint(e);

        var l1 = map.pointLocation(point),
            l2 = map.pointLocation(mouseDownPoint);

        // Format coordinates like mm.map.getExtent().
        var extent = [];
        extent.push(new com.modestmaps.Location(
            Math.max(l1.lat, l2.lat),
            Math.min(l1.lon, l2.lon)));
        extent.push(new com.modestmaps.Location(
            Math.min(l1.lat, l2.lat),
            Math.max(l1.lon, l2.lon)));

        boxselector.box = [l1, l2];
        callback(extent);

        com.modestmaps.removeEvent(map.parent, 'mousemove', boxselector.mouseMove);
        com.modestmaps.removeEvent(map.parent, 'mouseup', boxselector.mouseUp);

        map.parent.style.cursor = 'auto';

        return com.modestmaps.cancelEvent(e);
    };

    com.modestmaps.addEvent(boxDiv, 'mousedown', boxselector.mouseDown);

    var drawbox = function(map, e) {
        if (map.boxselector.box) {
            box.style.display = 'block';
            box.style.height = 'auto';
            box.style.width = 'auto';
            var br = map.locationPoint(map.boxselector.box[0]);
            var tl = map.locationPoint(map.boxselector.box[1]);
            box.style.left = Math.max(0, tl.x) + 'px';
            box.style.top = Math.max(0, tl.y) + 'px';
            box.style.right = Math.max(0, map.dimensions.x - br.x) + 'px';
            box.style.bottom = Math.max(0, map.dimensions.y - br.y) + 'px';
        }
    };

    this.addCallback('drawn', drawbox);

    this.boxselector.remove = function() {
        boxDiv.parentNode.removeChild(boxDiv);
        map.removeCallback('mousedown', drawbox);
    };

    return this;
};
// Wax: Embedder Control
// -------------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.embedder = function(options) {
    options = options || {};
    if ($('#' + this.el + '-script').length) {
      $(this.parent).prepend($('<input type="text" class="embed-src" />')
        .css({
            'z-index': '9999999999',
            'position': 'relative'
        })
        .val("<div id='" + this.el + "-script'>" + $('#' + this.el + '-script').html() + '</div>'));
    }
    return this;
};
// Wax: Fullscreen
// -----------------
// A simple fullscreen control for Modest Maps

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
com.modestmaps.Map.prototype.fullscreen = function() {
    // Modest Maps demands an absolute height & width, and doesn't auto-correct
    // for changes, so here we save the original size of the element and
    // restore to that size on exit from fullscreen.
    $('<a class="wax-fullscreen" href="#fullscreen">fullscreen</a>')
        .toggle(
            $.proxy(this.maximize, this),
            $.proxy(this.minimize, this)
        )
        .appendTo(this.parent);
    return this;
};

com.modestmaps.Map.prototype.maximize = function(e) {
    if (e) {
        e.preventDefault();
    }
    this.smallSize = [$(this.parent).width(), $(this.parent).height()];
    $(this.parent).addClass('wax-fullscreen-map');
    this.setSize(
        $(this.parent).outerWidth(),
        $(this.parent).outerHeight());
};

com.modestmaps.Map.prototype.minimize = function(e) {
    if (e) {
        e.preventDefault();
    }
    $(this.parent).removeClass('wax-fullscreen-map');
    this.setSize(
        this.smallSize[0],
        this.smallSize[1]);
};
// Wax: Geocoder
// -------------
//
// Requires: jQuery, jquery-jsonp

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

var geocoders = {
    mapquest: function(opts) {
        return function(location, callback) {
            $.jsonp({
                url: 'http://platform.beta.mapquest.com/geocoding/v1/address',
                data: {
                  key: opts.key,
                  location: location
                },
                callbackParameter: 'callback',
                context: this,
                success: function(data) {
                    // TODO: simplify
                    if (data.results && data.results.length && data.results[0].locations) {
                        callback(null, data.results[0].locations[0].latLng);
                    }
                },
                error: function() {
                    callback('Geocoding service could not be reached.');
                }
            });
        };
    }
};

com.modestmaps.Map.prototype.geocoder = function(opts) {
    var MM = com.modestmaps;

    this.geocoder = {
        geocode: function(location) {
            opts.geocoder(location, function(err, point) {
                if (!err) opts.success(new MM.Location(point.lat, point.lon));
            });
        }
    };
    return this;
};


// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// Ripped from underscore.js
// Internal function used to implement `_.throttle` and `_.debounce`.
var limit = function(func, wait, debounce) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var throttler = function() {
      timeout = null;
      func.apply(context, args);
    };
    if (debounce) clearTimeout(timeout);
    if (debounce || !timeout) timeout = setTimeout(throttler, wait);
  };
};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.
var throttle = function(func, wait) {
  return limit(func, wait, false);
};

var locationHash = {
  stateChange: function(callback) {
    window.addEventListener('hashchange', function() {
      callback(location.hash);
    }, false);
  },
  getState: function() {
    return location.hash;
  },
  pushState: function(state) {
    location.hash = state;
  }
};

com.modestmaps.Map.prototype.hash = function(options) {
  var s0, // cached location.hash
      lat = 90 - 1e-8, // allowable latitude range
      map;

  var hash = {
    map: this,
    parser: function(s) {
      var args = s.split('/').map(Number);
      if (args.length < 3 || args.some(isNaN)) {
        return true; // replace bogus hash
      } else if (args.length == 3) {
        this.map.setCenterZoom(new com.modestmaps.Location(args[1], args[2]), args[0]);
      }
    },
    formatter: function() {
      var center = this.map.getCenter(),
          zoom = this.map.getZoom(),
          precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
      return '#' + [zoom.toFixed(2),
        center.lat.toFixed(precision),
        center.lon.toFixed(precision)].join('/');
    },
    move: function() {
      var s1 = hash.formatter();
      if (s0 !== s1) {
        s0 = s1;
        options.manager.pushState(s0); // don't recenter the map!
      }
    },
    stateChange: function(state) {
      if (state === s0) return; // ignore spurious hashchange events
      if (hash.parser((s0 = state).substring(1))) {
        hash.move(); // replace bogus hash
      }
    },
    // If a state isn't present when you initially load the map, the map should
    // still get a center and zoom level.
    initialize: function() {
      if (options.defaultCenter) this.map.setCenter(options.defaultCenter);
      if (options.defaultZoom) this.map.setZoom(options.defaultZoom);
    }
  };

  options.manager.getState() ?
    hash.stateChange(options.manager.getState()) :
    hash.initialize() && hash.move();
  this.addCallback('drawn', throttle(hash.move, 500));
  options.manager.stateChange(hash.stateChange);

  return this;
};
// Requires jQuery
//
// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// A chaining-style control that adds
// interaction to a modestmaps.Map object.
//
// Takes an options object with the following keys:
//
// * `callbacks` (optional): an `out`, `over`, and `click` callback.
//   If not given, the `wax.tooltip` library will be expected.
// * `clickAction` (optional): **full** or **location**: default is
//   **full**.
com.modestmaps.Map.prototype.interaction = function(options) {
    options = options || {};
    // Our GridManager (from `gridutil.js`). This will keep the
    // cache of grid information and provide friendly utility methods
    // that return `GridTile` objects instead of raw data.
    this.waxGM = new wax.GridManager();

    // This requires wax.Tooltip or similar
    this.callbacks = options.callbacks || {
        out: wax.tooltip.unselect,
        over: wax.tooltip.select,
        click: wax.tooltip.click
    };

    this.clickAction = options.clickAction || 'full';

    // Search through `.tiles` and determine the position,
    // from the top-left of the **document**, and cache that data
    // so that `mousemove` events don't always recalculate.
    this.waxGetTileGrid = function() {
        // TODO: don't build for tiles outside of viewport
        var zoom = this.getZoom();
        // Calculate a tile grid and cache it, by using the `.tiles`
        // element on this map.
        return this._waxGetTileGrid || (this._waxGetTileGrid =
            (function(t) {
                var o = [];
                $.each(t, function(key, img) {
                    if (key.split(',')[0] == zoom) {
                        var $img = $(img);
                        var offset = $img.offset();
                        o.push([offset.top, offset.left, $img]);
                    }
                });
                return o;
            })(this.tiles));
    };

    this.waxClearTimeout = function() {
        if (this.clickTimeout) {
            window.clearTimeout(this.clickTimeout);
            this.clickTimeout = null;
            return true;
        } else {
            return false;
        }
    };

    // Click handler
    // -------------
    //
    // The extra logic here is all to avoid the inconsistencies
    // of browsers in handling double and single clicks on the same
    // element. After dealing with particulars, delegates to waxHandleClick
    $(this.parent).mousedown($.proxy(function(evt) {
        // Ignore double-clicks by ignoring clicks within 300ms of
        // each other.
        if (this.waxClearTimeout()) {
            return;
        }
        // Store this event so that we can compare it to the
        // up event
        var tol = 4; // tolerance
        this.downEvent = evt;
        $(this.parent).one('mouseup', $.proxy(function(evt) {
            // Don't register clicks that are likely the boundaries
            // of dragging the map
            if (Math.round(evt.pageY / tol) === Math.round(this.downEvent.pageY / tol) &&
                Math.round(evt.pageX / tol) === Math.round(this.downEvent.pageX / tol)) {
                this.clickTimeout = window.setTimeout(
                    $.proxy(function() {
                        this.waxHandleClick(evt);
                    }, this),
                    300
                );
            }
        }, this));
    }, this));

    this.waxHandleClick = function(evt) {
        var $tile = this.waxGetTile(evt);
        if ($tile) {
            this.waxGM.getGrid($tile.attr('src'), $.proxy(function(g) {
                if (g) {
                    var feature = g.getFeature(evt.pageX, evt.pageY, $tile, {
                        format: this.clickAction
                    });
                    if (feature) {
                        switch (this.clickAction) {
                            case 'full':
                                this.callbacks.click(feature, this.parent, 0, evt);
                                break;
                            case 'location':
                                window.location = feature;
                                break;
                        }
                    }
                }
            }, this));
        }
    };

    this.waxGetTile = function(evt) {
        var $tile;
        var grid = this.waxGetTileGrid();
        for (var i = 0; i < grid.length; i++) {
            if ((grid[i][0] < evt.pageY) &&
               ((grid[i][0] + 256) > evt.pageY) &&
                (grid[i][1] < evt.pageX) &&
               ((grid[i][1] + 256) > evt.pageX)) {
                $tile = grid[i][2];
                break;
            }
        }
        return $tile || false;
    };

    // On `mousemove` events that **don't** have the mouse button
    // down - so that the map isn't being dragged.
    $(this.parent).nondrag($.proxy(function(evt) {
        var $tile = this.waxGetTile(evt);
        if ($tile) {
            this.waxGM.getGrid($tile.attr('src'), $.proxy(function(g) {
                if (g) {
                    var feature = g.getFeature(evt.pageX, evt.pageY, $tile, {
                        format: 'teaser'
                    });
                    // This and other Modest Maps controls only support a single layer.
                    // Thus a layer index of **0** is given to the tooltip library
                    if (feature) {
                        if (feature && this.feature !== feature) {
                            this.feature = feature;
                            this.callbacks.out(feature, this.parent, 0, evt);
                            this.callbacks.over(feature, this.parent, 0, evt);
                        } else if (!feature) {
                            this.feature = null;
                            this.callbacks.out(feature, this.parent, 0, evt);
                        }
                    } else {
                        this.feature = null;
                        this.callbacks.out({}, this.parent, 0, evt);
                    }
                }
            }, this));
        }

    }, this));

    // When the map is moved, the calculated tile grid is no longer
    // accurate, so it must be reset.
    var modifying_events = ['zoomed', 'panned', 'centered',
        'extentset', 'resized', 'drawn'];

    var clearMap = function(map, e) {
        map._waxGetTileGrid = null;
    };

    for (var i = 0; i < modifying_events.length; i++) {
        this.addCallback(modifying_events[i], clearMap);
    }

    // Ensure chainability
    return this;
};
// Wax: Legend Control
// -------------------
// Requires:
//
// * modestmaps
// * wax.Legend

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// The Modest Maps version of this control is a very, very
// light wrapper around the `/lib` code for legends.
com.modestmaps.Map.prototype.legend = function(options) {
    options = options || {};
    this.legend = new wax.Legend(this.parent, options.container);
    this.legend.render([
        this.provider.getTileUrl({
            zoom: 0,
            column: 0,
            row: 0
        })
    ]);
    return this;
};
// Wax: Point Selector
// -----------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.pointselector = function(opts) {
    var mouseDownPoint = null,
        mouseUpPoint = null,
        map = this,
        tolerance = 5,
        MM = com.modestmaps,
        locations = [];

    var callback = (typeof opts === 'function') ?
        opts :
        opts.callback;


    var overlayDiv = document.createElement('div');
    overlayDiv.id = this.parent.id + '-boxselector';
    overlayDiv.className = 'pointselector-box-container';
    overlayDiv.style.width = this.dimensions.x + 'px';
    overlayDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(overlayDiv);

    var makePoint = function(e) {
        var point = new MM.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };

    var pointselector = {
        deletePoint: function(location, e) {
            if (confirm('Delete this point?')) {
                // TODO: indexOf not supported in IE
                location.pointDiv.parentNode.removeChild(location.pointDiv);
                locations.splice(locations.indexOf(location), 1);
                callback(locations);
            }
        },
        drawPoints: function() {
            var offset = new MM.Point(0, 0);
            for (var i = 0; i < locations.length; i++) {
                var point = map.locationPoint(locations[i]);
                if (!locations[i].pointDiv) {
                    locations[i].pointDiv = document.createElement('div');
                    locations[i].pointDiv.className = 'wax-point-div';
                    locations[i].pointDiv.style.position = 'absolute';
                    locations[i].pointDiv.style.display = 'block';
                    locations[i].pointDiv.location = locations[i];
                    // Create this closure once per point
                    MM.addEvent(locations[i].pointDiv, 'mouseup', (function selectPointWrap(e) {
                        var l = locations[i];
                        return function(e) {
                            MM.cancelEvent(e);
                            pointselector.deletePoint(l, e);
                        };
                    })());
                    overlayDiv.appendChild(locations[i].pointDiv);
                }
                locations[i].pointDiv.style.left = point.x + 'px';
                locations[i].pointDiv.style.top = point.y + 'px';
            }
        },
        mouseDown: function(e) {
            mouseDownPoint = makePoint(e);
            MM.addEvent(map.parent, 'mouseup', pointselector.mouseUp);
        },
        addLocation: function(location) {
            locations.push(location);
            pointselector.drawPoints();
        },
        mouseUp: function(e) {
            if (!mouseDownPoint) return;
            mouseUpPoint = makePoint(e);
            if (MM.Point.distance(mouseDownPoint, mouseUpPoint) < tolerance) {
                pointselector.addLocation(map.pointLocation(mouseDownPoint));
                callback(locations);
            }
            mouseDownPoint = null;
            MM.removeEvent(map.parent, 'mouseup', pointselector.mouseUp);
        }
    };
    MM.addEvent(overlayDiv, 'mousedown', pointselector.mouseDown);
    map.addCallback('drawn', pointselector.drawPoints);
    return this;
};
// Wax: ZoomBox
// -----------------
// An OL-style ZoomBox control, from the Modest Maps example.

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

com.modestmaps.Map.prototype.zoombox = function(opts) {
    var boxDiv = document.createElement('div');
    boxDiv.id = this.parent.id + '-zoombox';
    boxDiv.className = 'zoombox-box-container';
    boxDiv.style.width =  this.dimensions.x + 'px';
    boxDiv.style.height = this.dimensions.y + 'px';
    this.parent.appendChild(boxDiv);

    var box = document.createElement('div');
    box.id = this.parent.id + '-zoombox-box';
    box.className = 'zoombox-box';
    boxDiv.appendChild(box);

    // TODO: respond to resize
    var mouseDownPoint = null;
    var map = this;

    var zoombox = this.zoombox;

    this.zoombox.remove = function() {
        boxDiv.parentNode.removeChild(boxDiv);
        map.removeCallback('mousedown', zoombox.mouseDown);
    };
    this.zoombox.getMousePoint = function(e) {
        // start with just the mouse (x, y)
        var point = new com.modestmaps.Point(e.clientX, e.clientY);
        // correct for scrolled document
        point.x += document.body.scrollLeft + document.documentElement.scrollLeft;
        point.y += document.body.scrollTop + document.documentElement.scrollTop;

        // correct for nested offsets in DOM
        for (var node = map.parent; node; node = node.offsetParent) {
            point.x -= node.offsetLeft;
            point.y -= node.offsetTop;
        }
        return point;
    };
    this.zoombox.mouseDown = function(e) {
        if (e.shiftKey) {
            mouseDownPoint = zoombox.getMousePoint(e);

            box.style.left = mouseDownPoint.x + 'px';
            box.style.top = mouseDownPoint.y + 'px';

            com.modestmaps.addEvent(map.parent, 'mousemove', zoombox.mouseMove);
            com.modestmaps.addEvent(map.parent, 'mouseup', zoombox.mouseUp);

            map.parent.style.cursor = 'crosshair';
            return com.modestmaps.cancelEvent(e);
        }
    };
    this.zoombox.mouseMove = function(e) {
        var point = zoombox.getMousePoint(e);
        box.style.display = 'block';
        if (point.x < mouseDownPoint.x) {
            box.style.left = point.x + 'px';
        } else {
            box.style.left = mouseDownPoint.x + 'px';
        }
        box.style.width = Math.abs(point.x - mouseDownPoint.x) + 'px';
        if (point.y < mouseDownPoint.y) {
            box.style.top = point.y + 'px';
        } else {
            box.style.top = mouseDownPoint.y + 'px';
        }
        box.style.height = Math.abs(point.y - mouseDownPoint.y) + 'px';
        return com.modestmaps.cancelEvent(e);
    };
    this.zoombox.mouseUp = function(e) {
        var point = zoombox.getMousePoint(e);

        var l1 = map.pointLocation(point),
            l2 = map.pointLocation(mouseDownPoint);

        map.setExtent([l1, l2]);

        box.style.display = 'none';
        com.modestmaps.removeEvent(map.parent, 'mousemove', zoombox.mouseMove);
        com.modestmaps.removeEvent(map.parent, 'mouseup', zoombox.mouseUp);

        map.parent.style.cursor = 'auto';

        return com.modestmaps.cancelEvent(e);
    };

    com.modestmaps.addEvent(boxDiv, 'mousedown', zoombox.mouseDown);
    return this;
};
// Wax: Zoom Control
// -----------------

// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// Add zoom links, which can be styled as buttons, to a `modestmaps.Map`
// control. This function can be used chaining-style with other
// chaining-style controls.
com.modestmaps.Map.prototype.zoomer = function() {
    var map = this;
    var zoomin = document.createElement('a');
    zoomin.innerText = '+';
    zoomin.href = '#';
    zoomin.className = 'zoomer zoomin';
    zoomin.addEventListener('click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomIn();
    }, false);
    this.parent.appendChild(zoomin);

    var zoomout = document.createElement('a');
    zoomout.innerText = '-';
    zoomout.href = '#';
    zoomout.className = 'zoomer zoomout';
    zoomout.addEventListener('click', function(e) {
        com.modestmaps.cancelEvent(e);
        map.zoomOut();
    }, this);
    this.parent.appendChild(zoomout);

    this.addCallback('drawn', function(map, e) {
        if (map.coordinate.zoom === map.provider.outerLimits()[0].zoom) {
            zoomout.className = 'zoomer zoomout zoomdisabled';
        } else if (map.coordinate.zoom === map.provider.outerLimits()[1].zoom) {
            zoomin.className = 'zoomer zoomin zoomdisabled';
        } else {
            zoomin.className = 'zoomer zoomin';
            zoomout.className = 'zoomer zoomout';
        }
    });
    return this;
};
// namespacing!
if (!com) {
    var com = { };
    if (!com.modestmaps) {
        com.modestmaps = { };
    }
}

// A layer connector for Modest Maps
//
// ### Required arguments
//
// * `base_url` first argument that can be a string for a single
// server or an array to hit multiple servers or CNAMEs.
// * `layername`
//
// ### Optional arguments
//
// * `filetype`: like `.jpeg` (default `.png`)
// * `zoomrange`: like [0, 10] (default [0, 18])
// 
com.modestmaps.WaxProvider = function(options) {
    this.layerName = options.layerName;
    this.baseUrls = (typeof(options.baseUrl) == 'string') ?
            [options.baseUrl] : options.baseUrl;
    this.n_urls = this.baseUrls.length;
    this.filetype = options.filetype || '.png';
    this.zoomRange = options.zoomRange || [0, 18];
};

com.modestmaps.WaxProvider.prototype = {
    outerLimits: function() {
        return [
            new com.modestmaps.Coordinate(0,0,0).zoomTo(this.zoomRange[0]),
            new com.modestmaps.Coordinate(1,1,0).zoomTo(this.zoomRange[1])
        ];
    },
    getTileUrl: function(coord) {
        var server;
        coord = this.sourceCoordinate(coord);
        if (!coord) {
            return null;
        }

        var worldSize = Math.pow(2, coord.zoom);
        coord.row = Math.pow(2, coord.zoom) - coord.row - 1;
        if (this.n_urls === 1) {
            server = this.baseUrls[0];
        } else {
            server = this.baseUrls[parseInt(worldSize * coord.row + coord.column, 10) % this.n_urls];
        }
        var imgPath = ['1.0.0', this.layerName, coord.zoom, coord.column, coord.row].join('/');
        return server + imgPath + this.filetype;
    }
};

com.modestmaps.extend(com.modestmaps.WaxProvider, com.modestmaps.MapProvider);
