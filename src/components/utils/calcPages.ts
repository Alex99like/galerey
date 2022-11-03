export const calcPages = (total: number, count: number): [first: number, last: number] => {
  let first = count;
  let last = count + 5;
  if (first === 1) {
    first = count - 1;
    last = count + 4;
  } else if (count === 2) {
    first = count - 2;
    last = count + 3;
  } else if (count >= 3) {
    first = count - 3;
    last = count + 2;
  }

  if (total === count) {
    first = count - 5;
    last = count + 1;
  } else if (total - 2 === count) {
    first = count - 3;
    last = count + 2;
  } else if (total - 1 === count) {
    first = count - 4;
    last = count + 3;
  }

  return [first, last];
};
