package main

import "fmt"

type Heap struct {
	data   []int
	length int
}

func newHeap() *Heap {
	return &Heap{
		data: make([]int, 0),
	}
}

func (h *Heap) insert(value int) {
	h.data = append(h.data, value)
	h.heapifyUp(h.length)
	h.length++
}

func (h *Heap) delete() (int, bool) {
	if h.length == 0 {
		return 0, false
	}

	out := h.data[0]
	h.length--

	if h.length == 0 {
		h.data = h.data[:0]
		return out, true
	}

	h.data[0] = h.data[h.length]
	h.data = h.data[:h.length]
	h.heapifyDown(0)

	return out, true
}

func (h *Heap) heapifyUp(index int) {
	if index == 0 {
		return
	}

	parentIndex := h.parent(index)
	parentValue := h.data[parentIndex]
	value := h.data[index]

	if parentValue > value {
		h.data[parentIndex], h.data[index] = h.data[index], h.data[parentIndex]
		h.heapifyUp(parentIndex)
	}
}

func (h *Heap) heapifyDown(index int) {
	leftIdx := h.leftChild(index)
	if leftIdx >= h.length {
		return
	}

	smallestIdx := leftIdx
	rightIdx := h.rightChild(index)
	if rightIdx < h.length && h.data[rightIdx] < h.data[leftIdx] {
		smallestIdx = rightIdx
	}

	if h.data[index] <= h.data[smallestIdx] {
		return
	}

	h.data[index], h.data[smallestIdx] = h.data[smallestIdx], h.data[index]
	h.heapifyDown(smallestIdx)
}

func (h *Heap) parent(index int) int {
	return (index - 1) / 2
}

func (h *Heap) leftChild(index int) int {
	return index*2 + 1
}

func (h *Heap) rightChild(index int) int {
	return index*2 + 2
}

func testMinHeap() {
	heap := newHeap()
	values := []int{5, 3, 69, 420, 4, 1, 8, 7}

	for _, value := range values {
		heap.insert(value)
	}

	fmt.Printf("Length after inserts: %d | Expected: 8\n", heap.length)

	expectedOrder := []int{1, 3, 4, 5, 7, 8, 69, 420}
	for _, expected := range expectedOrder {
		value, ok := heap.delete()
		fmt.Printf("Delete: %d, ok: %t | Expected: %d, true\n", value, ok, expected)
	}

	fmt.Printf("Length after deletes: %d | Expected: 0\n", heap.length)
	_, ok := heap.delete()
	fmt.Printf("Delete from empty heap succeeded: %t | Expected: false\n", ok)
}

func main() {
	testMinHeap()
}
