export const add = (first: number, second: number) => first + second;
export const subtract = (first: number, second: number) => first - second;
export const multiplication = (first: number, second: number) => first * second;

export const division = (first: number, second: number) => {
  if (first === 0 || second === 0) {
    throw Error('we cannot divide by zero');
  }

  return first / second;
};
