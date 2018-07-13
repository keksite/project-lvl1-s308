import getRandomInt from '../utils';
import engine from '..';

const minNum = 1;
const maxNum = 10;
const term = 10;
const description = 'What number is missing in this progression?';

const getQuestionAndAnswer = (start, difference, find) => {
  let current = 0;
  let question = '';
  let correctAnswer = 0;

  for (let i = 1; i <= term; i += 1) {
    current += difference;
    if (find === i) {
      question += '.. ';
      correctAnswer = `${current}`;
    } else {
      question += `${current} `;
    }
  }
  return { question, correctAnswer };
};

const gameProgression = () => {
  const start = getRandomInt(minNum, maxNum);
  const difference = getRandomInt(minNum, maxNum);
  const find = getRandomInt(minNum, term);
  const { question, correctAnswer } = getQuestionAndAnswer(start, difference, find);
  return { question, correctAnswer };
};

export default() => engine(description, gameProgression);
