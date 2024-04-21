const ServicesBtn = document.getElementById("ServicesBtn")
const ServicesPopUP = document.getElementById("ServicePopUp")
const ServicesPopUpCont = document.getElementById("ServicesPopUpCont")
const GraphicsBtn = document.getElementById("GraphicsBtn")
const MarketingBtn = document.getElementById("MarketingBtn")
const QuickLinkFooterBtn = document.getElementById("QuickLinkBtn")
const QuickLinksPopUp = document.getElementById("QuickLinksPopUp")


ServicesBtn.addEventListener("mouseover" , ServicesList)
function ServicesList() {
    ServicesPopUP.style.display = "flex"
   
}
QuickLinkFooterBtn.addEventListener("mouseover" , FooterPopUps)
function FooterPopUps() {
    QuickLinksPopUp.style.display = "flex"
   
}

ServicesPopUpCont.addEventListener("mouseleave" , ListClose)
function ListClose() {
    ServicesPopUP.style.display = "none"

}

MarketingBtn.addEventListener("click" , MarketingRedirect)
function MarketingRedirect() {
    location.href="../Pages/MarketingPage.html" ;

}

const userName = sessionStorage.getItem("UserName")
const LoggedInText = document.getElementById("LogedIn")
const PlusBtn = document.getElementById("PlusBtn")
const ProfileDropDown = document.getElementById("ProfileDropDown")
const logOutBtn = document.getElementById("logOutBtn")


if (userName != null) {
    PlusBtn.style.display = "none" ;
    LoggedInText.style.display = "flex" ;
    LoggedInText.textContent =  userName ;
    var LoggedIn = true ;
    LoggedInText.addEventListener("mouseover" , ProfDropDown)
    function ProfDropDown() {
    ProfileDropDown.style.display = "flex"
    }

    ProfileDropDown.addEventListener("mouseleave" , ListClose)
    function ListClose() {
        ProfileDropDown.style.display = "none"

}
}

logOutBtn.addEventListener("click" , logOut)
function logOut() {
    sessionStorage.clear()
    location.reload()

}

const ProfileBtn = document.getElementById("ProfileBtn") 

ProfileBtn.addEventListener("click" , ProfileRedirect)
function ProfileRedirect() {
    location.href="../Pages/profile.php" ;

}






