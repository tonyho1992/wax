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
// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
wax.ol.Embedder =
    OpenLayers.Class(OpenLayers.Control, {
    initialize: function(options) {
      options = options || {};
      OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    // Add handlers to the map
    setMap: function(map) {
      if ($('#' + this.el + '-script').length) {
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
        $(map.div).prepend($('<input type="text" class="embed-src" />')
          .css({
              'z-index': '9999999999',
              'position': 'relative'
          })
          .val("<div id='" + this.el + "-script'>" + $('#' + this.el + '-script').html() + '</div>'));
      }
      this.activate();
    },

    CLASS_NAME: 'wax.ol.Embedder'
});
// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

// An interaction toolkit for tiles that implement the
// [MBTiles UTFGrid spec](https://github.com/mapbox/mbtiles-spec)
wax.ol.Interaction =
    OpenLayers.Class(OpenLayers.Control, {
    feature: {},
    handlerOptions: null,
    handlers: null,

    gm: new wax.GridManager(),

    initialize: function(options) {
        this.options = options || {};
        this.clickAction = this.options.clickAction || 'full';
        OpenLayers.Control.prototype.initialize.apply(this, [this.options || {}]);

        this.callbacks = {
            out: wax.tooltip.unselect,
            over: wax.tooltip.select,
            click: wax.tooltip.click
        };
    },

    setMap: function(map) {
        $(map.viewPortDiv).bind('mousemove', $.proxy(this.getInfoForHover, this));
        $(map.viewPortDiv).bind('mouseout', $.proxy(this.resetLayers, this));
        this.clickHandler = new OpenLayers.Handler.Click(
            this, {
                click: this.getInfoForClick
            }
        );

        this.clickHandler.setMap(map);
        this.clickHandler.activate();

        map.events.on({
            addlayer: this.resetLayers,
            changelayer: this.resetLayers,
            removelayer: this.resetLayers,
            changebaselayer: this.resetLayers,
            scope: this
        });

        OpenLayers.Control.prototype.setMap.apply(this, arguments);
    },

    // Get an Array of the stack of tiles under the mouse.
    // This operates with pixels only, since there's no way
    // to bubble through an element which is sitting on the map
    // (like an SVG overlay).
    //
    // If no tiles are under the mouse, returns an empty array.
    getTileStack: function(layers, sevt) {
        var tiles = [];
        layerfound: for (var j = 0; j < layers.length; j++) {
            for (var x = 0; x < layers[j].grid.length; x++) {
                for (var y = 0; y < layers[j].grid[x].length; y++) {
                    var divpos = $(layers[j].grid[x][y].imgDiv).offset();
                    if (divpos &&
                        ((divpos.top < sevt.pageY) &&
                         ((divpos.top + 256) > sevt.pageY) &&
                         (divpos.left < sevt.pageX) &&
                         ((divpos.left + 256) > sevt.pageX))) {
                        tiles.push(layers[j].grid[x][y]);
                    continue layerfound;
                    }
                }
            }
        }
        return tiles;
    },

    // Get all interactable layers
    viableLayers: function() {
        if (this._viableLayers) return this._viableLayers;
        return this._viableLayers = $(this.map.layers).filter(
            function(i) {
                // TODO: make better indication of whether
                // this is an interactive layer
                return (this.map.layers[i].visibility === true) &&
                    (this.map.layers[i].CLASS_NAME === 'OpenLayers.Layer.TMS');
            }
        );
    },

    resetLayers: function() {
        this._viableLayers = null;
        this.callbacks['out']();
    },

    // React to a click mouse event
    // This is the `pause` handler attached to the map.
    getInfoForClick: function(evt) {
        var layers = this.viableLayers();
        var tiles = this.getTileStack(this.viableLayers(), evt);
        var feature = null,
        g = null;
        var that = this;

        for (var t = 0; t < tiles.length; t++) {
            this.gm.getGrid(tiles[t].url, function(g) {
                if (!g) return;
                var feature = g.getFeature(evt.pageX, evt.pageY, tiles[t].imgDiv, {
                    format: that.clickAction
                });
                if (feature) {
                    switch (that.clickAction) {
                        case 'full':
                            that.callbacks.click(feature, tiles[t].layer.map.viewPortDiv, t);
                        break;
                        case 'location':
                            window.location = feature;
                        break;
                    }
                }
            });
        }
    },

    // React to a hover mouse event, by finding all tiles,
    // finding features, and calling `this.callbacks[]`
    // This is the `click` handler attached to the map.
    getInfoForHover: function(evt) {
        var options = { format: 'teaser' };
        var layers = this.viableLayers();
        var tiles = this.getTileStack(this.viableLayers(), evt);
        var feature = null,
        g = null;
        var that = this;

        for (var t = 0; t < tiles.length; t++) {
            // This features has already been loaded, or
            // is currently being requested.
            this.gm.getGrid(tiles[t].url, function(g) {
                if (g && tiles[t]) {
                    var feature = g.getFeature(evt.pageX, evt.pageY, tiles[t].imgDiv, options);
                    if (feature) {
                        if (!tiles[t]) return;
                        if (feature && that.feature[t] !== feature) {
                            that.feature[t] = feature;
                            that.callbacks.out(feature, tiles[t].layer.map.div, t, evt);
                            that.callbacks.over(feature, tiles[t].layer.map.div, t, evt);
                        } else if (!feature) {
                            that.feature[t] = null;
                            that.callbacks.out(feature, tiles[t].layer.map.div, t, evt);
                        }
                    } else {
                        // Request this feature
                        // TODO(tmcw) re-add layer
                        that.feature[t] = null;
                        if (tiles[t]) {
                            that.callbacks.out({}, tiles[t].layer.map.div, t, evt);
                        } else {
                            that.callbacks.out({}, false, t);
                        }
                    }
                }
            });
        }
    },
    CLASS_NAME: 'wax.ol.Interaction'
});
// Wax: Legend Control
// -------------------

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.Legend = OpenLayers.Class(OpenLayers.Control, {
    CLASS_NAME: 'wax.ol.Legend',
    legend: null,
    options: null,

    initialize: function(options) {
        this.options = options || {};
        OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    activate: function() {
        this.legend = new wax.Legend(this.map.viewPortDiv, this.options.container);
        return OpenLayers.Control.prototype.activate.apply(this, arguments);
    },

    setMap: function(map) {
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
        this.activate();
        this.map.events.on({
            'addlayer': this.setLegend,
            'changelayer': this.setLegend,
            'removelayer': this.setLegend,
            'changebaselayer': this.setLegend,
            scope: this
        });
    },

    setLegend: function() {
        var urls = [];
        for (var i = 0; i < this.map.layers.length; i++) {
            var layer = this.map.layers[i];
            if (layer && layer.getURL && layer.visibility) {
                urls.push(layer.getURL(new OpenLayers.Bounds()));
            }
        }
        this.legend.render(urls);
    }
});

// Wax: Legend Control
// -------------------
// This is a simple layer switcher for OpenLayers, based loosely
// off of the strategy of the openlayers_plus blockswitcher.
// See the last lines for the `layeradded` event, which is the
// way to style layer switcher elements.

// Wax header
var wax = wax || {};
wax.ol = wax.ol || {};

wax.ol.Switcher = OpenLayers.Class(OpenLayers.Control, {
    CLASS_NAME: 'wax.ol.Switcher',

    // Called on `new`. In the tradition of BackBone.js, this control takes
    // an option `e` in its settings object which is a reference to a DOM
    // element it will own.
    initialize: function(options) {
        this.$element = $(options.e);
        this.options = options || {};
        OpenLayers.Control.prototype.initialize.apply(this, [options || {}]);
    },

    // Called from OpenLayers. Attach event handlers to call `this.redraw`
    // when the map state has changed.
    setMap: function(map) {
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
        this.map.events.on({
            addlayer: this.redraw,
            changelayer: this.redraw,
            removelayer: this.redraw,
            changebaselayer: this.redraw,
            scope: this
        });
        this.redraw();
    },

    // The callback of a click on a layer switcher layer element (usually a
    // link element).
    layerClick: function(evt) {
      var element = evt.currentTarget;
      var layer = $(element).data('layer');
      $('a.active', this.$element).removeClass('active');
      $.each(this.map.getLayersBy('isBaseLayer', false),
        function() {
          // Only make visible, non-RootContainer layers invisible.
          // RootContainer layers are behind-the-scenes OpenLayers-created
          // layers that help manage interaction with multiple Vector layers.
          if (this.CLASS_NAME !== 'OpenLayers.Layer.Vector.RootContainer' &&
             this.displayInLayerSwitcher) {
            this.setVisibility(false);
          }
        }
      );
      layer.setVisibility(true);
      $(element).addClass('active');
    },

    // Evaluate whether the map state has changed enough to justify a
    // redraw of this element
    needsRedraw: function() {
        if (!this.layerStates || this.layerStates.length ||
           (this.map.layers.length != this.layerStates.length)) {
            return true;
        }
        for (var i = 0, len = this.layerStates.length; i < len; i++) {
            var layerState = this.layerStates[i];
            var layer = this.map.layers[i];
            if ((layerState.name != layer.name) ||
                (layerState.inRange != layer.inRange) ||
                (layerState.id != layer.id) ||
                (layerState.visibility != layer.visibility)) {
              return true;
            }
        }
        return false;
    },

    // Rebuild this layer switcher by clearing out its `$element` (aka `e`)
    // and rebuilding its DOM structure.
    redraw: function() {
      if (this.needsRedraw()) {
        // Clear out previous layers
        this.$element.html('');

        // Save state -- for checking layer if the map state changed.
        // We save this before redrawing, because in the process of redrawing
        // we will trigger more visibility changes, and we want to not redraw
        // and enter an infinite loop.
        var len = this.map.layers.length;
        this.layerStates = [];
        for (var i = 0; i < len; i++) {
          var layerState = this.map.layers[i];
          this.layerStates[i] = {
              name: layerState.name,
              visibility: layerState.visibility,
              inRange: layerState.inRange,
              id: layerState.id
          };
        }

        var layers = this.map.layers.slice();
        for (i = 0, len = layers.length; i < len; i++) {
          var layer = layers[i];
          if (layer.displayInLayerSwitcher) {
            // Only check a baselayer if it is *the* baselayer, check data layers if they are visible
            var checked = layer.isBaseLayer ? (layer === this.map.baseLayer) : layer.getVisibility();
            var clickLayer = $.proxy(function(e) { this.layerClick(e); return false; }, this);
            var $layer_element = $('<a></a>');
            // Add states and click handler
            $layer_element
                .click(clickLayer)
                .attr('href', '#')
                .text(layer.name)
                .addClass('layer-toggle')
                .data('layer', layer)
                .attr('disabled', !layer.inRange);
                if (checked) {
                  $layer_element.addClass('active');
                }
            }
            this.$element.append($layer_element);
            // Trigger a `layeradded` event on the element we own. This is
            // the way to style layer switcher elements: attach a listener
            // to this event, and then modify on addition.
            this.$element.trigger('layeradded', $layer_element);
          }
        }
    }
});
