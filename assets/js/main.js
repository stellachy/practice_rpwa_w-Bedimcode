/*menu show y hidden*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*menu show*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*menu hidden*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}
/*remove menu mobile*/ /*挖它這裡直接叫我們作弊抄它的codeXDDD（真的越來越複雜omgQQ） */
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    //when we click on each nav__link, we remove the show-menu class(就是會跳出來的意思)
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*accordion skills*/

/*qualification tabs*/

/*service modal*/  