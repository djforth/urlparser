import URLParser from '../src';

import _ from 'lodash';

describe('URLParser', function() {
  let urlparser;
  describe('when url is passed', function() {
    beforeEach(function() {
      urlparser = new URLParser('http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2');
    });

    it('Should exist', function() {
      expect(urlparser).not.toBeNull();
      expect(urlparser).toBeDefined();
    });

    it('Should Parse URL', function() {
      let parsed = urlparser.parseURL();
      // console.log(parsed)
      expect(_.isArray(parsed)).toBeTruthy();
      expect(parsed.length).toEqual(8);
    });

    describe('splitPaths', function() {
      it('split path no startign slash', function() {
        spyOn(urlparser, 'checkSlash').and.returnValue(false);
        let split = urlparser.splitPath('mytest/test/123');
        expect(split.length).toEqual(3);
        expect(split).toContain('mytest');
      });

      it('split path with slash', function() {
        spyOn(urlparser, 'checkSlash').and.returnValue(true);
        let split = urlparser.splitPath('/mytest/test/123');
        expect(split.length).toEqual(3);
        expect(split).toContain('mytest');
      });
    });

    describe('check_ie', function() {
      it('should return false if no / at begining', function() {
        expect(urlparser.checkSlash('some/path')).toBeFalsy();
      });

      it('should return true if / at begining', function() {
        expect(urlparser.checkSlash('/some/path')).toBeTruthy();
      });
    });

    describe('Split Query', function() {
      let query = 'test=foo&test2=bar';

      it('create and object from the Query string', function() {
        let parsedQuery = urlparser.parseQuery(query);
        expect(_.isEmpty(parsedQuery)).toBeFalsy();
        expect(parsedQuery.test).toEqual('foo');
        expect(parsedQuery.test2).toEqual('bar');
      });

      it('should return null if no query', function() {
        let parsedQuery = urlparser.parseQuery('');
        expect(parsedQuery).toBeNull();
      });
    });

    describe('createParsedURL', function() {
      let split = null;
      beforeEach(function() {
        spyOn(urlparser, 'splitPath').and.returnValue(['test']);
        spyOn(urlparser, 'parseQuery').and.returnValue({ search: 'test' });
        split = urlparser.createParsedURL();
      });

      it('should set correct obj', function() {
        expect(split.fullpath).toEqual('http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2');
        expect(split.protocol).toEqual('http');
        expect(split.hostname).toEqual('www.test.com');
        expect(split.port).toEqual('3000');
        expect(split.pathname).toEqual('mytest/test/123');
        expect(split.fullquery).toEqual('test=foo&test2=bar');
        expect(split.hash).toEqual('hash1/hash2');
      });

      it('should call splitter functions', function() {
        expect(urlparser.splitPath).toHaveBeenCalled();
        expect(urlparser.parseQuery).toHaveBeenCalled();
      });
    });

    describe('getting Functions', function() {
      describe('if url parsed', function() {
        beforeEach(function() {
          urlparser.uri_parsed = {
            fullpath: 'http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2',
            protocol: 'http',
            hostname: 'www.test.com',
            port: '3000',
            pathname: 'mytest/test/123',
            pathsplit: ['test'],
            fullquery: 'test=foo&test2=bar',
            query: { search: 'test' },
            hash: 'hash1/hash2',
          };
        });

        it('get data', function() {
          expect(urlparser.getFullPath()).toEqual(
            'http://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2'
          );
          expect(urlparser.getProtocol()).toEqual('http');
          expect(urlparser.getHostname()).toEqual('www.test.com');
          expect(urlparser.getPort()).toEqual('3000');
          expect(urlparser.getPathname()).toEqual('mytest/test/123');
          expect(urlparser.getQueryString()).toEqual('test=foo&test2=bar');
          expect(urlparser.getHash()).toEqual('hash1/hash2');
          expect(urlparser.getSplitPath()).toEqual(['test']);
          expect(urlparser.getQueryObj()).toEqual({ search: 'test' });
        });
      });

      describe('if url parsed', function() {
        beforeEach(function() {
          urlparser.uri_parsed = null;
        });

        it('get data', function() {
          expect(urlparser.getFullPath()).toBeNull();
          expect(urlparser.getProtocol()).toBeNull();
          expect(urlparser.getHostname()).toBeNull();
          expect(urlparser.getPort()).toBeNull();
          expect(urlparser.getPathname()).toBeNull();
          expect(urlparser.getQueryString()).toBeNull();
          expect(urlparser.getHash()).toBeNull();
          expect(urlparser.getSplitPath()).toBeNull();
          expect(urlparser.getQueryObj()).toBeNull();
        });
      });
    });
  });

  // describe('when url not passed', function(){
  //   beforeEach(function(){
  //     window.location.href = 'http://www.test.com/'
  //     console.log(window.location.href)
  //     urlparser = new URLParser();

  //   });

  //   it('Should exist', function(){
  //     expect(urlparser).not.toBeNull();
  //     expect(urlparser).toBeDefined();
  //   });

  //   // it('should set url to correct url', function(){
  //   //   expect(urlparser.uri).toEqual(window.location.href);
  //   // });
  // });
});
