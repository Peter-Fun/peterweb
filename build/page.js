// set up page visibility by clicking on section links
function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');
}

// get modularized html file
function loadPage(pageURL) {
    fetch(pageURL)
        .then(response => response.text())
        .then(html =>{
            document.getElementById('Content').innerHTML = html;
        })
    }