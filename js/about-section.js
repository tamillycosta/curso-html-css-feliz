//acessar o browser
//pegar o html
//pegar o botão
// saber que esta sendo clicado o botão

//acessar a janela
//pegar html todo
//pegar o elements
//mover o elements para direita


    const Btnleft = window.document.querySelector(".carrocel-btn.-left");
    const Btn= window.document.querySelector(".carrocel-btn");
     const elementes = window.document.querySelector(".elementes");
     let pixels = 100;

Btnleft.addEventListener('click', function() {
    pixels = pixels -100;
    elementes.style = `transform: translateX(${pixels}px)`;

})
 
    
Btn.addEventListener('click', function() {
    pixels = pixels +100;
    elementes.style = `transform: translateX(${pixels}px)`; 

})


