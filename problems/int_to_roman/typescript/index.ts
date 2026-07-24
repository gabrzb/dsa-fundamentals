function intToRoman(num: number): string {
    const values: number[] = [
		1000, 900, 500, 400,
		100, 90, 50, 40,
		10, 9, 5, 4, 1,
	];

	const symbols: string[] = [
		"M", "CM", "D", "CD",
		"C", "XC", "L", "XL",
		"X", "IX", "V", "IV", "I",
    ];

	let roman: string = "";

	for (let i: number = 0; i < values.length; i++) {
		while (num >= values[i]) {
			num -= values[i];
			roman += symbols[i];
		}
	}

	return roman;
}

function testIntToRoman() {
  // test cases (QUESTION.md)
    const testCases = [
        { num: 3749, expected: "MMMDCCXLIX" },
        { num: 58, expected: "LVIII" },
        { num: 1994, expected: "MCMXCIV" },
    ];

    for (const { num, expected } of testCases) {
        const result = intToRoman(num);
        console.log(`intToRoman(${num}) = ${result} | Expected: ${expected}`);
    }
}

testIntToRoman();