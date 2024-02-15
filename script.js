const password = document.getElementById("user-password");
const confirmpw = document.getElementById("confirm-password");
const submitbtn = document.querySelector(".create");
const errormsg = document.querySelector(".error-unmatch");
const successmsg = document.querySelector(".success");

let match = false;

function matchPw(){

    if(password.value == confirmpw.value){
        match = true;
    }else{
        match = false;
    }
}

function submit(){
    if(password.value != ""){
        matchPw();
        if(match){
            errormsg.textContent = "";
        }else{
            errormsg.textContent = "Password does not match!";
            successmsg.textContent = "";
        }
    }
}

confirmpw.addEventListener("change", matchPw);
submitbtn.addEventListener("click", submit);