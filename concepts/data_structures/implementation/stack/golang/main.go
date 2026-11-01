package main

import "fmt"

type StackNode struct {
	Value int
	Prev  *StackNode
}

type Stack struct {
	length int
	Head *StackNode
}

func NewStack() *Stack {
	return &Stack{
		length: 0,
		Head: nil,
	}
}

func (stack *Stack) Push(value int) {
	stack.Head = &StackNode{
		Value: value,
		Prev:  stack.Head,
	}
	stack.length++
}

func (stack *Stack) Pop() (int, error) {
	if stack.Head == nil {
		return 0, nil
	}

	value := stack.Head.Value
	stack.Head = stack.Head.Prev
	stack.length--

	return value, nil
}

func (stack *Stack) Peek() (int, error) {
	if stack.Head == nil {
		return 0, nil
	}

	return stack.Head.Value, nil
}

func (stack *Stack) printStack() { 
	current := stack.Head
	
	fmt.Print("Head -> ")
	for current != nil {
		fmt.Printf("%d -> ", current.Value)
		current = current.Prev
	}
	fmt.Println("nil")
}

func main() {
	stack := NewStack()

	fmt.Println("Initial values:")
	fmt.Printf("Length: %d\n", stack.length)
	value, _ := stack.Peek()
	fmt.Printf("Head: %d\n", value)

	stack.Push(1)
	stack.Push(2)
	stack.Push(3)

	fmt.Println("After pushing 1, 2, 3:")
	stack.printStack()
	fmt.Printf("Length: %d\n", stack.length)
	value, _ = stack.Peek()
	fmt.Printf("Head: %d\n", value)

	fmt.Println("Popping values:")
	value, _ = stack.Pop()
	fmt.Println(value)
	value, _ = stack.Pop()
	fmt.Println(value)
	value, _ = stack.Pop()
	fmt.Println(value)

	fmt.Println("After popping all values:")
	stack.printStack()
	fmt.Printf("Length: %d\n", stack.length)
	value, _ = stack.Peek()
	fmt.Printf("Head: %d\n", value)
}
