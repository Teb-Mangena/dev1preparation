import { videos } from "../data/testpage.js";

let testPageHTML = '';

videos.forEach((video)=>{
  testPageHTML += `
      <div class="tests">
        <div class="video-name">
          ${video.videoName}
        </div>
          ${video.videoLink}
      </div>   
  `;
});

document.querySelector('.js-test-container').innerHTML = testPageHTML;