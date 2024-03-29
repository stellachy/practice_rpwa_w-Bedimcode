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
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }

    if(itemClass == "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})

/*qualification tabs*/
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tabs.forEach(tab =>{
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
        
    })
})
/*service modal*/  
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalClose = document.querySelectorAll(".services__modal-close")

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () =>{
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove("active-modal")
        })
    })
})

/*portfolio swiper*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    /*窩不懂為什麼要把.swiper再替換成我們原本建好的class?因為那個不是兩個都可以找到那個標籤ㄇ*/
    /* 好我知道位什麼不只用swiperㄌ，因為有兩個的時候會不知道哪個要用哪ㄍ～ */
    /*還有把var改成let，why???*/
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*testimonial*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  /*這下面似乎是創造出有preview分頁的樣子，所以會讓這個地方一次出現兩個testimonial
  我覺得一個就好比較好看ㄟ？*/
  breakpoints:{
    568:{
        slidesPerView: 2,
    }
  }
});

/*scroll sections active link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*change background header*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*show scroll up*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is greater than 560 viewport height, add the show-scroll class to the header tag
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*dark light theme*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
//uil-sun4從unicon上面複製過來ㄉ??

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we activate or deactivate
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})