import { questions } from "../data/multiple-choice/mc-data.js";
import openSideBar from "./shared-files/sidebar.js";

let questionHTML = '';

questions.forEach((question)=>{
  questionHTML += `
    <div class="content-container">
      <div class="inner-content">
        <div class="upper">
          Question ${question.questionNum}
        </div>
        <div class="middle">
          ${question.questiontoAnswer}
        </div>
        <div class="bottom">
          <button class="view-answer-button js-view-answer-button" data-question-solution="${question.solution}" data-question-num="${question.questionNum}">
            view answer
          </button>
        </div>
      </div>
      <div class="results-container">
        <div class="release-results js-release-results-${question.questionNum}"></div>
        <div class="close-button js-close-button-${question.questionNum}">         
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-body-container').innerHTML = questionHTML;

document.querySelectorAll('.js-view-answer-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    const questionNum = button.dataset.questionNum;
    const solution = button.dataset.questionSolution;
    document.querySelectorAll(
      `.js-release-results-${questionNum}`
    ).forEach((space)=>{
      space.innerHTML = solution;
    });

    //making the answer button disappear
    
    button.style.display = 'none';

    //creating the close button

    document.querySelectorAll(
      `.js-close-button-${questionNum}`
    ).forEach((closebuttonContainer)=>{
      closebuttonContainer.innerHTML = `
        <button class="close-answer 
        js-close-answer" data-question-num="${questionNum}">
          close answer
        </button>
      `;

      //make close button interactive

      closebuttonContainer.querySelector('.js-close-answer').addEventListener('click',()=>{
        document.querySelectorAll(`.js-release-results-${questionNum}`).forEach((cancelSpace) => {
          cancelSpace.innerHTML = '';
        });
        closebuttonContainer.style.display = 'none';
        button.style.display = 'block';
      });

    });  

  });
});
  
openSideBar();