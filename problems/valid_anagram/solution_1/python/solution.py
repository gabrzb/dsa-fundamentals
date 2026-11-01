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
