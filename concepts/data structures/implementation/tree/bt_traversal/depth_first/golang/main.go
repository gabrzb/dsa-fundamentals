package main

import "fmt"

func printPath(label string, path, expected []int) {
	fmt.Printf("%s: %v | Expected: %v\n", label, path, expected)
}

func main() {
	testInOrderSearch()
	testPostOrderSearch()
	testPreOrderSearch()
}
