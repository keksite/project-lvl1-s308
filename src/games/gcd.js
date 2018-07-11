import getRandomInt from '../utils';
import engine from '..';

const minNum = 1;
const maxNum = 100;
const gameDesc = 'Find the greatest common divisor of given numbers.';


const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const gcdGame = () => {
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const correctAnswer = (`${getGcd(num1, num2)}`);
  return { question, correctAnswer };
};


export default() => engine(gameDesc, gcdGame);
