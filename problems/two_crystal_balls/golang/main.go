package solution

import (
	"math"
)

func two_crystal_balls(breaks []bool) int {
	jmpAmount := int(math.Sqrt(float64(len(breaks))))
	if jmpAmount == 0 {
		return -1
	}
	i := jmpAmount

	for ; i < len(breaks); i += jmpAmount {
		if breaks[i] {
			break
		}
	}

	i -= jmpAmount

	for j := 0; j <= jmpAmount && i < len(breaks); j, i = j+1, i+1 {
		if breaks[i] {
			return i
		}
	}

	return -1
}
