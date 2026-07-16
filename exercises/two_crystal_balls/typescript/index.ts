const twoCrystalBalls = (breaks: boolean[]): number => { 
  let jmpAmount: number = Math.floor(Math.sqrt(breaks.length));
  let i: number = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) { 
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;

  for (let j: number = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

const breaks: boolean[] = [
  false, false, false,
  true, true, true
];
const result = twoCrystalBalls(breaks);

console.log(result); // Correct output: 3