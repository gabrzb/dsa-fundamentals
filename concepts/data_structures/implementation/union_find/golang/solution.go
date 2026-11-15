package unionfind

type UnionFind struct {
	parent, size []int
	components   int
}

func New(size int) *UnionFind {
	if size < 0 {
		panic("size must be nonnegative")
	}
	set := &UnionFind{parent: make([]int, size), size: make([]int, size), components: size}
	for i := range size {
		set.parent[i] = i
		set.size[i] = 1
	}
	return set
}

func (set *UnionFind) Find(value int) int {
	if value < 0 || value >= len(set.parent) {
		panic("element must be an index in the structure")
	}
	root := value
	for set.parent[root] != root {
		root = set.parent[root]
	}
	for value != root {
		parent := set.parent[value]
		set.parent[value] = root
		value = parent
	}
	return root
}

func (set *UnionFind) Union(a, b int) bool {
	left, right := set.Find(a), set.Find(b)
	if left == right {
		return false
	}
	if set.size[left] < set.size[right] {
		left, right = right, left
	}
	set.parent[right] = left
	set.size[left] += set.size[right]
	set.components--
	return true
}

func (set *UnionFind) Connected(a, b int) bool     { return set.Find(a) == set.Find(b) }
func (set *UnionFind) ComponentSize(value int) int { return set.size[set.Find(value)] }
func (set *UnionFind) Count() int                  { return set.components }
