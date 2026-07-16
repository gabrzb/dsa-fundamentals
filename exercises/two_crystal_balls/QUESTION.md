# Two Crystal Balls Problem

You have two crystal balls and a building with `n` floors. You want to find the highest floor from which a crystal ball can be dropped without breaking. Design an algorithm to minimize the number of drops needed in the worst-case scenario.

> Techniques: <br>
> **Two-Pointer Technique**: This technique involves using the first ball to determine a range of floors where the critical floor might be, and then using the second ball to perform a linear search within that range. This approach ensures that the number of drops is minimized in the worst-case scenario.