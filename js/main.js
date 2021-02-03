let btnEntrar = document.querySelector('#entrar'); 
let btnInscreverSe = document.querySelector('#inscrever'); 

let body = document.querySelector('body'); 

btnEntrar.addEventListener('click', function(){
    body.className = 'entrar-js'; //Ao receber o click, a classe entrar-js será criada. 
})

btnInscreverSe.addEventListener('click', function(){
    body.className = 'inscrever-js'; 
})