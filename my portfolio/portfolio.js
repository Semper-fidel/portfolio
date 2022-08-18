let navRight = document.getElementById('navRight');
let menuBar = document.getElementById('menuBar');
let btn = document.getElementById('mobilemenu');
const navList = document.querySelectorAll('#navTab');
const projectGrid = document.querySelectorAll('#projectGrid');

/*NAV BAR FUNCTIONALITY*/ 

let navR = navRight.style.left="-100%";
let navigR = navRight.style.display ="none";

btn.onclick = function(){
    if(navRight.style.left ==="-100%" && navRight.style.display === "none"){
        navRight.style.left = "50%";
        navRight.style.display = "flex";
        btn.src = "Images folder/icon-close.svg";
    }

    else{
        btn.src = "Images folder/icon-hamburger copy.svg";
           navRight.style.left = "-100%";
           navRight.style.display = "none";

    }
 }

 /** Nav window Exit functionality */
navList.forEach( button => {
    button.addEventListener('click', () => {
        btn.src = "Images folder/icon-hamburger copy.svg";
        navRight.style.left = "-100%";
        navRight.style.display = "none";
    })
}
)







