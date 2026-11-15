package solution

import "dsa/concepts/data_structures/implementation/deque/golang"

func WindowMaxima(values []int, size int) []int {
	if size < 1 || size > len(values) {
		panic("invalid window size")
	}
	queue := deque.New(4)
	result := make([]int, 0, len(values)-size+1)
	for index, value := range values {
		for queue.Len() > 0 {
			front, _ := queue.Front()
			if front > index-size {
				break
			}
			queue.PopFront()
		}
		for queue.Len() > 0 {
			back, _ := queue.Back()
			if values[back] > value {
				break
			}
			queue.PopBack()
		}
		queue.PushBack(index)
		if index >= size-1 {
			front, _ := queue.Front()
			result = append(result, values[front])
		}
	}
	return result
}
