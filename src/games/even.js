import readlineSync from 'readline-sync';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const evenGame = (name) => {
  const attemp = 3;
  for (let i = 0; i < attemp; i += 1) {
    const question = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer is: ');
    const evenNumber = isEven(question);
    if (answer !== evenNumber) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${evenNumber}.Let's try again,${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default() => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  evenGame(name);
};
