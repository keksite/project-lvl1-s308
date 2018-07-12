import {
  cons, car, cdr,
} from 'hexlet-pairs';
import getRandomInt from '../utils';
import engine from '..';

const operations = ['+', '-', '*'];
const minNum = 1;
const maxNum = 100;
const description = 'What is the result of the expression?';

const mathResult = (num1, num2) => {
  const operation = operations[getRandomInt(0, operations.length)];
  let result;
  switch (operation) {
    case ('-'):
      result = cons(`${num1} - ${num2}`, (num1 - num2));
      break;
    case '+':
      result = cons(`${num1} + ${num2}`, (num1 + num2));
      break;
    case '*':
      result = cons(`${num1} * ${num2}`, (num1 * num2));
      break;
    default:
  }
  return result;
};

const calcGame = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const result = mathResult(num1, num2);
  const correctAnswer = `${cdr(result)}`;
  const question = `${car(result)}`;
  return { question, correctAnswer };
};

export default() => engine(description, calcGame);
