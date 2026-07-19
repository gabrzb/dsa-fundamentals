def isValid(s):
    stack = []
    mapping = {
        ")": "(", 
        "}": "{", 
        "]": "["
    }
    
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    
    return not stack

def testIsValid(s):
    testCases = [
        ("()", True),
        ("()[]{}", True),
        ("(]", False),
        ("([)]", False),
        ("{[]}", True)
    ]

    for i, (input_str, expected) in enumerate(testCases):
        result = isValid(input_str)
        
        print(f"isValid('{input_str}') = {result} | Expected = {expected}")

testIsValid("()")