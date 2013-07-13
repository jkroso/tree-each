
var curryable = require('curryable')

module.exports = curryable(up, -1)

/**
 * walk up `path` from `node`
 * 
 * @param {String} path
 * @param {Object} node
 * @param {Function} fn
 * @param {Any} [context]
 */

function up(path, el, fn, ctx){
	fn.call(ctx, el)
	var parent = el[path]
	if (parent) up(path, parent, fn, ctx)
}