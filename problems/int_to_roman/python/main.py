def int_to_roman(num):
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    
    syms = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    
    roman_num = ''
    i = 0
    
    while num > 0:
        for _ in range(num // val[i]):
            roman_num += syms[i]
            num -= val[i]
        i += 1
        
    return roman_num

def test_int_to_roman():
    # test cases (QUESTION.md)
    test_cases = [
        (3, "III"),
        (4, "IV"),
        (9, "IX"),
        (58, "LVIII"),
        (1994, "MCMXCIV")
    ]

    for i, (nums, expected) in enumerate(test_cases):
        result = int_to_roman(nums)
        print(f"int_to_roman({nums}) = {result} | Expected: {expected}")

test_int_to_roman()