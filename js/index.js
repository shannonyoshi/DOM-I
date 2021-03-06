const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let codeSnip = document.getElementById("middle-img");
codeSnip.setAttribute('src', siteContent["main-content"]["middle-img-src"])
let col = 255
const navLinks = document.querySelectorAll('header nav a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = (siteContent["nav"][`nav-item-${i + 1}`])
  navLinks[i].style.color =  `rgb(0,${col}, ${col})`;
  col-=36;
}

const navItem7 = document.createElement("a")
navItem7.textContent = "Append"
navItem7.setAttribute("style", "color:black;")
document.querySelector("nav").appendChild(navItem7);
const navItem8 = document.createElement("a")
navItem8.textContent = "Prepend"
navItem8.setAttribute("style", "color:white;")
document.querySelector("nav").prepend(navItem8);
//added Nav anchors are not green because they were added later and not included in the for loop which gave the other tags their green color.

const ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = (siteContent["cta"]["h1"]).split(" ").join("<br>")
ctaH1.style.color = "#2EC3C3"

const button = document.querySelector("button");
button.textContent = (siteContent["cta"]["button"])

const mainh4 = document.querySelectorAll(".main-content h4");
mainh4[0].textContent = (siteContent["main-content"]["features-h4"])
mainh4[1].textContent = (siteContent["main-content"]["about-h4"])
mainh4[2].textContent = (siteContent["main-content"]["services-h4"])
mainh4[3].textContent = (siteContent["main-content"]["product-h4"])
mainh4[4].textContent = (siteContent["main-content"]["vision-h4"])
//adding color gradient to h4
let gb=255
for(let i=0; i<mainh4.length; i++){
  mainh4[i].style.color = `rgb(${gb},${gb},${gb})`
  gb-=50
}

const mainText = document.querySelectorAll(".main-content p");
mainText[0].textContent = (siteContent["main-content"]["features-content"])
mainText[1].textContent = (siteContent["main-content"]["about-content"])
mainText[2].textContent = (siteContent["main-content"]["services-content"])
mainText[3].textContent = (siteContent["main-content"]["product-content"])
mainText[4].textContent = (siteContent["main-content"]["vision-content"])

mainText.forEach((para)=>{
  para.style.color = "white";
});

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = (siteContent["contact"]["contact-h4"])

const contact = document.querySelectorAll(".contact p");
contact[0].textContent = (siteContent["contact"]["address"])
contact[1].textContent = (siteContent["contact"]["phone"])
contact[2].textContent = (siteContent["contact"]["email"])

const copy = document.querySelector("footer p")
copy.textContent = (siteContent["footer"]["copyright"])
//copy.style.color="white"

document.body.style.backgroundImage="url('https://cdn.wallpapersafari.com/32/5/5hSZzg.jpg')";

copy.addEventListener("mouseenter", function(){
  copy.style.color = "white"
});

copy.addEventListener("mouseleave", function(){
  copy.style.color = "black"
});

// for(let i=0; i<mainh4.length; i++){
//   textArea[i].addEventListener("mouseover", mouseOver);
// }