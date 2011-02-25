doc:
	docco control/ol/*.js control/g/*.js

build/wax.ol.min.js:
	cat lib/*.js control/lib/*.js control/ol/*.js > build/wax.ol.js
	uglifyjs build/wax.ol.js > build/wax.ol.min.js

build/wax.g.min.js:
	cat lib/*.js control/lib/*.js control/g/*.js connectors/g/*.js > build/wax.g.js
	uglifyjs build/wax.g.js > build/wax.g.min.js

build_setup:
	mkdir build

build: build_setup build/wax.ol.min.js build/wax.g.min.js

clean:
	rm -rf build
