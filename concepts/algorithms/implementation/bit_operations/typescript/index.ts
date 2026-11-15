function word(value: number): void { if (!Number.isInteger(value) || value < 0 || value > 0xFFFFFFFF) throw new RangeError("value must be an unsigned 32-bit integer"); }
function position(bit: number): void { if (!Number.isInteger(bit) || bit < 0 || bit >= 32) throw new RangeError("bit index must be from zero through 31"); }
export function setBit(value: number, bit: number): number { word(value); position(bit); return (value | (1 << bit)) >>> 0; }
export function clearBit(value: number, bit: number): number { word(value); position(bit); return (value & ~(1 << bit)) >>> 0; }
export function toggleBit(value: number, bit: number): number { word(value); position(bit); return (value ^ (1 << bit)) >>> 0; }
export function isSet(value: number, bit: number): boolean { word(value); position(bit); return (value & (1 << bit)) !== 0; }
export function logicalRightShift(value: number, amount: number): number { word(value); position(amount); return value >>> amount; }
export function countSetBits(value: number): number { word(value); let count = 0; while (value) { value = (value & (value - 1)) >>> 0; count++; } return count; }
export function isPowerOfTwo(value: number): boolean { word(value); return value !== 0 && (value & (value - 1)) === 0; }
