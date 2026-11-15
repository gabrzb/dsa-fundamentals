import unittest
from concepts.algorithms.implementation.bit_operations.python import solution as bits
class Tests(unittest.TestCase):
    def test_unsigned_word_operations(self):
        for value in [0,1,2,3,0x7fffffff,0x80000000,0xffffffff]+list(range(256)):
            self.assertEqual(bits.count_set_bits(value),value.bit_count())
            self.assertEqual(bits.is_power_of_two(value),value>0 and value.bit_count()==1)
            for bit in range(32):
                present=(value//2**bit)%2
                self.assertEqual(bits.is_set(value,bit),bool(present))
                self.assertEqual(bits.set_bit(value,bit),value+(1-present)*2**bit)
                self.assertEqual(bits.clear_bit(value,bit),value-present*2**bit)
                self.assertEqual(bits.toggle_bit(value,bit),value+(1-2*present)*2**bit)
                self.assertEqual(bits.logical_right_shift(value,bit),value//2**bit)
        for value in [-1,2**32,True]:
            with self.assertRaises(ValueError):bits.count_set_bits(value)
        for bit in [-1,32,True]:
            with self.assertRaises(ValueError):bits.set_bit(0,bit)
