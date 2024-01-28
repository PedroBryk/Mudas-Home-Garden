var botao = document.querySelector(".btnmobile");

var nav = document.querySelector(".navegacao");

function menuMobile(event){

    nav.classList.toggle('active');
}

botao.addEventListener("click", menuMobile);