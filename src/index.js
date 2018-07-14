import readlineSync from 'readline-sync';

const rounds = 3;
const greeting = 'Welcome to the Brain Games!';

export default (description, game) => {
  console.log(greeting);
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer is: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again,${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};
