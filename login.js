document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_iniciar-sesion").addEventListener("click",iniciar);
window.addEventListener("resize",anchoPage)


var contenedor_login_register=document.querySelector(".container-login-register");
var formulario_register=document.querySelector(".formulario-register");
var formulario_login=document.querySelector(".formulario-login");
var caja_trasera_register=document.querySelector(".caja_trasera-register");
var caja_trasera_login=document.querySelector(".caja_trasera-login");


function anchoPage(){
    if(window.innerWidth>850){
        caja_trasera_login.style.display="block";
        caja_trasera_register.style.display="block";
    }else{
        caja_trasera_register.style.display="block";
        caja_trasera_register.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario_login.style.display="block";
        formulario_register.style.display="none";
        contenedor_login_register.style.left="0";
    }
}
anchoPage();


function iniciar(){
    if(window.innerWidth>850){

        formulario_register.style.display="none";
        contenedor_login_register.style.left="10px";
        formulario_login.style.display="block";
        caja_trasera_register.style.opacity="1";
        caja_trasera_login.style.opacity="0";
    }else{
       
        formulario_register.style.display="none";
        contenedor_login_register.style.left="0px";
        formulario_login.style.display="block";
        caja_trasera_register.style.display="block";
        caja_trasera_login.style.display="none"; 
    }
    
    }
function register(){
    if(window.innerWidth>850){

        formulario_register.style.display="block";
        contenedor_login_register.style.left="410px";
        formulario_login.style.display="none";
        caja_trasera_register.style.opacity="0";
        caja_trasera_login.style.opacity="1";
    }else{
        
        formulario_register.style.display="block";
        contenedor_login_register.style.left="0px";
        formulario_login.style.display="none";
        caja_trasera_register.style.display="none";
        caja_trasera_login.style.display="block";
        caja_trasera_login.style.opacity="1"; 

    }

}