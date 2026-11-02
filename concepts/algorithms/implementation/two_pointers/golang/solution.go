package solution

func reverseArray(values []int) {
	left, right := 0, len(values)-1
	for left < right {
		values[left], values[right] = values[right], values[left]
		left++
		right--
	}
}
