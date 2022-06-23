const lineLeft = document.querySelectorAll("#section-lines");


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{

    
    //rule regarding percentage of item on screen
    threshold: 0,

    //rule giving border margin to start animation
    rootMargin: "-1px"
}
);


lineLeft.forEach(card => {
    observer.observe(card)
});



