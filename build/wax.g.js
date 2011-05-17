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
// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Controls constructor.
wax.g.Controls = function(map) {
    this.map = map;

    // Find the map div reference. Munging of the google maps codebase makes
    // the key to this reference unpredictable, hence we iterate to find.
    this.mapDiv = false;
    for (var key in map) {
        // IE safe check for whether object is a DOM element.
        if (map[key] && map[key].nodeType > 0) {
            this.mapDiv = map[key];
            break;
        }
    }
};

// Since Google Maps obscures mouseover events, grids need to calculated
// in order to simulate them, and eventually do multi-layer interaction.
wax.g.Controls.prototype.calculateGrid = function() {
    if (this.map.interaction_grid) return;
    // Get all 'marked' tiles, added by the `wax.g.MapType` layer.
    var interactive_tiles = $('div.interactive-div-' + this.map.getZoom() + ' img', this.mapDiv);
    var start_offset = $(this.mapDiv).offset();
    // Return an array of objects which have the **relative** offset of
    // each tile, with a reference to the tile object in `tile`, since the API
    // returns evt coordinates as relative to the map object.
    var tiles = $(interactive_tiles).map(function(t) {
        var e_offset = $(interactive_tiles[t]).offset();
        return {
            xy: {
                left: e_offset.left - start_offset.left,
                top: e_offset.top - start_offset.top
            },
            tile: interactive_tiles[t]
        };
    });
    return tiles;
};

wax.g.Controls.prototype.interaction = function(options) {
    options = options || {};
    var that = this;
    var gm = new wax.GridManager();
    var f = null;

    // This requires wax.Tooltip or similar
    var callbacks = options.callbacks || {
        out: wax.tooltip.unselect,
        over: wax.tooltip.select,
        click: wax.tooltip.click
    };

    var inTile = function(sevt, xy) {
        if ((xy.top < sevt.y) &&
            ((xy.top + 256) > sevt.y) &&
            (xy.left < sevt.x) &&
            ((xy.left + 256) > sevt.x)) {
            return true;
        }
    };

    var find = $.proxy(function(map, evt) {
        var found = false;
        var interaction_grid = this.calculateGrid();
        for (var i = 0; i < interaction_grid.length && !found; i++) {
            if (inTile(evt.pixel, interaction_grid[i].xy)) {
                var found = interaction_grid[i];
            }
        }
        return found;
    }, this);

    google.maps.event.addListener(this.map, 'mousemove', function(evt) {
        var opt = { format: 'teaser' };
        var found = find(this.map, evt);
        if (!found) return;
        gm.getGrid($(found.tile).attr('src'), function(g) {
            if (!g) return;
            var feature = g.getFeature(
                evt.pixel.x + $(that.mapDiv).offset().left,
                evt.pixel.y + $(that.mapDiv).offset().top,
                found.tile,
                opt
            );
            if (feature !== f) {
                callbacks.out(feature, $(that.mapDiv), 0);
                callbacks.over(feature, $(that.mapDiv), 0);
                f = feature;
            }
        });
    });

    google.maps.event.addListener(this.map, 'click', function(evt) {
        var opt = {
            format: options.clickAction || 'full'
        };
        var found = find(this.map, evt);
        if (!found) return;
        gm.getGrid($(found.tile).attr('src'), function(g) {
            if (!g) return;
            var feature = g.getFeature(
                evt.pixel.x + $(that.mapDiv).offset().left,
                evt.pixel.y + $(that.mapDiv).offset().top,
                found.tile,
                opt
            );
            if (feature) {
                if (opt.format == 'full') {
                    callbacks.click(feature, $(that.mapDiv), 0);
                } else {
                    window.location = feature;
                }
            }
        });
    });

    // Ensure chainability
    return this;
};

wax.g.Controls.prototype.legend = function() {
    var legend = new wax.Legend($(this.mapDiv)),
        url = null;

    // Ideally we would use the 'tilesloaded' event here. This doesn't seem to
    // work so we use the much less appropriate 'idle' event.
    google.maps.event.addListener(this.map, 'idle', $.proxy(function() {
        if (url) return;
        var img = $('div.interactive-div-' + this.map.getZoom() + ' img:first',
            this.mapDiv);
        img && (url = img.attr('src')) && legend.render([url]);
    }, this));

    // Ensure chainability
    return this;
};

wax.g.Controls.prototype.embedder = function(script_id) {
    $(this.mapDiv).prepend($('<input type="text" class="embed-src" />')
    .css({
        'z-index': '9999999999',
        'position': 'relative'
    })
    .val("<div id='" + script_id + "'>" + $('#' + script_id).html() + '</div>'));
    
    // Ensure chainability
    return this;
};
// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Wax Google Maps MapType: takes an object of options in the form
//
//     {
//       name: '',
//       filetype: '.png',
//       layerName: 'world-light',
//       alt: '',
//       zoomRange: [0, 18],
//       baseUrl: 'a url',
//     }
wax.g.MapType = function(options) {
    options = options || {};
    this.name = options.name || '';
    this.alt = options.alt || '';
    this.filetype = options.filetype || '.png';
    this.layerName = options.layerName || 'world-light';
    if (options.zoomRange) {
        this.minZoom = options.zoomRange[0];
        this.maxZoom = options.zoomRange[1];
    } else {
        this.minZoom = 0;
        this.maxZoom = 18;
    }
    this.baseUrl = options.baseUrl ||
        'http://a.tile.mapbox.com/';
    this.blankImage = options.blankImage || '';

    // non-configurable options
    this.interactive = true;
    this.tileSize = new google.maps.Size(256, 256);

    // DOM element cache
    this.cache = {};
};

// Get a tile element from a coordinate, zoom level, and an ownerDocument.
wax.g.MapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var key = zoom + '/' + coord.x + '/' + coord.y;
    this.cache[key] = this.cache[key] || $('<div></div>')
        .addClass('interactive-div-' + zoom)
        .width(256).height(256)
        .data('gTileKey', key)
        .append(
            $('<img />')
            .width(256).height(256)
            .attr('src', this.getTileUrl(coord, zoom))
            .error(function() { $(this).hide() })
        )[0];
    return this.cache[key];
};

// Remove a tile that has fallen out of the map's viewport.
//
// TODO: expire cache data in the gridmanager.
wax.g.MapType.prototype.releaseTile = function(tile) {
    var key = $(tile).data('gTileKey');
    this.cache[key] && delete this.cache[key];
    $(tile).remove();
};

// Get a tile url, based on x, y coordinates and a z value.
wax.g.MapType.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    var mod = Math.pow(2, z),
        y = (mod - 1) - coord.y,
        x = (coord.x % mod);
        x = (x < 0) ? (coord.x % mod) + mod : x;

    return (y >= 0)
        ? (this.baseUrl + '1.0.0/' + this.layerName + '/' + z + '/' +
           x + '/' + y + this.filetype)
        : this.blankImage;
};
