

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




// Resume on index html

// grab the resume titles for a clickable buttons to open and close sections
const resume = document.body.querySelector('#myResume')
const education = document.body.querySelector('#education')
const experience = document.body.querySelector('#experience')

// grab the resume container so that i can hide and display it
let resumeDisplay = document.querySelector('#resume')

// grab the sections of education so that i can hide and display
let educationSections = document.querySelectorAll('.educationSection')

// track if resume is open or closed
let resumeOpen = 'closed'
// track if education and experience section of resume is open
let educationOpen = 'closed'
let experienceOpen = 'closed'

// function to display and close resume
const openResume = () => {
    if(resumeOpen === 'opened'){
        resumeDisplay.style.display = 'none'
        resumeOpen = 'closed'
    }else{
        resumeDisplay.style.display = 'block'
        resumeOpen = 'opened'
    }
}
//
const openEducation = () => {
    if(educationOpen === 'opened'){
        for(i=0; i < educationSections.length; i++){
            educationSections[i].style.display = 'none';
            educationOpen = 'closed';
        }
    }else{
        for(i=0; i < educationSections.length; i++){
            educationSections.style.display = 'block';
            educationOpen = 'opened';
        }
    }
}
//
const openExperience = () => {
    if(experienceOpen === 'opened'){
        experience.style.display = 'none'
        experienceOpen = 'closed'
    }else{
        experience.style.display = 'block'
        experienceOpen = 'opened'
    }
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
    footerLink = document.querySelectorAll('#footerLink')
    if(theme === "light"){
        for(i=0; i < li.length; i++){
            li[i].style.color="white";
        }
        for(i=0; i < footerLink.length; i++){
            footerLink[i].style.color="white";
        }
        darkModeTitle.style['-webkit-text-stroke']="1px white";
        resume.style.color="white";
        resumeDisplay.style.color="white";
        body.style.background="grey";
        theme = "dark"
    }else{
        for(i=0; i < li.length; i++){
            li[i].style.color="black";
        }
        for(i=0; i < footerLink.length; i++){
            footerLink[i].style.color="black";
        }
        darkModeTitle.style['-webkit-text-stroke']="1px black";
        resume.style.color="black";
        resumeDisplay.style.color="black";
        body.style.background="moccasin";
        theme = "light"
    }
}


// event listeners

// for page load to start carousel on about me page
window.addEventListener('load', load);
// for clicking on my name on index html to togle darkmode
darkModeTitle.addEventListener('click', darkMode)
// for toggling my resume
resume.addEventListener('click', openResume)
// for toggling education section of my resume
education.addEventListener('click', openEducation)
// for toggling experience section of my resume
experience.addEventListener('click', openExperience)