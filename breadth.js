
/**
 * generate a breadth first tree iterator
 * 
 * @param {String} path
 * @return {Function}
 */

module.exports = function(path){
	return function(el, fn, ctx){
		var els = []
		var i = 0
		while (el) {
			fn.call(ctx, el)
			var children = el[path]
			if (children) els.push.apply(els, children)
			el = els[i++]
		}
	}
}