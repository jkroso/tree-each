
/**
 * create a depth first tree walker
 * 
 * @param {String} path
 * @return {Function} walk
 */

module.exports = function(path){
	return function walk(el, fn, ctx){
		var children = el[path];
		if (children) for (var i = 0, len = children.length; i < len; i++) {
			walk(children[i], fn, ctx);
		}
		fn.call(ctx, el);
	}
}
