function bgColor(color) {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
    localStorage.setItem('bgcolor', color);
}

function textColor(color) {
    let text = document.querySelectorAll('p');
    for (const key in text) {
        text[key].style.color = color;
    }
    localStorage.setItem('txtcolor', color);
}

