# URLparser

[![Build Status](https://semaphoreci.com/api/v1/projects/f441515a-1fe0-4950-b3cf-f2b00c5b016b/381659/badge.png)](https://semaphoreci.com/djforth/urlparser)

JS URL Parsing utility for breaking apart a url into data, it has a number of methods that allow you to extract:

* fullpath
* protocol (e.g. http or https)
* hostname (e.g. example.com)
* port (e.g. 3000)
* path (e.g. path/name/here)
* Split Path (e.g. path split into array - ['path','name', 'here'])
* Query string (e.g. "?query=test")
* Query Object (e.g. {query:"test"})
* Hash (e.g. #hash)

## Install

Install via NPM

``` bash

npm install urlparser

```

or via yarn

``` bash

yarn add urlparser

```

## Setup

To parse the current URL

``` javascript

var urlparse = new URLParser();

```

To parse another URL

``` javascript

var urlparse = new URLParser("http://someotherurl.com:3000/test?test=test#hash");

```

# Methods

From the URL "https://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1/hash2"

To get full path:

``` javascript

var fullpath = urlparse.getFullPath();

console.log(fullpath) // returns 'https://www.test.com:3000/mytest/test/123?test=foo&test2=bar#hash1'

```

To get protocol

``` javascript

var protocol = urlparse.getProtocol();

console.log(protocol) // returns 'https:'

```

To get hostname

``` javascript

var hostname = urlparse.getHostname();

console.log(hostname) // returns 'www.test.com'

```

To get Port

``` javascript

var port = urlparse.getPort();

console.log(port) // returns '3000'

```

To get Pathname

``` javascript

var pathname = urlparse.getPathname();

console.log(pathname) // returns 'mytest/test/123'

```

To get Pathname as an array

``` javascript

var pathname = urlparse.getSplitPath();

console.log(pathname) // returns ['mytest','test','123']

```

To get query string

``` javascript

var query = urlparse.getQueryString();

console.log(query) // returns "?test=foo&test2=bar"

```

To get query string as an object

``` javascript

var query = urlparse.getQueryObj();

console.log(query) // returns {test:'foo', test2:"bar"}

```

To get hash

``` javascript

var hash = urlparse.getHash();

console.log(hash) // returns "hash1"

```

# Bug reports

If you discover any bugs, feel free to create an issue on GitHub. Please add as much information as possible to help us fixing the possible bug. We also encourage you to help even more by forking and sending us a pull request.

https://github.com/djforth/urlparser/issues

## Contribute

If you'd like to contribute, URLParser is written using babel in ES6.

Please make sure any additional code should be covered in tests (Jasmine using karma).

If you need to run the test please use:

``` bash

gulp app:watch

```

or to rebuild the JS run:

``` bash

gulp build

```

## Maintainers

Adrian Stainforth (https://github.com/djforth)

# License

URLParser is an open source project falling under the MIT License. By using, distributing, or contributing to this project, you accept and agree that all code within the URLParser project are licensed under MIT license.





