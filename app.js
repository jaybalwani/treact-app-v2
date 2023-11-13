let elements = document.getElementsByClassName('nav__link--burger')


function menuOpen(){
    document.body.classList += 'open--menu'

    for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('nav__link--burger__custom')
}

}

function menuClose(){
    document.body.classList.remove('open--menu')

    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('nav__link--burger__custom')
    }

}