/*
70 px from top - header bottom

58 px from bottom - footer top

gsap.registerPlugin(ScrollTrigger);
gsap.from(".content", {
    scrollTrigger: {
        trigger: ".content",
        toggleActions: "restart pause reverse pause",
        start: "middle 70px",
        end:"bottom 70px",
        markers: true
    },
    y:"-100%",
    ease:"none",
    duration: 3

});

gsap.from("#about", {
    scrollTrigger: {
        trigger: ".headshot",
        toggleActions: "restart pause reverse pause",
        start: "top bottom",
        end:"top center",
        scrub: 2,
        markers: false,
    },
    x:"-100%",
    ease:"none",
    duration: 0.5

});
*/
AOS.init({
    startEvent: 'load'
})
// get modularized html file
function loadPage(pageURL) {
    if (document.getElementById("Content").innerHTML){ // we've checked a page after website intro
        if (document.getElementById("Content").classList.contains("animate-content_intro")){ // not the first page we've seen
            document.getElementById('Content').classList.remove("animate-content_intro")
            document.getElementById('Content').classList.add("animate-content_outro")
        }
        else { //animate-startup_intro, the first page we've seen after website intro
            document.getElementById('Content').classList.remove("animate-startup_intro")
            document.getElementById('Content').classList.add("animate-content_outro")
        }
        setTimeout(function(){introPage(pageURL)}, 1500) // equal to time spent on outro
    }
    else{
        introPage(pageURL)
    }
}
function introPage(pageURL) {
    if (document.getElementById("Content").classList.contains("animate-content_outro")){
        document.getElementById('Content').classList.remove("animate-content_outro")
        document.getElementById('Content').classList.add("animate-content_intro")
    }
    fetch(pageURL)
        .then(response => response.text())
        .then(html =>{
            document.getElementById('Content').innerHTML = html
        })
}