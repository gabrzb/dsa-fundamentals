package main

import (
	"fmt"
	"math"
)

func two_crystal_balls(breaks []bool) int {
	jmpAmount := int(math.Sqrt(float64(len(breaks))))
	i := jmpAmount
	
	for ; i < len(breaks); i += jmpAmount {
		if (breaks[i]) {
			break;
		}
	}

	i -= jmpAmount

	for j := 0; j < jmpAmount && i < len(breaks); j, i = j + 1, i + 1 {
		if (breaks[i]) {
			return i
		}
	}

	return -1
}

func main() {
	breaks := []bool{
		false, false, false, false,
		false, false, false,
		true, true, true,
	}
	
	result := two_crystal_balls(breaks)
	fmt.Println(result) // Correct output: 7
}