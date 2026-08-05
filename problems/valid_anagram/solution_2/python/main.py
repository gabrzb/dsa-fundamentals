def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    count = {}
    
    for char in s:
        count[char] = count.get(char, 0) + 1

    for char in t:
        if char not in count:
            return False

        count[char] -= 1

        if count[char] < 0:
            return False

    return True

def testAnagram():
    testCases = [
        ("anagram", "nagaram", True),
        ("rat", "car", False),
    ]

    for s, t, expected in testCases:
        result = isAnagram(s, t)
        print(f"isAnagram({s}, {t}) = {result}, expected = {expected}")

    
testAnagram()