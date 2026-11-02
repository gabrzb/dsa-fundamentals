import unittest

from problems.two_crystal_balls.python.solution import twoCrystalBalls


class SolutionTests(unittest.TestCase):
    def test_crystal_balls_at_every_boundary(self):
        for length in range(40):
            for boundary in range(length + 1):
                with self.subTest(length=length, boundary=boundary):
                    values = [index >= boundary for index in range(length)]
                    self.assertEqual(
                        twoCrystalBalls(values), boundary if boundary < length else -1
                    )
