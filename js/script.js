const bigFoto=document.querySelector('.main-foto-portfolio');
const smallFoto=document.querySelectorAll('.other-foto-portfolio');

for(let i = 0; i < smallFoto.length; i++){
    smallFoto[i].addEventListener('click', function(){
        bigFoto.src = smallFoto[i].src;
    });
}

const buttonShowModalWindow = document.querySelector('.card__button');
const modalWindow = document.querySelector('.modal');
const buttonCloseModalWindow = document.querySelector('.modal__button');


buttonShowModalWindow.addEventListener('click', function(evt){
    evt.preventDefault();
    modalWindow.classList.add('modal--show');
});

buttonCloseModalWindow.addEventListener('click', function(){
    modalWindow.classList.remove('modal--show');
});

document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
        modalWindow.classList.remove('modal--show');
    }
  });