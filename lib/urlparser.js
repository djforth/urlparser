'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URLParser = function () {
  _createClass(URLParser, [{
    key: 'checkSlash',
    value: function checkSlash(p) {
      // IE Check as IE does not process pre /
      var slash_test = p.match('^/');

      return slash_test !== null;
    }
  }, {
    key: 'createParsedURL',
    value: function createParsedURL() {
      // ['http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2', 'http', '//', 'www.test.com', '3000', 'mytest/test/123', 'test=foo&test2=bar', 'hash1/hash2']
      if (this.uri_split) {
        this.uri_parsed = {
          fullpath: this.uri_split[0],
          protocol: this.uri_split[1] // => 'http:'
          , hostname: this.uri_split[3] // => 'example.com'
          , port: this.uri_split[4] // => '3000'
          , pathname: this.uri_split[5] // => 'pathname/test'
          , pathsplit: this.splitPath(this.uri_split[5]) // => '['pathname' 'test']'
          , fullquery: this.uri_split[6] // => '?search=test'
          , query: this.parseQuery(this.uri_split[6]) // {seach:'test'}
          , hash: this.uri_split[7] // => '#hash'
        };

        return this.uri_parsed;
      }

      return null;
    }
  }]);

  function URLParser(path) {
    _classCallCheck(this, URLParser);

    // Setup
    this.uri_parsed = {};

    // Gets existing path unless passed to path
    this.uri = path === undefined ? this.getURL() : path;

    // Parsing
    this.uri_split = this.parseURL();

    if (this.uri_split) {
      this.createParsedURL();
    }
  }

  _createClass(URLParser, [{
    key: 'getProperty',
    value: function getProperty(prop) {
      var start = void 0,
          end = void 0;
      start = prop.search(/\[/g);
      end = prop.search(/\]/g);
      return start < end ? prop.slice(start + 1, end) : prop;
    }

    // <<<<<< Get properties >>>>>>

  }, {
    key: 'getHostname',
    value: function getHostname() {
      return this.uri_parsed ? this.uri_parsed.hostname : null;
    }
  }, {
    key: 'getFullPath',
    value: function getFullPath() {
      return this.uri_parsed ? this.uri_parsed.fullpath : null;
    }
  }, {
    key: 'getHash',
    value: function getHash() {
      return this.uri_parsed ? this.uri_parsed.hash : null;
    }
  }, {
    key: 'getPathname',
    value: function getPathname() {
      return this.uri_parsed ? this.uri_parsed.pathname : null;
    }
  }, {
    key: 'getPort',
    value: function getPort() {
      return this.uri_parsed ? this.uri_parsed.port : null;
    }
  }, {
    key: 'getProtocol',
    value: function getProtocol() {
      return this.uri_parsed ? this.uri_parsed.protocol : null;
    }
  }, {
    key: 'getQueryString',
    value: function getQueryString() {
      return this.uri_parsed ? this.uri_parsed.fullquery : null;
    }
  }, {
    key: 'getSplitPath',
    value: function getSplitPath() {
      return this.uri_parsed ? this.uri_parsed.pathsplit : null;
    }
  }, {
    key: 'getQueryObj',
    value: function getQueryObj() {
      return this.uri_parsed ? this.uri_parsed.query : null;
    }
  }, {
    key: 'getURL',
    value: function getURL() {
      // Gets Current Path
      var url = decodeURIComponent(window.location.href);
      return url;
    }
  }, {
    key: 'parseQuery',
    value: function parseQuery(queryString) {
      var qs = void 0,
          queries = void 0,
          params = void 0,
          temp = void 0,
          t = void 0,
          i = void 0,
          l = void 0;
      // Parse query into an object - http://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
      if (queryString) {
        qs = queryString.replace(/^\?/, '');

        queries = qs.split('&');

        params = queries.length >= 1 && queries[0] !== '' ? {} : null;

        if (params) {
          l = queries.length;
          for (i = 0; i < l; i++) {
            temp = queries[i].split('=');
            t = temp[0];
            params[t] = temp[1];
          }
        }

        return params;
      }

      return null;
    }
  }, {
    key: 'parseURL',
    value: function parseURL() {
      // Regex taken from is from javascript, the good parts by Douglas Crockford - Best performance (http://jsperf.com/url-parse2)
      var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

      return this.uri.match(parse_url);
    }
  }, {
    key: 'splitPath',
    value: function splitPath(p) {
      // Splits path into array
      var split = p.split('/');

      if (this.checkSlash(p)) {
        split.shift();
      }
      return split;
    }
  }]);

  return URLParser;
}();

module.exports = URLParser;