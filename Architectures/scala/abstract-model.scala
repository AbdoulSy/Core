trait AbstractModel extends TripleGraph {
	class TripleGraph(val nodes: Set[Node],
			  val edges: Set[Edge],
			  val triples: Set[Triple])
	def outgoing(n: Node) = edges filter (pred(_) == n)
	def incoming(n: Node) = edges filter (succ(_) == n)
	def resolve(te: TripleEdge, p: Predicate, n: Node) = nodes filter (te(_) == p)
	lazy val sources = nodes filter (incoming(_).isEmpty)
}
