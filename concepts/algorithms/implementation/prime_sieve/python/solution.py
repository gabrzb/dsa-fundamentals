def primes_up_to(limit: int) -> list[int]:
    if not isinstance(limit, int) or isinstance(limit, bool) or limit < 0:
        raise ValueError("limit must be a nonnegative integer")
    prime = [False, False] + [True] * max(0, limit - 1)
    candidate = 2
    while candidate * candidate <= limit:
        if prime[candidate]:
            for multiple in range(candidate * candidate, limit + 1, candidate):
                prime[multiple] = False
        candidate += 1
    return [value for value in range(2, limit + 1) if prime[value]]
