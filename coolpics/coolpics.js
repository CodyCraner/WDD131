const menu = document.querySelector('#butte');
let menuElement = document.querySelector('nav');

function hidestuff(){
    if (menuElement.classList.contains("hide")){
        menuElement.classList.remove("hide");
    }else{
        menuElement.classList.add("hide")  
    }
}

function handleResize(){
    if (window.innerWidth > 1500){
        menuElement.classList.remove("hide");
    }else{
        menuElement.classList.add("hide")
    }
}

menu.addEventListener('click', hidestuff);
handleResize();

window.addEventListener("resize", handleResize);

//Modal? functions and related variables
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = modal.querySelector('.close-viewer');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modal.showModal();
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.close();
    });
  
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });