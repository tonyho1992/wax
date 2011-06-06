UGLIFYJS = ./node_modules/.bin/uglifyjs

dist: dist_setup dist/wax.ol.min.js dist/wax.g.min.js dist/wax.mm.min.js lint

dist/wax.ol.min.js:
	cat ext/reqwest.min.js lib/*.js control/lib/*.js control/ol/*.js > dist/wax.ol.js
	$(UGLIFYJS) dist/wax.ol.js > dist/wax.ol.min.js

dist/wax.g.min.js:
	cat ext/reqwest.min.js lib/*.js control/lib/*.js control/g/*.js connectors/g/*.js > dist/wax.g.js
	$(UGLIFYJS) dist/wax.g.js > dist/wax.g.min.js

dist/wax.mm.min.js:
	cat ext/reqwest.min.js lib/*.js control/lib/*.js control/mm/*.js connectors/mm/*.js > dist/wax.mm.js
	$(UGLIFYJS) dist/wax.mm.js > dist/wax.mm.min.js

dist_setup:
	mkdir dist

clean:
	rm -rf dist

doc:
	./node_modules/.bin/docco control/mm/*.js

ext:
	-test ! -d ext && mkdir ext
	wget http://code.jquery.com/jquery-1.5.1.min.js -O ext/jquery-1.5.min.js
	wget --no-check-certificate https://github.com/simplegeo/polymaps/raw/master/polymaps.js -O ext/polymaps.js
	wget --no-check-certificate https://github.com/developmentseed/openlayers_slim/raw/v1.9/OpenLayers.js -O ext/OpenLayers.js
	wget --no-check-certificate https://github.com/stamen/modestmaps-js/raw/c202b0a274f4235c4ebd8362fff11d88a2c0fc8f/modestmaps.min.js -O ext/modestmaps.js

lint:
	./node_modules/.bin/jshint control/lib/*.js control/mm/*.js --config=jshint.json

.PHONY: ext doc clean
