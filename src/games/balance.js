import getRandomInt from '../utils';
import engine from '..';

const minNum = 100;
const maxNum = 10000;
const description = 'Find the greatest common divisor of given numbers.';

const getAnswer = (question) => {
  let number = String(question);
  const { length } = number;
  let sum = 0;
  let result = '';
  const array = [];

  while (number > 0) {
    const temp = number % 10;
    sum += temp;
    number = Math.floor(number / 10);
  }
  const average = sum / length;
  const diff = sum - Math.floor(average) * length;
  for (let i = 0; i < length; i += 1) {
    array.push(Math.floor(average));
  }
  if (diff !== 0) {
    for (let i = diff; i > 0; i -= 1) {
      array[i] += 1;
    }
  }
  array.sort();
  Object.keys(array).forEach((key) => {
    result += array[key];
  });
  return result;
};

const balanceGame = () => {
  const question = getRandomInt(minNum, maxNum);
  const correctAnswer = getAnswer(question);
  return { question, correctAnswer };
};


export default() => engine(description, balanceGame);
