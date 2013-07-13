
var curryable = require('curryable')

module.exports = curryable(down, -1)

/**
 * iterate a tree depth first along `path` from `node`
 * 
 * @param {String} path
 * @param {Object} node
 * @param {Function} fn
 * @param {Any} [context]
 */

function down(path, node, fn, ctx){
	var children = node[path]
	if (children) for (var i = 0, len = children.length; i < len; i++) {
		down(path, children[i], fn, ctx)
	}
	fn.call(ctx, node)
}