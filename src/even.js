import readlineSync from 'readline-sync';

const evenGame = (name) => {
  for (let i = 0; i < 3;) {
    const question = Math.floor(Math.random() * (100 - 0)) + 0;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer is: ');
    const evenNumber = question % 2 === 0 ? 'yes' : 'no';
    if (answer === evenNumber) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${answer}'' is wrong answer ;(. Correct answer was '${evenNumber}'.Let's try again,${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default() => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  evenGame(name);
};
