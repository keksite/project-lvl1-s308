import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from 'hexlet-pairs';
import getRandomInt from '../utils/getRandomInt';

const operations = ['+', '-', '*'];
const rounds = 3;
const minNum = 1;
const maxNum = 100;

const mathResult = (num1, num2) => {
  const operation = operations[getRandomInt(0, operations.length)];
  switch (operation) {
    case ('-'):
      return cons(`${num1} - ${num2}`, (num1 - num2));
    case '+':
      return cons(`${num1} + ${num2}`, (num1 + num2));
    case '*':
      return cons(`${num1} * ${num2}`, (num1 * num2));
    default:
      break;
  }
};

const calcGame = (name) => {
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInt(minNum, maxNum);
    const num2 = getRandomInt(minNum, maxNum);
    const correctAnswer = mathResult(num1, num2);
    const question = `${car(correctAnswer)}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(cdr(correctAnswer))) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${cdr(correctAnswer)}.Let's try again,${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default() => {
  const greeting = 'Welcome to the Brain Games!';
  const gameDesc = 'What is the result of the expression?';
  console.log(greeting);
  console.log(gameDesc);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  calcGame(name);
};
