
(function() {
    let showPopup = document.querySelector('.contact__letter--showPopup');
    let popup = document.querySelector('.popup');
    let buttonClose = document.querySelector('.popup-form__btn');

    showPopup.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('popup--appear')
    });

    buttonClose.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.remove('popup--appear')
    });

    window.addEventListener('keydown',function(e){
        if(e.keyCode === 27){
           e.preventDefault();
           popup.classList.remove('popup--appear');
        }
    })

}());