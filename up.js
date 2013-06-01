

/**
 * generate a tree climber
 * 
 * @param {String} path
 * @return {Function}
 */

module.exports = function(path){
	return function up(el, fn, ctx){
		fn.call(ctx, el)
		var parent = el[path]
		if (parent) up(parent, fn, ctx)
	}
}