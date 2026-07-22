package main

import "fmt"

type ListNode struct {
	Value int
	Next  *ListNode
	Prev  *ListNode
}

func NewListNode(value int) *ListNode {
	return &ListNode{
		Value: value,
		Next:  nil,
		Prev:  nil,
	}
}

func (node *ListNode) getValue() int {
	return node.Value
}

func (node *ListNode) getNext() *ListNode {
	return node.Next
}

func (node *ListNode) setNext(next *ListNode) {
	node.Next = next
}

func (node *ListNode) getPrev() *ListNode {
	return node.Prev
}

func (node *ListNode) setPrev(prev *ListNode) {
	node.Prev = prev
}

type DoublyLinkedList struct {
	Head *ListNode
	Tail *ListNode
}

func NewDoublyLinkedList() *DoublyLinkedList {
	return &DoublyLinkedList{
		Head: nil,
		Tail: nil,
	}
}

func (list *DoublyLinkedList) InsertAtHead(value int) {
	newNode := NewListNode(value)

	if list.Head == nil {
		list.Tail = newNode
	} else {
		newNode.setNext(list.Head)
		list.Head.setPrev(newNode)
	}

	list.Head = newNode
}

func (list *DoublyLinkedList) InsertAtTail(value int) {
	newNode := NewListNode(value)

	if list.Tail == nil {
		list.Head = newNode
	} else {
		newNode.setPrev(list.Tail)
		list.Tail.setNext(newNode)
	}

	list.Tail = newNode
}

func (list *DoublyLinkedList) search(value int) *ListNode {
	current := list.Head

	for current != nil {
		if current.getValue() == value {
			return current
		}

		current = current.getNext()
	}

	return nil
}

func (list *DoublyLinkedList) Delete(value int) {
	nodeToDelete := list.search(value)

	if nodeToDelete == nil {
		fmt.Printf("%d not found in the list.\n", value)
		return
	}

	previous := nodeToDelete.getPrev()
	next := nodeToDelete.getNext()

	if previous == nil {
		list.Head = next
	} else {
		previous.setNext(next)
	}

	if next == nil {
		list.Tail = previous
	} else {
		next.setPrev(previous)
	}

	nodeToDelete.setNext(nil)
	nodeToDelete.setPrev(nil)
}

func (list *DoublyLinkedList) InsertAtPosition(value int, position int) {
	if position < 0 {
		fmt.Println("Invalid position")
		return
	}

	if position == 0 {
		list.InsertAtHead(value)
		return
	}

	current := list.Head
	for i := 0; i < position; i++ {
		if current == nil {
			fmt.Println("Position out of bounds")
			return
		}
		current = current.getNext()
	}

	if current == nil {
		list.InsertAtTail(value)
		return
	}

	newNode := NewListNode(value)
	newNode.setNext(current)
	newNode.setPrev(current.getPrev())
	current.getPrev().setNext(newNode)
	current.setPrev(newNode)
}

func (list *DoublyLinkedList) InsertInSortedList(data int) {
	current := list.Head

	for current != nil && current.getValue() <= data {
		current = current.getNext()
	}

	if current == list.Head {
		list.InsertAtHead(data)
		return
	}

	if current == nil {
		list.InsertAtTail(data)
		return
	}

	previous := current.getPrev()
	newNode := NewListNode(data)

	newNode.setPrev(previous)
	newNode.setNext(current)
	previous.setNext(newNode)
	current.setPrev(newNode)
}

func (list *DoublyLinkedList) printList() {
	current := list.Head

	fmt.Print("head <-> ")
	for current != nil {
		fmt.Printf("%d <-> ", current.getValue())
		current = current.getNext()
	}
	fmt.Print("tail\n")
}

func main() {
	doublyLinkedList := NewDoublyLinkedList()

	doublyLinkedList.InsertAtHead(20)
	doublyLinkedList.InsertAtHead(10)
	doublyLinkedList.InsertAtTail(30)
	doublyLinkedList.InsertAtTail(40)
	doublyLinkedList.printList()

	doublyLinkedList.InsertAtPosition(15, 1)
	doublyLinkedList.printList()
	doublyLinkedList.InsertInSortedList(25)
	doublyLinkedList.printList()

	doublyLinkedList.Delete(20)
	doublyLinkedList.printList()
}
