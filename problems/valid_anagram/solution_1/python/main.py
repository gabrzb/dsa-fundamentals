def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    alphabet = [0] * 26
    
    for char in s:
        alphabet[ord(char) - ord("a")] += 1

    for char in t:
        index = ord(char) - ord("a")
        alphabet[index] -= 1

        if alphabet[index] < 0:
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
