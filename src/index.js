import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games! ');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isEven = number => number % 2 === 0;

const isCorrectAnswer = (answer) => {
  if (answer === 'yes') {
    return true;
  } if (answer === 'no') {
    return false;
  }
  return undefined;
};

export const evenGame = (name) => {
  let counter = 0;
  while (counter < 3) {
    const number = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Answer is: ');
    if (isEven(number) === isCorrectAnswer(answer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}'' is wrong answer ;(. Correct answer was '${isEven(number) === true ? 'yes' : 'no'}'.Let's try again,${name}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
