function openSideBar(){
  return(
    document.querySelector('.js-hamburger-menu').addEventListener('click',()=>{
      const sidebarHTML = `
        <div class="sidebar-container">
          <div class="information-containers home-page"
          onclick="
          location.href='index.html'
          ">
            Go To HOMEPAGE
          </div>
          <div class="information-containers quiz" onclick="
          location.href='play-quiz.html'
          ">
            Play quiz
          </div>
          <div class="information-containers multiple-choice" onclick="
          location.href='first-page.html'
          ">
            Multiple choice
          </div>
          <div class="information-containers about" onclick="
          location.href='test.html'
          ">
            Games
          </div>
          <div class="information-containers faq" onclick="
          location.href='pseudo.html'
          ">
            Pseudocodes
          </div>
      
          <div class="information-containers past-papers" onclick="
          location.href='past-papers.html'
          ">
            Download Past Question Papers 
          </div>
          </div>
      `;

          const sideBarArea = document.querySelector('.side-view-big-container');

          if(sideBarArea.innerHTML === ''){
            sideBarArea.innerHTML = sidebarHTML;
          }else{
            sideBarArea.innerHTML = ''
          }
        })

  );
}

export default openSideBar;