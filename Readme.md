
# tree-each

  forEach for trees

## Getting Started

_With [component](//github.com/component/component), [packin](//github.com/jkroso/packin) or [npm](//github.com/isaacs/npm)_  

	$ {package mananger} install jkroso/tree-each

then in your app:

```js
var treach = require('tree-each')
```

## API

- [depth()](#depthpathstring-nodeobject-fnfunction-contextany)
- [breadth()](#breadthpathstring-nodeobject-fnfunction-contextany)
- [up()](#uppathstring-nodeobject-fnfunction-contextany)

### depth(path:String, node:Object, fn:Function, [context]:Any)

  iterate a tree breadth first along `path` from `node`
  
### breadth(path:String, node:Object, fn:Function, [context]:Any)

  iterate a tree depth first along `path` from `node`

### up(path:String, node:Object, fn:Function, [context]:Any)
  
  walk up `path` from `node`

## example

  each can be used to define other higher order functions that operate over trees. Here we define `filter` and use it to emulate `document.body.querySelectorAll`. Note the use of currying to keep noise to a minimum inside `filter`. All functions in this package have been made [curryable](//github.com/jkroso/curryable).

```js
var each = depthFirst('children')
function filter(el, fn, ctx){
  var res = []
  each(el, function(el){
    if (fn(el)) res.push(el)
  }, ctx)
  return res
}
filter(document.body, function(el){
  return el.matchesSelector('.hidden')
}) // => [ Element ]
```

## Running the tests

Just run `make`. It will install and start a development server. Then just point your browser to `localhost:3000/test`. Likewise to run the examples.
