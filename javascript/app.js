


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
    console.log(currentContentIndex)
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

// event listeners
nextBtn.addEventListener('click', carouselNext)

prevBtn.addEventListener('click', carouselBack)

window.addEventListener('load', load);