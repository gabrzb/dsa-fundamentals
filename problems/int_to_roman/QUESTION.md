# Integer to Roman

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| --- | ---: |
| `I` | `1` |
| `V` | `5` |
| `X` | `10` |
| `L` | `50` |
| `C` | `100` |
| `D` | `500` |
| `M` | `1000` |

Roman numerals are formed by converting each decimal place from highest to lowest. The following rules apply:

- If a value does not begin with `4` or `9`, use the largest symbol that can be subtracted from it, append that symbol, subtract its value, and continue converting the remainder.
- If a value begins with `4` or `9`, use subtractive notation. For example, `4` is `IV` and `9` is `IX`. The only subtractive forms are `IV`, `IX`, `XL`, `XC`, `CD`, and `CM`.
- Powers of ten (`I`, `X`, `C`, and `M`) may be repeated at most three consecutive times. Symbols representing five (`V`, `L`, and `D`) cannot be repeated. Use subtractive notation when a symbol would otherwise need to be repeated four times.

Given an integer, convert it to a Roman numeral.

### Example 1:

> Input: `num = 3749`<br>
> Output: `"MMMDCCXLIX"`<br>
> Explanation: `3000 = MMM`, `700 = DCC`, `40 = XL`, and `9 = IX`.<br>

### Example 2:

> Input: `num = 58`<br>
> Output: `"LVIII"`<br>
> Explanation: `50 = L`, `5 = V`, and `3 = III`.<br>

### Example 3:

> Input: `num = 1994`<br>
> Output: `"MCMXCIV"`<br>
> Explanation: `1000 = M`, `900 = CM`, `90 = XC`, and `4 = IV`.<br>

### Constraints:

> `1 <= num <= 3999`<br>

# Reference

Leetcode Problem: [Integer to Roman](https://leetcode.com/problems/integer-to-roman/description/)
