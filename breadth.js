
var curryable = require('curryable')
var push = Array.prototype.push

/**
 * iterate a tree breadth first along `path` from `node`
 * 
 * @param {String} path
 * @param {Object} node
 * @param {Function} fn
 * @param {Any} [context]
 */

module.exports = curryable(function(path, node, fn, ctx){
	var els = []
	var i = 0
	while (node) {
		fn.call(ctx, node)
		var children = node[path]
		if (children) push.apply(els, children)
		node = els[i++]
	}
}, -1)