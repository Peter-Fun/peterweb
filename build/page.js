// get modularized html file
function loadPage(pageURL) {
    fetch(pageURL)
        .then(response => response.text())
        .then(html =>{
            document.getElementById('Content').innerHTML = html;
        })
    }