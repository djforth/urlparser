class URLParser{
  checkSlash(p){
    // IE Check as IE does not process pre /
    let slash_test = p.match('^/');

    return slash_test != null;
  }

  createParsedURL(){
    // ['http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2', 'http', '//', 'www.test.com', '3000', 'mytest/test/123', 'test=foo&test2=bar', 'hash1/hash2']
    if (this.uri_split){
      this.uri_parsed = {
        fullpath: this.uri_split[0]
        , protocol: this.uri_split[1] // => 'http:'
        , hostname: this.uri_split[3] // => 'example.com'
        , port: this.uri_split[4] // => '3000'
        , pathname: this.uri_split[5] // => 'pathname/test'
        , pathsplit: this.splitPath(this.uri_split[5])  // => '['pathname' 'test']'
        , fullquery: this.uri_split[6]  // => '?search=test'
        , query: this.parseQuery(this.uri_split[6]) // {seach:'test'}
        , hash: this.uri_split[7] // => '#hash'
      };

      return this.uri_parsed;
    }

    return null;
  }

  constructor(path){
    // Setup
    this.uri_parsed = {};

    // Gets existing path unless passed to path
    this.uri = (path === undefined) ? this.getURL() : path;

    // Parsing
    this.uri_split = this.parseURL();

    if (this.uri_split){
      this.createParsedURL();
    }
  }

  getProperty(prop){
    let start, end;
    start = prop.search(/\[/g);
    end = prop.search(/\]/g);
    return (start < end) ? prop.slice(start + 1, end) : prop;
  }

  // <<<<<< Get properties >>>>>>
  getHostname(){
    return (this.uri_parsed) ? this.uri_parsed.hostname : null;
  }

  getFullPath(){
    return (this.uri_parsed) ? this.uri_parsed.fullpath : null;
  }

  getHash(){
    return (this.uri_parsed) ? this.uri_parsed.hash : null;
  }

  getPathname(){
    return (this.uri_parsed) ? this.uri_parsed.pathname : null;
  }

  getPort(){
    return (this.uri_parsed) ? this.uri_parsed.port : null;
  }

  getProtocol(){
    return (this.uri_parsed) ? this.uri_parsed.protocol : null;
  }

  getQueryString(){
    return (this.uri_parsed) ? this.uri_parsed.fullquery : null;
  }

  getSplitPath(){
    return (this.uri_parsed) ? this.uri_parsed.pathsplit : null;
  }

  getQueryObj(){
    return (this.uri_parsed) ? this.uri_parsed.query : null;
  }


  getURL(){
    // Gets Current Path
    let url = decodeURIComponent(window.location.href);
    return url;
  }


  parseQuery(queryString){
    let qs, queries, params, temp, t, i, l;
    // Parse query into an object - http://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
    if (queryString){
      qs = queryString.replace(/^\?/, '');

      queries = qs.split('&');

      params  = (queries.length >= 1 && queries[0] !== '') ? {} : null;

      if (params){
        l = queries.length;
        for (i = 0; i < l; i++){
          temp = queries[i].split('=');
          t = temp[0];
          params[t] = temp[1];
        }
      }

      return params;
    }

    return null;
  }

  parseURL(){
    // Regex taken from is from javascript, the good parts by Douglas Crockford - Best performance (http://jsperf.com/url-parse2)
    const parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

    return this.uri.match(parse_url);
  }

  splitPath(p){
    // Splits path into array
    let split = p.split('/');

    if (this.checkSlash(p)){
      split.shift();
    }
    return split;
  }
}

export default URLParser;


