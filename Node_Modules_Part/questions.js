const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What are you going to do with Node js?",
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`your answer: ${answer}`));

answerEvents.on("complete", (answers) => {
  console.log("Thank you for your answers");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());