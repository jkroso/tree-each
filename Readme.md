
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

- [depth()](#depth)
- [breadth()](#breadth)
- [up()](#up)

### depth(path:String)

  create a depth first tree walker
  
### breadth(path:String)

  create a breadth first tree walker

### up(path:String)

  create a tree climber

  All of the generated functions have the same API the only difference is the order they iterate elements in.

### each(el:Object, fn:Function, [ctx]:Object)

  applies `fn` to `el` and each item found on `path`

## example

  each can be used to define other higher order functions that operate over trees. Here we define `filter` and use it to emulate `document.body.querySelectorAll`

```js
var each = treach.depth('children')
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
