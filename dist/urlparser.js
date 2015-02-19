(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/urlparser.es6.js":[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var URLParser = (function () {
  function URLParser(path) {
    _classCallCheck(this, URLParser);

    // Setup
    this.uri, this.uri_parsed, this.uri_split;

    //Gets existing path unless passed to path
    this.uri = path ? path : this.getURL();

    //Parsing
    this.uri_split = this.parseURL();

    if (this.uri_split) {
      this.createParsedURL();
    }
  }

  _prototypeProperties(URLParser, null, {
    checkSlash: {
      value: function checkSlash(p) {
        //IE Check as IE does not process pre /
        var slash_test = p.match("^/");

        return slash_test != null;
      },
      writable: true,
      configurable: true
    },
    createParsedURL: {
      value: function createParsedURL() {
        //['http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2', 'http', '//', 'www.test.com', '3000', 'mytest/test/123', 'test=foo&test2=bar', 'hash1/hash2']
        if (this.uri_split) {
          this.uri_parsed = {
            fullpath: this.uri_split[0],
            protocol: this.uri_split[1], //=> "http:"
            hostname: this.uri_split[3], //=> "example.com"
            port: this.uri_split[4], //=> "3000"
            pathname: this.uri_split[5], //=> "pathname/test"
            pathsplit: this.splitPath(this.uri_split[5]), // => "['pathname', 'test']"
            fullquery: this.uri_split[6], // => "?search=test"
            query: this.parseQuery(this.uri_split[6]), //{seach:"test"}
            hash: this.uri_split[7] // => "#hash"
          };

          return this.uri_parsed;
        }

        return null;
      },
      writable: true,
      configurable: true
    },
    getProperty: {
      value: function getProperty(prop) {
        var start = prop.search(/\[/g);
        var end = prop.search(/\]/g);
        return start < end ? prop.slice(start + 1, end) : prop;
      },
      writable: true,
      configurable: true
    },
    getHostname: {

      // <<<<<< Get properties >>>>>>

      value: function getHostname() {
        return this.uri_parsed ? this.uri_parsed.hostname : null;
      },
      writable: true,
      configurable: true
    },
    getFullPath: {
      value: function getFullPath() {
        return this.uri_parsed ? this.uri_parsed.fullpath : null;
      },
      writable: true,
      configurable: true
    },
    getHash: {
      value: function getHash() {
        return this.uri_parsed ? this.uri_parsed.hash : null;
      },
      writable: true,
      configurable: true
    },
    getPathname: {
      value: function getPathname() {
        return this.uri_parsed ? this.uri_parsed.pathname : null;
      },
      writable: true,
      configurable: true
    },
    getPort: {
      value: function getPort() {
        return this.uri_parsed ? this.uri_parsed.port : null;
      },
      writable: true,
      configurable: true
    },
    getProtocol: {
      value: function getProtocol() {
        return this.uri_parsed ? this.uri_parsed.protocol : null;
      },
      writable: true,
      configurable: true
    },
    getQueryString: {
      value: function getQueryString() {
        return this.uri_parsed ? this.uri_parsed.fullquery : null;
      },
      writable: true,
      configurable: true
    },
    getSplitPath: {
      value: function getSplitPath() {
        return this.uri_parsed ? this.uri_parsed.pathsplit : null;
      },
      writable: true,
      configurable: true
    },
    getQueryObj: {
      value: function getQueryObj() {
        return this.uri_parsed ? this.uri_parsed.query : null;
      },
      writable: true,
      configurable: true
    },
    getURL: {
      value: function getURL() {
        //Gets Current Path
        var url = decodeURIComponent(window.location.href);
        url;
      },
      writable: true,
      configurable: true
    },
    parseQuery: {
      value: function parseQuery(queryString) {
        var qs = undefined,
            queries = undefined,
            params = undefined,
            temp = undefined,
            t = undefined,
            i = undefined,
            l = undefined;
        // Parse query into an object - http://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
        qs = queryString.replace(/^\?/, "");

        queries = qs.split("&");

        params = queries.length >= 1 && queries[0] != "" ? {} : null;

        if (params) {
          l = queries.length;
          for (i = 0; i < l; i++) {
            temp = queries[i].split("=");
            t = temp[0];
            params[t] = temp[1];
          }
        }

        return params;
      },
      writable: true,
      configurable: true
    },
    parseURL: {
      value: function parseURL() {
        // Regex taken from is from javascript, the good parts by Douglas Crockford - Best performance (http://jsperf.com/url-parse2)
        var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

        return this.uri.match(parse_url);
      },
      writable: true,
      configurable: true
    },
    splitPath: {
      value: function splitPath(p) {
        // Splits path into array
        var split = p.split("/");

        if (this.checkSlash(p)) {
          split.shift();
        }
        console.debug(split);
        return split;
      },
      writable: true,
      configurable: true
    }
  });

  return URLParser;
})();

module.exports = URLParser;

},{}]},{},["./lib/urlparser.es6.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy91cmxwYXJzZXIvbGliL3VybHBhcnNlci5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTSxTQUFTO0FBZ0NGLFdBaENQLFNBQVMsQ0FnQ0QsSUFBSTswQkFoQ1osU0FBUzs7O0FBa0NYLFFBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzs7QUFHMUMsUUFBSSxDQUFDLEdBQUcsR0FBRyxBQUFDLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7QUFHekMsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRWpDLFFBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztBQUNoQixVQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7S0FDdkI7R0FFRjs7dUJBOUNHLFNBQVM7QUFFYixjQUFVO2FBQUEsb0JBQUMsQ0FBQyxFQUFDOztBQUVYLFlBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7O0FBRTlCLGVBQU8sVUFBVSxJQUFJLElBQUksQ0FBQTtPQUMxQjs7OztBQUVELG1CQUFlO2FBQUEsMkJBQUU7O0FBRWYsWUFBSSxJQUFJLENBQUMsU0FBUyxFQUFDO0FBQ2pCLGNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsb0JBQVEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMxQixvQkFBUSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFCLG9CQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsZ0JBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFD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Q0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixlQUFPLEtBQUssQ0FBQztPQUNkOzs7Ozs7U0E1SUcsU0FBUzs7O0FBa0pmLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIFVSTFBhcnNlciB7XG5cbiAgY2hlY2tTbGFzaChwKXtcbiAgICAvL0lFIENoZWNrIGFzIElFIGRvZXMgbm90IHByb2Nlc3MgcHJlIC9cbiAgICB2YXIgc2xhc2hfdGVzdCA9IHAubWF0Y2goXCJeL1wiKVxuXG4gICAgcmV0dXJuIHNsYXNoX3Rlc3QgIT0gbnVsbFxuICB9XG5cbiAgY3JlYXRlUGFyc2VkVVJMKCl7XG4gICAgLy9bJ2h0dHA6Ly93d3cudGVzdC5jb206MzAwMC9teXRlc3QvdGVzdC8xMjM/dGVzdD1mb28mdGVzdDI9YmFyI2hhc2gxL2hhc2gyJywgJ2h0dHAnLCAnLy8nLCAnd3d3LnRlc3QuY29tJywgJzMwMDAnLCAnbXl0ZXN0L3Rlc3QvMTIzJywgJ3Rlc3Q9Zm9vJnRlc3QyPWJhcicsICdoYXNoMS9oYXNoMiddXG4gICAgaWYgKHRoaXMudXJpX3NwbGl0KXtcbiAgICAgIHRoaXMudXJpX3BhcnNlZCA9IHtcbiAgICAgICAgZnVsbHBhdGg6dGhpcy51cmlfc3BsaXRbMF0sXG4gICAgICAgIHByb3RvY29sOnRoaXMudXJpX3NwbGl0WzFdLCAvLz0+IFwiaHR0cDpcIlxuICAgICAgICBob3N0bmFtZTp0aGlzLnVyaV9zcGxpdFszXSwgLy89PiBcImV4YW1wbGUuY29tXCJcbiAgICAgICAgcG9ydDp0aGlzLnVyaV9zcGxpdFs0XSwgLy89PiBcIjMwMDBcIlxuICAgICAgICBwYXRobmFtZTp0aGlzLnVyaV9zcGxpdFs1XSwgLy89PiBcInBhdGhuYW1lL3Rlc3RcIlxuICAgICAgICBwYXRoc3BsaXQ6dGhpcy5zcGxpdFBhdGgodGhpcy51cmlfc3BsaXRbNV0pLCAgLy8gPT4gXCJbJ3BhdGhuYW1lJywgJ3Rlc3QnXVwiXG4gICAgICAgIGZ1bGxxdWVyeTp0aGlzLnVyaV9zcGxpdFs2XSwgIC8vID0+IFwiP3NlYXJjaD10ZXN0XCJcbiAgICAgICAgcXVlcnk6dGhpcy5wYXJzZVF1ZXJ5KHRoaXMudXJpX3NwbGl0WzZdKSwgLy97c2VhY2g6XCJ0ZXN0XCJ9XG4gICAgICAgIGhhc2g6dGhpcy51cmlfc3BsaXRbN10gLy8gPT4gXCIjaGFzaFwiXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy51cmlfcGFyc2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcblxuICB9XG5cblxuICBjb25zdHJ1Y3RvcihwYXRoKXtcbiAgICAvLyBTZXR1cFxuICAgIHRoaXMudXJpLCB0aGlzLnVyaV9wYXJzZWQsIHRoaXMudXJpX3NwbGl0O1xuXG4gICAgLy9HZXRzIGV4aXN0aW5nIHBhdGggdW5sZXNzIHBhc3NlZCB0byBwYXRoXG4gICAgdGhpcy51cmkgPSAocGF0aCkgPyBwYXRoIDogdGhpcy5nZXRVUkwoKTtcblxuICAgIC8vUGFyc2luZ1xuICAgIHRoaXMudXJpX3NwbGl0ID0gdGhpcy5wYXJzZVVSTCgpO1xuXG4gICAgaWYodGhpcy51cmlfc3BsaXQpe1xuICAgICAgdGhpcy5jcmVhdGVQYXJzZWRVUkwoKVxuICAgIH1cblxuICB9XG5cbiAgZ2V0UHJvcGVydHkocHJvcCl7XG4gICAgbGV0IHN0YXJ0ID0gcHJvcC5zZWFyY2goL1xcWy9nKTtcbiAgICBsZXQgZW5kID0gcHJvcC5zZWFyY2goL1xcXS9nKTtcbiAgICByZXR1cm4gKHN0YXJ0IDwgZW5kKSA/IHByb3Auc2xpY2Uoc3RhcnQrMSwgZW5kKSA6IHByb3A7XG4gIH1cblxuICAvLyA8PDw8PDwgR2V0IHByb3BlcnRpZXMgPj4+Pj4+XG5cbiAgZ2V0SG9zdG5hbWUoKXtcbiAgICByZXR1cm4gKHRoaXMudXJpX3BhcnNlZCkgPyB0aGlzLnVyaV9wYXJzZWQuaG9zdG5hbWUgOiBudWxsXG4gIH1cblxuICBnZXRGdWxsUGF0aCgpe1xuICAgIHJldHVybiAodGhpcy51cmlfcGFyc2VkKSA/IHRoaXMudXJpX3BhcnNlZC5mdWxscGF0aCA6IG51bGxcbiAgfVxuXG4gIGdldEhhc2goKXtcbiAgICByZXR1cm4gKHRoaXMudXJpX3BhcnNlZCkgPyB0aGlzLnVyaV9wYXJzZWQuaGFzaCA6IG51bGxcbiAgfVxuXG4gIGdldFBhdGhuYW1lKCl7XG4gICAgcmV0dXJuICh0aGlzLnVyaV9wYXJzZWQpID8gdGhpcy51cmlfcGFyc2VkLnBhdGhuYW1lIDogbnVsbFxuICB9XG5cbiAgZ2V0UG9ydCgpe1xuICAgIHJldHVybiAodGhpcy51cmlfcGFyc2VkKSA/IHRoaXMudXJpX3BhcnNlZC5wb3J0IDogbnVsbFxuICB9XG5cbiAgZ2V0UHJvdG9jb2woKXtcbiAgICByZXR1cm4gKHRoaXMudXJpX3BhcnNlZCkgPyB0aGlzLnVyaV9wYXJzZWQucHJvdG9jb2wgOiBudWxsXG4gIH1cblxuICBnZXRRdWVyeVN0cmluZygpe1xuICAgIHJldHVybiAodGhpcy51cmlfcGFyc2VkKSA/IHRoaXMudXJpX3BhcnNlZC5mdWxscXVlcnkgOiBudWxsXG4gIH1cblxuICBnZXRTcGxpdFBhdGgoKXtcbiAgICByZXR1cm4gKHRoaXMudXJpX3BhcnNlZCkgPyB0aGlzLnVyaV9wYXJzZWQucGF0aHNwbGl0IDogbnVsbFxuICB9XG5cbiAgZ2V0UXVlcnlPYmooKXtcbiAgICByZXR1cm4gKHRoaXMudXJpX3BhcnNlZCkgPyB0aGlzLnVyaV9wYXJzZWQucXVlcnkgOiBudWxsXG4gIH1cblxuXG5cblxuICBnZXRVUkwoKSB7XG4gICAgLy9HZXRzIEN1cnJlbnQgUGF0aFxuICAgIHZhciB1cmwgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHVybFxuICB9XG5cblxuICBwYXJzZVF1ZXJ5KHF1ZXJ5U3RyaW5nKXtcbiAgICBsZXQgcXMsIHF1ZXJpZXMsIHBhcmFtcywgdGVtcCwgdCwgaSwgbDtcbiAgICAvLyBQYXJzZSBxdWVyeSBpbnRvIGFuIG9iamVjdCAtIGh0dHA6Ly93d3cuam9lemltanMuY29tL2phdmFzY3JpcHQvMy13YXlzLXRvLXBhcnNlLWEtcXVlcnktc3RyaW5nLWluLWEtdXJsL1xuICAgIHFzID0gcXVlcnlTdHJpbmcucmVwbGFjZSgvXlxcPy8sIFwiXCIpO1xuXG4gICAgcXVlcmllcyA9IHFzLnNwbGl0KFwiJlwiKTtcblxuICAgIHBhcmFtcyAgPSAocXVlcmllcy5sZW5ndGggPj0gMSAmJiBxdWVyaWVzWzBdICE9IFwiXCIpID8ge30gOiBudWxsO1xuXG4gICAgaWYocGFyYW1zKXtcbiAgICAgIGw9cXVlcmllcy5sZW5ndGg7XG4gICAgICBmb3IoaT0wOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgdGVtcCA9IHF1ZXJpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgdCA9IHRlbXBbMF07XG4gICAgICAgIHBhcmFtc1t0XSA9IHRlbXBbMV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG5cbiAgcGFyc2VVUkwoKXtcbiAgICAvLyBSZWdleCB0YWtlbiBmcm9tIGlzIGZyb20gamF2YXNjcmlwdCwgdGhlIGdvb2QgcGFydHMgYnkgRG91Z2xhcyBDcm9ja2ZvcmQgLSBCZXN0IHBlcmZvcm1hbmNlIChodHRwOi8vanNwZXJmLmNvbS91cmwtcGFyc2UyKVxuICAgIGNvbnN0IHBhcnNlX3VybCA9IC9eKD86KFtBLVphLXpdKyk6KT8oXFwvezAsM30pKFswLTkuXFwtQS1aYS16XSspKD86OihcXGQrKSk/KD86XFwvKFtePyNdKikpPyg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8kLztcblxuICAgIHJldHVybiB0aGlzLnVyaS5tYXRjaChwYXJzZV91cmwpO1xuICB9XG5cbiAgc3BsaXRQYXRoKHApe1xuICAgIC8vIFNwbGl0cyBwYXRoIGludG8gYXJyYXlcbiAgICB2YXIgc3BsaXQgPSBwLnNwbGl0KCcvJyk7XG5cbiAgICBpZih0aGlzLmNoZWNrU2xhc2gocCkpe1xuICAgICAgc3BsaXQuc2hpZnQoKTtcbiAgICB9XG4gICAgY29uc29sZS5kZWJ1ZyhzcGxpdCk7XG4gICAgcmV0dXJuIHNwbGl0O1xuICB9XG5cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVVJMUGFyc2VyO1xuXG5cblxuIl19
