package solution

func position(bit int) {
	if bit < 0 || bit >= 32 {
		panic("bit index must be from zero through 31")
	}
}
func SetBit(value uint32, bit int) uint32               { position(bit); return value | uint32(1)<<bit }
func ClearBit(value uint32, bit int) uint32             { position(bit); return value &^ (uint32(1) << bit) }
func ToggleBit(value uint32, bit int) uint32            { position(bit); return value ^ (uint32(1) << bit) }
func IsSet(value uint32, bit int) bool                  { position(bit); return value&(uint32(1)<<bit) != 0 }
func LogicalRightShift(value uint32, amount int) uint32 { position(amount); return value >> amount }
func CountSetBits(value uint32) int {
	count := 0
	for value != 0 {
		value &= value - 1
		count++
	}
	return count
}
func IsPowerOfTwo(value uint32) bool { return value != 0 && value&(value-1) == 0 }
