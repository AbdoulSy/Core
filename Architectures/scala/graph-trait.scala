trait Graphs {
	type Node
	type Edge
	def pred(e: Edge): Node
	def succ(e: Edge): Node
	type Graph <: GraphSig
	def newGraph(nodes: Set[Nodes], edges: Set[Edge]): Graph

	trait GraphSig {
		def nodes: Set[Node]
		def edges: Set[Edge]
		def outgoing(n: Node): Set[Edge]
		def incoming(n: Node): Set[Edge]
		def sources: Set[Node]
	}
}
