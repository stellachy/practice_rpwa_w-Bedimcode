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
    navClose.addEventListener("click", function(){
        navMenu.classList.remove("show-menu")
    })
}
/*參上面兩個if，() => 應該就是可以替代 fuction() */
/*remove menu mobile*/ /*挖它這裡直接叫我們作弊抄它的codeXDDD（真的越來越複雜omgQQ） */
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
   // const navMenu = document.getElementById("nav-menu")，這行可略，因為上面已經出現過惹～
    //when we click on each nav__link, we remove the show-menu class(就是會跳出來的意思)
    navMenu.classList.remove("show-menu")
}
navLink.forEach(a => a.addEventListener("click", linkAction))
//我想後面的n => n...意思應該是說，navLink裡面的每個element用n來表達，都要執行後面那件addEventListener的事情，
//而且也因此就是不一定要用n哦~，就是拿來表示裡面的每個element的代號而已！

//！！可以惹！！下面是透過for迴圈來表達上面那行navLink.forEach的同樣意思！！！！
/*
for(n=0; n<navLink.length; n++){
    navLink[n].addEventListener("click", linkAction);
}
*/

/*accordion skills*/

/*qualification tabs*/

/*service modal*/  