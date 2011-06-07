wax.util = wax.util || {};

// Utils are extracted from other libraries or
// written from scratch to plug holes in browser compatibility.
wax.util = {
    // From Bonzo
    offset: function(el) {
        // TODO: window margin offset
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        var top = el.offsetTop;
        var left = el.offsetLeft;

        try {
            while (el = el.offsetParent) {
                top += el.offsetTop;
                left += el.offsetLeft;

                // Add additional CSS3 transform handling.
                // These features are used by Google Maps API V3.
                var style = el.style.transform ||
                    el.style['-webkit-transform'] ||
                    el.style.MozTransform;
                if (style) {
                    var match = style.match(/translate\((.+)px, (.+)px\)/);
                    if (match) {
                        top += parseInt(match[2], 10);
                        left += parseInt(match[1], 10);
                    }
                }
            }
        } catch(e) {
            // Hello, internet explorer.
        }

        // Offsets from the body
        top += document.body.offsetTop;
        left += document.body.offsetLeft;
        // Offsets from the HTML element
        top += document.body.parentNode.offsetTop;
        left += document.body.parentNode.offsetLeft;

        // Firefox and other weirdos. Similar technique to jQuery's
        // `doesNotIncludeMarginInBodyOffset`.
        var htmlComputed = document.defaultView ?
          window.getComputedStyle(document.body.parentNode) :
          document.body.parentNode.currentStyle;
        if (document.body.parentNode.offsetTop !==
            parseInt(htmlComputed.marginTop, 10)) {
            top += parseInt(htmlComputed.marginTop, 10);
            left += parseInt(htmlComputed.marginLeft, 10);
        }

        return {
            top: top,
            left: left,
            height: height,
            width: width
        };
    },
    // From underscore, minus funcbind for now.
    // Returns a version of a function that always has the second parameter,
    // `obj`, as `this`.
    bind: function(func, obj) {
      var args = Array.prototype.slice.call(arguments, 2);
      return function() {
        return func.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
      };
    },
    // From underscore
    isString: function(obj) {
      return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
    },
    // IE doesn't have indexOf
    indexOf: function(array, item) {
      var nativeIndexOf = Array.prototype.indexOf;
      if (array === null) return -1;
      var i, l;
      if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
      for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
      return -1;
    },
    // is this object an array?
    isArray: Array.isArray || function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },
    // From underscore: reimplement the ECMA5 `Object.keys()` methodb
    keys: Object.keys || function(obj) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      if (obj !== Object(obj)) throw new TypeError('Invalid object');
      var keys = [];
      for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
      return keys;
    },
    // From quirksmode: normalize the offset of an event from the top-left
    // of the page.
    eventoffset: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            return {
                x: e.pageX,
                y: e.pageY
            };
        } else if (e.clientX || e.clientY) {
            // IE
            var doc = document.documentElement, body = document.body;
            var htmlComputed = document.body.parentNode.currentStyle;
            var topMargin = parseInt(htmlComputed.marginTop, 10) || 0;
            var leftMargin = parseInt(htmlComputed.marginLeft, 10) || 0;
            return {
                x: e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                  (doc && doc.clientLeft || body && body.clientLeft || 0) + leftMargin,
                y: e.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                  (doc && doc.clientTop  || body && body.clientTop  || 0) + topMargin
            };
        } else if (e.touches && e.touches.length === 1) {
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            };
        }
    }
};
