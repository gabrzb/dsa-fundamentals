from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        res = defaultdict(list)
        
        for s in strs:
            counter = [0] * 26
            
            for c in s:
                counter[ord(c) - ord('a')] += 1

            res[tuple(counter)].append(s)
            
        return list(res.values())

def test_group_anagrams():
    solution = Solution()
    
    input1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
    output1 = solution.groupAnagrams(input1)
    print(output1)
    
    input2 = [""]
    output2 = solution.groupAnagrams(input2)
    print(output2)
    
    input3 = ["a"]
    output3 = solution.groupAnagrams(input3)
    print(output3)

test_group_anagrams()