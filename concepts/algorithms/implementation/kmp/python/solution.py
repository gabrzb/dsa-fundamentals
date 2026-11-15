def prefix_table(pattern: str) -> list[int]:
    table = [0] * len(pattern)
    matched = 0
    for index in range(1, len(pattern)):
        while matched and pattern[index] != pattern[matched]:
            matched = table[matched - 1]
        if pattern[index] == pattern[matched]:
            matched += 1
        table[index] = matched
    return table


def find_all(text: str, pattern: str) -> list[int]:
    if not pattern:
        return list(range(len(text) + 1))
    table, result, matched = prefix_table(pattern), [], 0
    for index, char in enumerate(text):
        while matched and char != pattern[matched]:
            matched = table[matched - 1]
        if char == pattern[matched]:
            matched += 1
        if matched == len(pattern):
            result.append(index - len(pattern) + 1)
            matched = table[matched - 1]
    return result
