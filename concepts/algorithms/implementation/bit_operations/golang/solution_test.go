package solution

import (
	"math/bits"
	"testing"
)

func TestUnsignedOperations(t *testing.T) {
	for _, value := range []uint32{0, 1, 2, 3, 0x7fffffff, 0x80000000, 0xffffffff} {
		count := bits.OnesCount32(value)
		if CountSetBits(value) != count || IsPowerOfTwo(value) != (count == 1) {
			t.Fatal("wrong bit count")
		}
		for bit := 0; bit < 32; bit++ {
			mask := uint64(1) << bit
			v := uint64(value)
			present := (v / mask) % 2
			if IsSet(value, bit) != (present == 1) || uint64(SetBit(value, bit)) != v+(1-present)*mask || uint64(ClearBit(value, bit)) != v-present*mask {
				t.Fatal("wrong mask operation")
			}
			want := v + mask
			if present == 1 {
				want = v - mask
			}
			if uint64(ToggleBit(value, bit)) != want || uint64(LogicalRightShift(value, bit)) != v/mask {
				t.Fatal("toggle or shift failed")
			}
		}
	}
	for _, bit := range []int{-1, 32} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			SetBit(0, bit)
		}()
	}
}
