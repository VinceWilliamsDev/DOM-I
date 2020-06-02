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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

function log (target) {
  console.log(target);
}
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header content
let navLink =  document.querySelectorAll("nav a");
log(navLink);
navLink.forEach( (link, index) => link.textContent = siteContent["nav"]["nav-item-" + (index+1)]);

let h1 = document.querySelector("h1");
log(h1)
h1Split = siteContent["cta"]["h1"].split(" ");
log(h1Split);
h1.innerHTML = `${h1Split[0]}<br />${h1Split[1]}<br />${h1Split[2]}`;

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];


// top content
const topContent = document.querySelectorAll("div.top-content div.text-content");
log(topContent);

const featuresContent = topContent[0];
log(featuresContent);
featuresContent.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
featuresContent.querySelector("p").textContent = siteContent["main-content"]["features-content"];

const aboutContent = topContent[1];
log(aboutContent);
aboutContent.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
aboutContent.querySelector("p").textContent = siteContent["main-content"]["about-content"];

// middle image
document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

// bottom content
const bottomContent = document.querySelectorAll("div.bottom-content div.text-content");
log(bottomContent);

const servicesContent = bottomContent[0];
log(servicesContent);
servicesContent.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
servicesContent.querySelector("p").textContent = siteContent["main-content"]["services-content"];

const productContent = bottomContent[1];
log(productContent);
productContent.querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
productContent.querySelector("p").textContent = siteContent["main-content"]["product-content"]

const visionContent = bottomContent[2];
log(visionContent);
visionContent.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
visionContent.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

// contact section
document.querySelector("section.contact h4").textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll("section.contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

//TASK 3 
navLink.forEach( link => link.style.color = "green"); 

const newLink = document.createElement(a);
document.querySelector("nav").prepend(newLink);
document.querySelector("nav").append("Thing 2", newLink);
log(document.querySelector("nav a:nth-of-type(1)"))
// .setAttribute("href", "#");