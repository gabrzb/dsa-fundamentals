def twoCrystalBalls(breaks):
    jmpAmout = int(len(breaks) ** 0.5)
    i = jmpAmout

    for i in range(jmpAmout, len(breaks), jmpAmout):
        if breaks[i]:
            break

    i -= jmpAmout

    for j in range(i, min(i + jmpAmout, len(breaks))):
        if breaks[j]:
            return j

    return -1

breaks = [False, False, False, True, True, True]
result = twoCrystalBalls(breaks)
print(result) # Correct Output: 3