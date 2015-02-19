(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./specs/app_tests.es6.js":[function(require,module,exports){
"use strict";

var urlparser_spec = require("./urlParser_spec.es6.js");

},{"./urlParser_spec.es6.js":"/Users/djforth/websites/urlparser/specs/urlParser_spec.es6.js"}],"/Users/djforth/websites/urlparser/lib/urlparser.es6.js":[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var URLParser = (function () {
  function URLParser(path) {
    var current = arguments[1] === undefined ? true : arguments[1];
    _classCallCheck(this, URLParser);

    this.uri = !current ? path : this.getURL();
  }

  _prototypeProperties(URLParser, null, {
    getURI: {
      value: function getURI() {
        var url = decodeURIComponent(window.location.href);
        url;
      },
      writable: true,
      configurable: true
    }
  });

  return URLParser;
})();

},{}],"/Users/djforth/websites/urlparser/specs/urlParser_spec.es6.js":[function(require,module,exports){
"use strict";

var URLParser = require("../lib/urlparser.es6.js");
// var urlparser = null;
// let describe, beforeEach, it, expect
console.log("WTF???");
describe("URLParser", function () {
  var urlparser = undefined;

  beforeEach(function () {
    urlparser = new URLParser("http://www.test.com:3000/mytest/test/123#hash1/hash2?test=foo&test2=bar");
  });

  it("Should exist", function () {
    console.log("Erm? yesying 123");
    expect(urlparser).not.toBeNull();
    expect(urlparser).toBeDefined();
  });
});

},{"../lib/urlparser.es6.js":"/Users/djforth/websites/urlparser/lib/urlparser.es6.js"}]},{},["./specs/app_tests.es6.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy91cmxwYXJzZXIvc3BlY3MvYXBwX3Rlc3RzLmVzNi5qcyIsIi9Vc2Vycy9kamZvcnRoL3dlYnNpdGVzL3VybHBhcnNlci9saWIvdXJscGFyc2VyLmVzNi5qcyIsIi9Vc2Vycy9kamZvcnRoL3dlYnNpdGVzL3VybHBhcnNlci9zcGVjcy91cmxQYXJzZXJfc3BlYy5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBOzs7Ozs7Ozs7SUNGakQsU0FBUztBQUNGLFdBRFAsU0FBUyxDQUNELElBQUk7UUFBQyxPQUFPLGdDQUFDLElBQUk7MEJBRHpCLFNBQVM7O0FBRVgsUUFBSSxDQUFDLEdBQUcsR0FBRyxBQUFDLENBQUMsT0FBTyxHQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7R0FDN0M7O3VCQUhHLFNBQVM7QUFLYixVQUFNO2FBQUEsa0JBQUc7QUFDUCxZQUFJLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELFdBQUcsQ0FBQTtPQUNKOzs7Ozs7U0FSRyxTQUFTOzs7Ozs7QUNBZixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQTs7O0FBR2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDckIsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFVO0FBQzlCLE1BQUksU0FBUyxZQUFBLENBQUE7O0FBRWIsWUFBVSxDQUFDLFlBQVU7QUFDbkIsYUFBUyxHQUFHLElBQUksU0FBUyxDQUFDLHlFQUF5RSxDQUFDLENBQUE7R0FDckcsQ0FBQyxDQUFBOztBQUVGLElBQUUsQ0FBQyxjQUFjLEVBQUMsWUFBVTtBQUMxQixXQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDL0IsVUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUNoQyxVQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7R0FDaEMsQ0FBQyxDQUFBO0NBRUgsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuXG52YXIgdXJscGFyc2VyX3NwZWMgPSByZXF1aXJlKCcuL3VybFBhcnNlcl9zcGVjLmVzNi5qcycpIiwiY2xhc3MgVVJMUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocGF0aCxjdXJyZW50PXRydWUpe1xuICAgIHRoaXMudXJpID0gKCFjdXJyZW50KSA/IHBhdGggOiB0aGlzLmdldFVSTCgpXG4gIH1cblxuICBnZXRVUkkoKSB7XG4gICAgdmFyIHVybCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdXJsXG4gIH1cblxufVxuXG5cblxuIiwidmFyIFVSTFBhcnNlciA9IHJlcXVpcmUoJy4uL2xpYi91cmxwYXJzZXIuZXM2LmpzJylcbi8vIHZhciB1cmxwYXJzZXIgPSBudWxsO1xuLy8gbGV0IGRlc2NyaWJlLCBiZWZvcmVFYWNoLCBpdCwgZXhwZWN0XG5jb25zb2xlLmxvZyhcIldURj8/P1wiKVxuZGVzY3JpYmUoJ1VSTFBhcnNlcicsIGZ1bmN0aW9uKCl7XG4gIGxldCB1cmxwYXJzZXJcblxuICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCl7XG4gICAgdXJscGFyc2VyID0gbmV3IFVSTFBhcnNlcignaHR0cDovL3d3dy50ZXN0LmNvbTozMDAwL215dGVzdC90ZXN0LzEyMyNoYXNoMS9oYXNoMj90ZXN0PWZvbyZ0ZXN0Mj1iYXInKVxuICB9KVxuXG4gIGl0KCdTaG91bGQgZXhpc3QnLGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJFcm0/IHllc3lpbmcgMTIzXCIpXG4gICAgZXhwZWN0KHVybHBhcnNlcikubm90LnRvQmVOdWxsKClcbiAgICBleHBlY3QodXJscGFyc2VyKS50b0JlRGVmaW5lZCgpXG4gIH0pXG5cbn0pXG5cbiJdfQ==
