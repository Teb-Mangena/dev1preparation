import { quizzies } from "../data/play-quiz/play-quiz-data.js";
import openSideBar from "./shared-files/sidebar.js";

openSideBar();

const questionspace = document.querySelector('.question-number');
const typeQuestion = document.querySelector('.question-type');
const answerButton = document.querySelector('.answer-container');
const next = document.querySelector('.next');

let theQuestionNum = 0;
let score = 0;

function startQuiz(){
  theQuestionNum = 0;
  score = 0;
  next.innerHTML = "Next";
  appearQuestion();
}

function appearQuestion(){
  resetState();
  let currentQuestion = quizzies[theQuestionNum];
  let questionNo = theQuestionNum + 1;
  questionspace.innerHTML = "Question " + questionNo;
  typeQuestion.innerHTML = currentQuestion.questionType;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('answers');
    button.innerText = answer.text;
    button.dataset.correct = answer.correct.toString();
    button.addEventListener('click', selectAnswer);
    answerButton.appendChild(button);
  });
}

function resetState(){
  next.style.display = 'none';
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(event){
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === 'true';
  if(isCorrect){
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }
  Array.from(answerButton.children).forEach((button) => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  next.style.display = 'block';
}

function showScore(){
  resetState();
  questionspace.innerHTML = "Here are your Results";
  typeQuestion.innerHTML = `You got ${score} questions correct out of ${quizzies.length} questions.`;
  next.innerHTML = 'Restart';
  next.style.display = 'block';
}

function handleNextButton(){
  theQuestionNum++;
  if (theQuestionNum < quizzies.length){
    appearQuestion();
  } else {
    showScore();
  }
}

next.addEventListener('click', () => {
  if(theQuestionNum < quizzies.length){
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
