trait BasicPersonGraph extends TripleGraphs {
	type Node = Person
	type Edge = (Person, Person)
	type TripleEdge = (Person, Predicate, Object)
	def succ(e: Edge) = e._1
	def pref(e: Edge) = e._2
}


class MyGraph extends AbstractModel with TripleGraph
