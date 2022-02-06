var texts = ["Student", "Engineer", "Developer"];
var count = 0;
var i = 0;
function changeText() {

    if(i<texts[count].length){
        document.getElementById("changing-text").innerHTML += texts[count].charAt(i);
        i++;
        setTimeout(changeText,300);
    }
    else{
        i=0;
        document.getElementById("changing-text").innerHTML = "";
        if(count<2){
            count++;
        }
        else{
            count=0;
        }
        changeText();
    }
}
changeText();

const menuIcon = document.getElementsByClassName('menuIcon')[0]
const closeIcon = document.getElementsByClassName('closeIcon')[0]
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('nav-bars')[0]
var showMenu = false


toggleButton.addEventListener('click',()=>{
    if(showMenu==false){
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        showMenu = true;
    }else{
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        showMenu = false;
    }
    navbarLink.classList.toggle('active')
})
const navbarLinks = document.querySelectorAll('.nav_links')

navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if(showMenu==false){
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
            showMenu = true;
        }else{
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
            showMenu = false;
        }
        navbarLink.classList.toggle('active')
    })
});