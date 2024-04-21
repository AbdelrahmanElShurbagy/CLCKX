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