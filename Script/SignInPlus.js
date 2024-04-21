const CreateAccBtn = document.getElementById("CreateAccBtn")
const MainCont = document.getElementById("MainCont")
const MainContPopUp = document.getElementById("MainContPopUp")
const SignInPopUpBtn = document.getElementById("SignInPopBtn")

CreateAccBtn.addEventListener("click" , CreateAccPopUp)
function CreateAccPopUp() {
    MainCont.style.display = "none"
    MainContPopUp.style.display = "flex"
    
}

SignInPopUpBtn.addEventListener("click", SignInPopUP)
function SignInPopUP() {
    MainCont.style.display = "flex"
    MainContPopUp.style.display = "none"

}

