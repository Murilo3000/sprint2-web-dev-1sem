

function validateFields(){
    const emailValid = isEmailValid;
    const passwordValid = isPasswordValid;
    document.getElementById("button").disabled = !emailValid || !passwordValid;
}
 function isEmailValid(){
     const email=document.getElementById("emailForm").value;
     if (!email){
         return false;
     } 
     return validateEmail(email);
}
 function isPasswordValid(){
     const password = getElementById("passwordForm").value;
     if (!password){
         return false;
     } return true;
}

 function trocar(cor){
    document.body.style.background = cor
}
 function validateEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
}
function welcome(){
    if (isEmailValid()){
        alert("Bem vindo ao Kit On")
        window.open("../index.html")
    }
}
