package trie

type node struct {
	children map[byte]*node
	terminal bool
}
type Trie struct{ root *node }

func New() *Trie { return &Trie{root: &node{children: map[byte]*node{}}} }
func validate(word string) {
	for i := range len(word) {
		if word[i] < 'a' || word[i] > 'z' {
			panic("only lowercase English letters are supported")
		}
	}
}
func (t *Trie) walk(word string) *node {
	validate(word)
	current := t.root
	for i := range len(word) {
		current = current.children[word[i]]
		if current == nil {
			return nil
		}
	}
	return current
}
func (t *Trie) Insert(word string) bool {
	validate(word)
	current := t.root
	for i := range len(word) {
		char := word[i]
		if current.children[char] == nil {
			current.children[char] = &node{children: map[byte]*node{}}
		}
		current = current.children[char]
	}
	fresh := !current.terminal
	current.terminal = true
	return fresh
}
func (t *Trie) Contains(word string) bool {
	current := t.walk(word)
	return current != nil && current.terminal
}
func (t *Trie) StartsWith(prefix string) bool { return t.walk(prefix) != nil }
func (t *Trie) Remove(word string) bool {
	current := t.walk(word)
	if current == nil || !current.terminal {
		return false
	}
	current.terminal = false
	type entry struct {
		parent *node
		char   byte
	}
	path := []entry{}
	current = t.root
	for i := range len(word) {
		path = append(path, entry{current, word[i]})
		current = current.children[word[i]]
	}
	for i := len(path) - 1; i >= 0; i-- {
		parent, char := path[i].parent, path[i].char
		child := parent.children[char]
		if child.terminal || len(child.children) > 0 {
			break
		}
		delete(parent.children, char)
	}
	return true
}
