# Valid Parentheses Problem

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine whether the input string is valid.

An input string is valid if:

- Open brackets are closed by the same type of bracket.
- Open brackets are closed in the correct order.
- Every closing bracket has a corresponding opening bracket of the same type.

## Examples

### Example 1

**Input:** `s = "()"`

**Output:** `true`

### Example 2

**Input:** `s = "()[]{}"`

**Output:** `true`

### Example 3

**Input:** `s = "(]"`

**Output:** `false`

### Example 4

**Input:** `s = "([])"`

**Output:** `true`

### Example 5

**Input:** `s = "([)]"`

**Output:** `false`

## Constraints

- `1 <= s.length <= 10^4`
- `s` consists only of parentheses: `()[]{}`.