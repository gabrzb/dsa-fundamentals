from collections import deque
import unittest

from problems.coin_change.python.solution import memoized, tabulated


def shortest_coin_path(coins, amount):
    queue = deque([(0, 0)])
    seen = {0}
    while queue:
        total, count = queue.popleft()
        if total == amount:
            return count
        for coin in coins:
            next_total = total + coin
            if next_total <= amount and next_total not in seen:
                seen.add(next_total)
                queue.append((next_total, count + 1))
    return -1


class SolutionTests(unittest.TestCase):
    def test_against_shortest_path_enumeration(self):
        for mask in range(32):
            coins = [coin for coin in range(1, 6) if mask & (1 << (coin - 1))]
            original = coins.copy()
            for amount in range(20):
                expected = shortest_coin_path(coins, amount)
                for solve in (memoized, tabulated):
                    self.assertEqual(solve(coins, amount), expected, (coins, amount))
                    self.assertEqual(coins, original)

    def test_reuse_duplicates_and_cache_isolation(self):
        for solve in (memoized, tabulated):
            self.assertEqual(solve([1, 3, 4], 6), 2)
            self.assertEqual(solve([2, 2], 4), 2)
            self.assertEqual(solve([2], 3), -1)
            self.assertEqual(solve([1], 3), 3)
            self.assertEqual(solve([], 0), 0)

    def test_invalid_inputs(self):
        for solve in (memoized, tabulated):
            for coins, amount in [([0], 0), ([-1], 3), ([1], -1), ([1.5], 3), ([1], 2.5), ([True], 3)]:
                with self.assertRaises(ValueError):
                    solve(coins, amount)
