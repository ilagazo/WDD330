var menuArray = [
    {label: "Week 01 Notes", url:"../WDD330/Week01/index01.html"},
    {label: "Week 02 Notes", url:"../WDD330/Week02/index02.html"},
    {label: "Week 03 Notes", url:"../WDD330/Week03/index03.html"},
    {label: "Week 04 Notes", url:"../WDD330/Week04/index04.html"},
    {label: "Week 05 Notes", url:"../WDD330/Week05/index05.html"},
    {label: "Week 07 Notes", url:"../WDD330/Week07/index07.html"},
    {label: "Week 08 Notes", url:"../WDD330/Week08/index08.html"},
    {label: "Week 09 Notes", url:"../WDD330/Week09/index09.html"},
    {label: "Week 10 Notes", url:"../WDD330/Week09/index10.html"}
]

function dynamicTableLoader() {
    var display = "";
    var i;
    // FOR loop to loop through array and display the content in a <li> tag
    for (i in menuArray) {
        display += "<li><a href=\"" + menuArray[i].url + "\">" + menuArray[i].label + "</a></li>";
    }
        document.getElementById("arrayLink").innerHTML = display;
}

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

// Light & Dark Mode
function toggleLightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}