import getRandomInt from '../utils';
import engine from '..';

const minNum = 1;
const maxNum = 100;
const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const question = getRandomInt(minNum, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default() => engine(description, primeGame);
