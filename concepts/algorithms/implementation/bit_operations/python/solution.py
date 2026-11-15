def _word(value):
    if not isinstance(value, int) or isinstance(value, bool) or not 0 <= value <= 0xFFFFFFFF:
        raise ValueError("value must be an unsigned 32-bit integer")


def _bit(bit):
    if not isinstance(bit, int) or isinstance(bit, bool) or not 0 <= bit < 32:
        raise ValueError("bit index must be from zero through 31")


def set_bit(value: int, bit: int) -> int:
    _word(value); _bit(bit)
    return value | (1 << bit)


def clear_bit(value: int, bit: int) -> int:
    _word(value); _bit(bit)
    return value & ~(1 << bit)


def toggle_bit(value: int, bit: int) -> int:
    _word(value); _bit(bit)
    return value ^ (1 << bit)


def is_set(value: int, bit: int) -> bool:
    _word(value); _bit(bit)
    return bool(value & (1 << bit))


def logical_right_shift(value: int, amount: int) -> int:
    _word(value); _bit(amount)
    return value >> amount


def count_set_bits(value: int) -> int:
    _word(value)
    count = 0
    while value:
        value &= value - 1
        count += 1
    return count


def is_power_of_two(value: int) -> bool:
    _word(value)
    return value != 0 and value & (value - 1) == 0
