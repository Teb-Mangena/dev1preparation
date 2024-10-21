import { papers } from '../data/past-papers/past-paper-data.js';
import openSideBar from './shared-files/sidebar.js';

openSideBar();

let pastPapersHTML = '';

papers.forEach((paper)=>{
  pastPapersHTML += `
    <div class="content-container">
      <div class="inner-content">
        <div class="upper">
          Exam/Test
        </div>
        <div class="middle">
          ${paper.link}
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-body-container').innerHTML = pastPapersHTML;