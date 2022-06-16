const toggleLine = document.querySelectorAll("#toggle-me");
const toggleDrip = document.querySelector("#toggle-me-drip");
const toggleHr = document.querySelector("#toggle-me-hr");
const toggleBox = document.querySelector("#toggle-me-box");
const toggleDiv = document.querySelector("#toggle-me-div");
const toggleTitleLine = document.querySelector("#toggle-me-title-line");
const toggleTitleText = document.querySelector("#toggle-me-title-text");
const toggleContactLine = document.querySelector("#toggle-me-contact-line");
const toggleContactText = document.querySelector("#toggle-me-contact-text");
const toggleAboutLine = document.querySelector("#toggle-me-about-line");
const toggleAboutText = document.querySelector("#toggle-me-about-text");
const toggleSkillsLine = document.querySelector("#toggle-me-skills-line");
const toggleSkillsText = document.querySelector("#toggle-me-skills-text");



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("activate", entry.isIntersecting)
        //creates a rule that once animation has played, it wont play again if you scroll up and down

        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            runDrip(entry);
            runHr(entry);
            runBox(entry);
            runDiv(entry);
            // runTtileLine(entry);
            // runTtileText(entry);
            // runContactLine(entry);
            // runContactText(entry);
            // runAboutLine(entry);
            // runAboutText(entry);
        }
    })

},
    {
        rootMargin: "-10px -10px -64% -10px"
    }
);


toggleLine.forEach(card => {
    observer.observe(card)
});

function runDrip(entry) {
    toggleDrip.classList.toggle("activate", entry)
    if (entry) observer.unobserve(entry.target)
}

function runHr(entry) {
    toggleHr.classList.toggle("activate", entry)
    if (entry) observer.unobserve(entry.target)
}


function runBox(entry) {
    toggleBox.classList.toggle("activate", entry)
    if (entry) observer.unobserve(entry.target)
}

function runDiv(entry) {
    toggleDiv.classList.toggle("activate", entry)
    if (entry) observer.unobserve(entry.target)
}

// Navigation
const tabs = document.querySelectorAll('.sev-tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        //removes class from all tabs when clicked
        tabs.forEach(item => item.classList.remove('sev-is-active'))
        tab.classList.add('sev-is-active')

        const target = tab.dataset.mickeymouse;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('sev-is-hidden');
            } else {
                box.classList.add('sev-is-hidden');
            }
        })
    })
})

////////////////////////////////////////////////////////////////////////////

//NEW CODE SORTABLE
$(".sev-list-group").sortable({
    scroll: false,
    activate: function () {
        $(".sev-bottom-trash").addClass("sev-bottom-trash-drag")
        $(".sev-left-door").addClass("sev-left-door-active")
        $(".sev-right-door").addClass("sev-right-door-active")
    },
    deactivate: function () {
        $(".sev-bottom-trash").removeClass("sev-bottom-trash-drag")
        $(".sev-left-door").removeClass("sev-left-door-active")
        $(".sev-right-door").removeClass("sev-right-door-active")
    }
});



//NEW CODE - DRAGGABLE TO TRASH
$("#trash").droppable({
    drop: function (event, ui) {
        console.log(ui.draggable[0].classList[0])
        window.open("https://" + ui.draggable[0].classList[0] + "/", "_blank")
        // Launch URL HERE

        // ui.draggable.remove();

    },
});

