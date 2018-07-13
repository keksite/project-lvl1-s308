import getRandomInt from '../utils';
import engine from '..';

const minNum = 100;
const maxNum = 10000;
const description = 'Find the greatest common divisor of given numbers.';

const getSum = (num) => {
  let a = num;
  let sum = 0;
  while (a > 0) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }
  return sum;
};

const getCorrectAnswer = (question) => {
  const answerLength = String(question).length;
  const sum = getSum(question);
  let result = '';
  const average = Math.floor(sum / answerLength);
  const remainder = sum % answerLength;
  for (let i = answerLength; i > 0; i -= 1) {
    if (remainder < i) {
      result += `${average}`;
    } else {
      result += `${average + 1}`;
    }
  }
  return result;
};

const balanceGame = () => {
  const question = getRandomInt(minNum, maxNum);
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

export default() => engine(description, balanceGame);
