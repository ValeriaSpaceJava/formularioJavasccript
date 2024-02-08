
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const tel = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem")
let span = document.querySelectorAll("#span");
const btn = document.getElementById("btn");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
      
    checkNome();
    checkEmail();
    checkTel();
    checkMensagem();
    emailValido();    
      
});




function checkNome(){
    if (nome.value == ''){
        nome.classList.add('vazio');
        span[0].style.display ='block';
       
    }else{
        nome.classList.add('preenchido');
        span[0].style.display ='none';
    }
};

function emailValido(){
    
    if(emailRegex.test(email.value)){
        console.log('EMAIL VALIDADO');
    }else{
        alert('EMAIL NÃO VALIDADO');
        email.classList.add('vazio');
    }
};

function checkEmail(){
    if (email.value == ''){
        email.classList.add('vazio');
        span[1].style.display ='block';
    }else{
        email.classList.add('preenchido');
        span[1].style.display ='none';
    }
};

function checkTel(){
    if (tel.value == ''){
        tel.classList.add('vazio');
        span[2].style.display ='block';
    }else{
        tel.classList.add('preenchido');
        span[2].style.display ='none';
    }
};

function checkMensagem(){
    if (mensagem.value == ''){
        mensagem.classList.add('vazio');
    }else{
        mensagem.classList.add('preenchido');
    }
};







