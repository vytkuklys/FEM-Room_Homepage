// ----- SELECTORS
const btnOpen = document.querySelector('.nav__div__btn-open');
const btnClose = document.querySelector('.nav__div__btn-close');
const carousel = document.querySelector(".shop__holder");
const previousBtn = document.querySelector(".shop__btn--previous");
const nextBtn = document.querySelector(".shop__btn--next");
let clickIndex = 0;

// ----- FUNCTIONAL EXPRESSIONS
const textReplacer = clickIndex => {
    let title = document.querySelector('.info__h1');
    let text = document.querySelector('.info__p');
    let textAndTitles = {
        0: [{title: 'Discover innovative ways to decorate', text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'}],
        1: [{title: 'We are available all across the globe', text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'}],
        2: [{title: 'Manufactured with the best materials', text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'}]
    }
    if(textAndTitles[clickIndex]){
        title.innerText = textAndTitles[clickIndex][0].title;
        text.innerText = textAndTitles[clickIndex][0].text;
    }
}

const sleep = ms => {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, ms);
    });
}

const nextSlide = async()=> {
    let copyClickIndex = clickIndex;
    clickIndex = (clickIndex < 2) ? ++clickIndex : 2;
    carousel.style.transform = "translateX(" + clickIndex * -33.3334 + "%)";
    await sleep(501);
    copyClickIndex == clickIndex ? '' : textReplacer(clickIndex);
}

const previousSlide = async()=> {
    let copyClickIndex = clickIndex;
    clickIndex = (clickIndex > 0) ? --clickIndex : 0;
    carousel.style.transform = "translateX(" + clickIndex * -33.3334 + "%)";
    await sleep(501);
    copyClickIndex == clickIndex ? '' : textReplacer(clickIndex);
}

// ------ EVENTS
nextBtn.addEventListener("click", ()=> nextSlide());

previousBtn.addEventListener("click", ()=> previousSlide());

document.addEventListener('keydown', ()=>{
    event.keyCode === 37 ? previousSlide() : ''; 
    event.keyCode === 39 ? nextSlide() : ''; 
});

btnOpen.addEventListener('click', ()=>{
    document.querySelector('.header').classList.remove('open');
});

btnClose.addEventListener('click', ()=>{
    document.querySelector('.header').classList.add('open');
});