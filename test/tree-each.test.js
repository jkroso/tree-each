
var chai = require('./chai')
  , breadth = require('../breadth')
  , depth = require('../depth')
  , up = require('../up')

var tree = {
	children: [
		{
			children: [
				{}
			]
		}
	]
}
var b = tree.children[0]
b.parent = tree
var c = b.children[0]
c.parent = b

var nodes = []
beforeEach(function(){
	nodes = []
})

describe('depth', function(){
	var walk = depth('children')
	
	describe('browser', function(){
		if (typeof window == 'undefined') return
		it('should work with dom nodes', function(){
			walk(document.getElementById('test'), function(el){
				this.should.equal(Object)
				el.nodeType.should.equal(Node.ELEMENT_NODE)
			}, Object)
		})
	})

	describe('node', function(){
		it('should handle missing paths', function(){
			walk(tree, function(node){
				nodes.push(node)
			})
			nodes.should.include(tree, b, c)
		})

		it('should iterate depth first', function(){
			walk(tree, function(node){
				nodes.push(node)
			})
			nodes.should.eql([c, b, tree])
		})
	})
})

describe('up', function(){
	var walk = up('parent')
	
	it('should handle missing paths', function(){
		walk(c, function(el){
			nodes.push(el)
		})
		nodes.should.eql([c, b, tree])
	})
})

describe('breadth', function(){
	var walk = breadth('children')
	it('should handle missing paths', function(){
		walk(tree, function(node){
			nodes.push(node)
		})
		nodes.should.include(tree, b, c)
	})

	it('should iterate breadth first', function(){
		walk(tree, function(node){
			nodes.push(node)
		})
		nodes.should.eql([tree, b, c])
	})
})