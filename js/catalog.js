let button = document.querySelector('.main-header__button');
let catalog = document.querySelector('.main-header__catalog-items');

button.addEventListener('click',function(e){
    e.preventDefault();
    button.classList.toggle('button--rotate');
    catalog.classList.toggle('visually-hidden');
});