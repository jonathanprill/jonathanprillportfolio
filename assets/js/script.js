const lineLeft = document.querySelectorAll("#section-lines");


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("activate", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{

    
    //rule regarding percentage of item on screen
    // threshold: 0,

    //rule giving border margin to start animation
    rootMargin: "-10px -10px -60% -10px"
}
);


lineLeft.forEach(card => {
    observer.observe(card)
});

///////////////////////NEW////////////////////////

const boxAnimation = document.querySelectorAll("#box-feature");


const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("activate-box", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observerTwo.unobserve(entry.target)
    })
},
{

    
    //rule regarding percentage of item on screen
    // threshold: 0,

    //rule giving border margin to start animation
    rootMargin: "-10px -10px -20% -10px"
}
);

boxAnimation.forEach(card => {
    observerTwo.observe(card)
});


//////////////////lower hr line/////////////////////////
const lineAnimation = document.querySelectorAll("#lower-section-line");


const observerThree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("activate-line", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observerThree.unobserve(entry.target)
    })
},
{

    
    //rule regarding percentage of item on screen
    // threshold: 0,

    //rule giving border margin to start animation
    rootMargin: "-10px -10px -34% -10px"
}
);

lineAnimation.forEach(card => {
    observerThree.observe(card)
});

//////////////////hidden div/////////////////////////
const divAnimation = document.querySelectorAll("#hidden-div");


const observerFour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("activate-div", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observerFour.unobserve(entry.target)
    })
},
{

    
    //rule regarding percentage of item on screen
    // threshold: 0,

    //rule giving border margin to start animation
    rootMargin: "-10px -10px -18% -10px"
}
);

divAnimation.forEach(card => {
    observerFour.observe(card)
});