def twoCrystalBalls(breaks):
    jump = max(1, int(len(breaks) ** 0.5))
    index = jump

    while index < len(breaks) and not breaks[index]:
        index += jump

    for candidate in range(index - jump, min(index + 1, len(breaks))):
        if breaks[candidate]:
            return candidate

    return -1
