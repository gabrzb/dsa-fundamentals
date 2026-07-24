package main
import "fmt"

func intToRoman(num int) string {
    values := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
    symbols := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

    roman := ""
    for i := range values {
        for num >= values[i] {
            num -= values[i]
            roman += symbols[i]
        }
    }
    return roman
}

func main() {
    // test cases (QUESTION.md)
    testCases := []struct {
		num      int
		expected string
	}{
		{ num: 3749, expected: "MMMDCCXLIX" },
        { num: 58, expected: "LVIII" },
        { num: 1994, expected: "MCMXCIV" },
	}
	for _, tc := range testCases {
		result := intToRoman(tc.num)
		fmt.Printf("intToRoman(%d) = %s | Expected: %s\n", tc.num, result, tc.expected)
	}
}