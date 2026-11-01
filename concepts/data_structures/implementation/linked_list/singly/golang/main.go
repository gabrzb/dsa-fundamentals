package main

import (
	"fmt"
)

type Node struct {
	data int
	next *Node
}

func NewNode(data int, next *Node) *Node {
	return &Node{
		data: data,
		next: next,
	}
}

func (n *Node) GetData() int {
	return n.data
}

func (n *Node) GetNext() *Node {
	return n.next
}

func (n *Node) hasNext() bool {
	return n.next != nil
}

func (n *Node) SetNext(next *Node) {
	n.next = next
}

type LinkedList struct {
	head *Node
}

func NewLinkedList() *LinkedList {
	return &LinkedList{
		head: nil,
	}
}

func (ll *LinkedList) insertToBack(data int) {
	current := ll.head

	if current == nil {
		ll.head = NewNode(data, nil)
		return
	}

	for current.hasNext() {
		current = current.GetNext()
	}

	current.SetNext(NewNode(data, nil))
}

func (ll *LinkedList) insertToFront(data int) {
	oldHead := ll.head
	ll.head = NewNode(data, oldHead)
}

func (ll *LinkedList) search(data int) *Node {
	current := ll.head

	for current != nil {
		if current.GetData() == data {
			return current
		}
		current = current.GetNext()
	}

	return nil
}

func (ll *LinkedList) delete(target int) {
	current := ll.head
	var previous *Node

	for current != nil {
		if current.GetData() == target {
			if previous == nil {
				ll.head = current.GetNext()
			} else {
				previous.SetNext(current.GetNext())
			}
			return
		}
		previous = current
		current = current.GetNext()
	}

	panic("Element not found")
}

func (ll *LinkedList) insertInSortedList(data int) {
	current := ll.head
	var previous *Node

	for current != nil {
		if current.GetData() > data {
			if previous == nil {
				ll.head = NewNode(data, current)
			} else {
				previous.SetNext(NewNode(data, current))
			}
			return
		}
		previous = current
		current = current.GetNext()
	}

	if previous == nil {
		ll.head = NewNode(data, nil)
	} else {
		previous.SetNext(NewNode(data, nil))
	}
}

func (ll *LinkedList) print() {
	current := ll.head
	fmt.Print("head")

	for current != nil {
		fmt.Printf(" -> %d", current.GetData())
		current = current.GetNext()
	}

	fmt.Println(" -> tail")
}

func main() {
	linkedList := NewLinkedList()

	linkedList.insertToBack(1)
	linkedList.insertToBack(2)
	linkedList.insertToBack(3)
	linkedList.insertToFront(0)

	linkedList.print()
	linkedList.delete(2)
	linkedList.print()

	linkedList.insertInSortedList(2)
	linkedList.print()
}
