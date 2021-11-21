const generateOperator = (operators, randomNumberFirst, randomNumberSecond) => {
  switch (operators) {
    case '+':
      return randomNumberFirst + randomNumberSecond;
    case '-':
      return randomNumberFirst - randomNumberSecond;
    case '*':
      return randomNumberFirst * randomNumberSecond;
    default:
      throw new Error(`operation ${operators} is not supported`);
  }
};

const generateGcdNumber = (a, b) => {
  if (!b) {
    return a;
  }

  return generateGcdNumber(b, a % b);
};

const generateRandomNumber = (max = 100, min = 1) => Math.floor(Math.random() * (max - min)) + min;

const isNumberPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let d = 2; d < Math.sqrt(num); d += 1) {
    if (num % d === 0) {
      return false;
    }
  }
  return true;
};

export {
  generateOperator,
  generateGcdNumber,
  generateRandomNumber,
  isNumberPrime,
};
