

// CAROUSEL //
// for carousel on about me page displaying programming languages

// make our text array
const textArray = document.getElementsByClassName('carouselText')


// starting places for carousel
let previousContentIndex = 0;
let currentContentIndex = 0;

const firstIndex = 0; // first index of array
const lastIndex = textArray.length - 1; // last index of array


// make next button active
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

const hideOldContent = () => textArray[previousContentIndex].style.display = 'none'
const showNewContent = () => textArray[currentContentIndex].style.display = 'inline'

// function for rotating to the next text in carousel
const carouselNext = () => {
    // see next image, old img disappears, new img appears
    currentContentIndex += 1;
    // reset array when we reach end
    if(currentContentIndex > lastIndex) {
        currentContentIndex = firstIndex
    }
    hideOldContent()
    showNewContent()
    previousContentIndex = currentContentIndex

}


const carouselBack = () => {

    // when button clicked, show previous text in array

    currentContentIndex -= 1;
    // reset array when we reach beginning
    if(currentContentIndex < firstIndex) {
        currentContentIndex = lastIndex
    }

    hideOldContent()
    showNewContent()
    previousContentIndex = currentContentIndex

}


const load = () => {
    
    setInterval(carouselNext, 2000); // auto rotate every 2 seconds

}



// Dark Mode on index html

// grab title text which will be button
const darkModeTitle = document.getElementById('name')
// keep track of which mode is toggled
let theme = "light"

// function for dark mode
const darkMode = () => {
    body = document.querySelector('body')
    li = document.querySelectorAll('.navLink')
    if(theme === "light"){
        for(i=0; i < li.length; i++){
            li[i].style.color="white";
        }
        body.style.background="black";
        theme = "dark"
    }else{
        for(i=0; i < li.length; i++){
            li[i].style.color="black";
        }
        body.style.background="moccasin";
        theme = "light"
    }
}



// event listeners
// nextBtn.addEventListener('click', carouselNext)

// prevBtn.addEventListener('click', carouselBack)

window.addEventListener('load', load);

darkModeTitle.addEventListener('click', darkMode)