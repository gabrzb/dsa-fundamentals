class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        if not nums:
            return 0

        num_set = set(nums)
        longest_streak = 0

        for num in num_set:
            if num - 1 not in num_set:
                length = 0

                while num + length in num_set:
                    length += 1

                longest_streak = max(longest_streak, length)

        return longest_streak

def test_longest_consecutive():
    solution = Solution()

    nums1 = [100, 4, 200, 1, 3, 2]
    print(solution.longestConsecutive(nums1))

    nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    print(solution.longestConsecutive(nums2))

    nums3 = []
    print(solution.longestConsecutive(nums3))

    nums4 = [1, 2, 0, 1]
    print(solution.longestConsecutive(nums4))

test_longest_consecutive()