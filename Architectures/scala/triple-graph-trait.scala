trait TripleGraphs extends Graphs {
	type TripleEdge
	type TripleGraph <: TripleGraphSig
	def resolve(te: TripleEdge, p:Predicate): Node
	def newTripleGraph(nodes: Set[Nodes], edges: Set[Edge], triples: Set[Triple]): TripleGraph

	trait TripleGraphSig extends Graph.GraphSig {
		def triples: Set[Triple]
		def getEdge(n: Node, t: Triple): Set[Edge]
	}
}
