import readlineSync from 'readline-sync';

const isEven = number => number % 2 === 0;

const rounds = 3;

const evenGame = (name) => {
  for (let i = 0; i < rounds; i += 1) {
    const question = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer is: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again,${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default() => {
  const greeting = 'Welcome to the Brain Games!';
  const gameDesc = 'Answer "yes" if number even otherwise answer "no"';
  console.log(greeting);
  console.log(gameDesc);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  evenGame(name);
};
