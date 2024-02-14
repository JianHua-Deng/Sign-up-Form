const password = getElementById("user-password");
const confirmpw = getElementById("confirm-password");
const submitbtn = document.querySelector(".create");
const errormsg = document.querySelector(".error-unmatch");

function matchPw(){
    if (password == confirmpw){
        errormsg.textContent = ""
        return true;
    }else{
        errormsg.textContent = "Password does not match"
        return false;
    }
}

confirmpw.addEventListener("change", matchPw);