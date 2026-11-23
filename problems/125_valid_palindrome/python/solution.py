def isPalindrome(s: str) -> bool:
    filtered = "".join(char for char in s.lower() if char.isalnum())
    left, right = 0, len(filtered) - 1

    while left < right:
        if filtered[left] != filtered[right]:
            return False
        left += 1
        right -= 1

    return True
