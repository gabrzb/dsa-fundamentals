# Longest Common Subsequence

Given two strings, return the length of their longest common subsequence (LCS). A subsequence preserves character order but may skip characters; its characters need not be adjacent. Return a length, not the sequence itself.

For `a = "abcde"` and `b = "ace"`, return 3 for `"ace"`. For `"abc"` and `"def"`, return 0. If either input is empty, return 0.

Implement memoization and tabulation. Compare Unicode code points, including supplementary-plane characters, without normalization or grapheme segmentation. Go strings must contain valid UTF-8; JavaScript strings must contain well-formed Unicode. Inputs are unchanged.
