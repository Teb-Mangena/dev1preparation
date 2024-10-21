import { questionsPseudo } from "../data/pseudocode/pseudo-data.js";
import openSideBar from "./shared-files/sidebar.js";
import { addToStorage, storage } from "../data/storage.js";

let pseudoHTML = '';

questionsPseudo.forEach((pseudoQuestion)=>{
  pseudoHTML += `
        <div class="content-container">
      <div class="inner-content">
        <div class="upper">
          Question ${pseudoQuestion.questionNum}
        </div>
        <div class="middle">
          ${pseudoQuestion.pseudoStatement}
        </div>
        <div class="bottom">
          <button class="view-answer-button js-view-answer-button" data-question-solution="${pseudoQuestion.pseudoSolution}" data-question-num="${pseudoQuestion.questionNum}">
            view answer
          </button>
        </div>
      </div>
      <div class="results-container">
        <div class="release-results js-release-results-${pseudoQuestion.questionNum}"></div>
        <div class="close-button js-close-button-${pseudoQuestion.questionNum}">         
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-body-container').innerHTML = pseudoHTML;

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

document.querySelectorAll('.js-add-to-storage').forEach((addbutton)=>{
  addbutton.addEventListener('click',()=>{
    const questionId = addbutton.dataset.questionNum;
    addToStorage();

    let totQuantity = 0;

    storage.forEach((storageItem)=>{
      totQuantity += storageItem.quantity ;
    });

    document.querySelector('.js-total-count').innerHTML = totQuantity;
  })
});