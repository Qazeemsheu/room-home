const previous = document.querySelector("#content aside button");
const next = document.querySelector("#content aside button + button");
const headerSection = document.getElementById("headerSection");
const text = document.querySelector("#content div nav h2");
const para = document.querySelector("#content div nav p");
const iconHamburger = document.querySelector("#icon-hamburger");
const summary = document.querySelector("summary");
const iconClose = document.querySelector("#close");

let counter = 0;

next.onclick = function(){
    counter++;

    if(counter === 1){
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-2.jpg")';
        text.innerHTML = "We are available all across the globe";
        para.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    }else if(counter === 2){
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-3.jpg")';
        text.innerHTML = "Manufactured with the best materials";
        para.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }else{
        counter = 0;
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-1.jpg")';
        text.innerHTML = "Discover innovative ways to decorate";
        para.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    }
}

previous.onclick = function(){
    counter--;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    if(counter === 1){
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-2.jpg")';
        text.innerHTML = "We are available all across the globe";
        para.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    }else if(counter === 2){
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-3.jpg")';
        text.innerHTML = "Manufactured with the best materials";
        para.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }else{
        counter = 0;
        headerSection.style.backgroundImage = 'url("images/desktop-image-hero-1.jpg")';
        text.innerHTML = "Discover innovative ways to decorate";
        para.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
    }
}

iconHamburger.onclick = function(){
    summary.style.display = "flex";
}

iconClose.onclick = function(){
    summary.style.display = "none";
}