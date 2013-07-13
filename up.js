
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

function up(path, node, fn, ctx){
	do { fn.call(ctx, node) }
	while (node = node[path])
}