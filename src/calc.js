import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from 'hexlet-pairs';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = getRandom(0, operations.length);
  return operations[randomOperation];
};


const mathResult = (numbers, operation) => {
  const num1 = car(numbers);
  const num2 = cdr(numbers);
  let result = 0;
  if (operation === '+') result = num1 + num2;
  if (operation === '-') result = num1 - num2;
  if (operation === '*') result = num1 * num2;
  return result;
};

const calcGame = (name) => {
  const attemp = 3;
  for (let i = 0; i < attemp; i += 1) {
    const randomNumbers = cons(getRandom(1, 11), getRandom(1, 11));
    const randomOperation = getRandomOperation();
    const question = `${car(randomNumbers)}${randomOperation}${cdr(randomNumbers)}`;
    const correctAnswer = mathResult(randomNumbers, randomOperation);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(correctAnswer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again,${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default() => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  calcGame(name);
};
