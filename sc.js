/*==================================================
            PORTFOLIO PREMIUM
==================================================*/

/*================ PRELOADER ================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});

/*================ MENU MOBILE ================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

/*================ FERMER LE MENU ================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

/*================ HEADER =================*/

const header=document.querySelector("header");

/*================ ANCRE FIXE =================*/

const scrollToSection = target => {
    if (!target) return;
    const headerOffset = header.offsetHeight + 16;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            scrollToSection(target);
            navLinks.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});

const scrollToHash = () => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
        scrollToSection(target);
    }
};

window.addEventListener('load', () => {
    setTimeout(() => {
        scrollToHash();
        document.querySelectorAll('section.hidden').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('show');
            }
        });
    }, 120);
});
window.addEventListener('hashchange', scrollToHash);

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(2,6,23,.85)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.background="rgba(15,23,42,.5)";

        header.style.boxShadow="none";

    }

});

/*================ SCROLL TOP =================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollBtn.style.display="flex";

        scrollBtn.style.alignItems="center";

        scrollBtn.style.justifyContent="center";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*================ ANIMATION DES SECTIONS =================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/*================ ANIMATION DES BARRES =================*/

const bars=document.querySelectorAll(".progress-bar");

const skillObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

}

});

});

bars.forEach(bar=>{

skillObserver.observe(bar);

});

/*================ EFFET PARALLAX =================*/

window.addEventListener("mousemove",(e)=>{

const blobs=document.querySelectorAll(".blob");

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const speed=(index+1)*20;

blob.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});

/*================ EFFET DES CARTES =================*/

const cards=document.querySelectorAll(

".about-card,.project-card,.contact-card,.skill-box"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*================ ANNÉE AUTOMATIQUE =================*/

const year=document.querySelector("#year");

if(year){

year.textContent=new Date().getFullYear();

}

/*================ CURSEUR LUMINEUX =================*/

const cursor=document.createElement("div");

cursor.className="cursor-light";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});