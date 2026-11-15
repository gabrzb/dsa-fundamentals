def minimum_capacity(weights: list[int], days: int) -> int:
    if not isinstance(days, int) or isinstance(days, bool) or days < 1 or any(not isinstance(weight, int) or isinstance(weight, bool) or weight <= 0 for weight in weights):
        raise ValueError("days and weights must be positive integers")
    low, high = max(weights, default=0), sum(weights)

    def feasible(capacity):
        used, load = 1, 0
        for weight in weights:
            if weight > capacity - load:
                used += 1
                load = 0
            load += weight
            if used > days:
                return False
        return True

    while low < high:
        middle = low + (high - low) // 2
        if feasible(middle):
            high = middle
        else:
            low = middle + 1
    return low
