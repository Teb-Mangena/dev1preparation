const questions = [{
  question: 'what is the biggest animal',
  answer: [
    {text: 'bird', correct:false},
    {text: 'ant', correct:false},
    {text: 'dolphin', correct:false},
    {text: 'whale', correct:true},
  ]
},{
  question: 'which country is in Africa',
  answer: [
    {text: 'south africa', correct:true},
    {text: 'brazil', correct:false},
    {text: 'poland', correct:false},
    {text: 'australia', correct:false},
  ]
},{
  question:'which planet has water',
  answer:[
    {text: 'jupiter', correct:false},
    {text: 'earth' , correct:true},
    {text: 'mars', correct:false},
    {text: 'neptune', correct: false}
  ]
},{
  question: 'which club is dominating the premier league now',
  answer:[
    {text: 'arsenal', correct: false},
    {text: 'liverpool', correct: false},
    {text: 'man city', correct: true},
    {text: 'man utd', correct: false}
  ]
}];


const questionElement = document.querySelector('.asked-question');
const answerButton = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next-button');

let currentQuestioni = 0;
let score = 0;

function startQuiz(){
  currentQuestioni = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestion();
}


function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestioni];
  let questionNo = currentQuestioni + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer)=>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    answerButton.addEventListener('click',selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while (answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}


function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score ++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button)=>{
    if (button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}.`
  nextButton.innerHTML = "restart";
  nextButton.style.display = "block"
}

function handleNextButton(){
  currentQuestioni ++;
  if (currentQuestioni < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if (currentQuestioni < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();