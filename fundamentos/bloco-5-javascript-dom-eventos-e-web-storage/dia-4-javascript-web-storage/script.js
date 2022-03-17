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

function fontSize(size) {
    let text = document.querySelectorAll('p');
    for (const key in text) {
        text[key].style.fontSize = size;
    }
    localStorage.setItem('txtsize', size);
}

function lineHeight(height) {
    let text = document.querySelectorAll('p');
    for (const key in text) {
        text[key].style.lineHeight = height;
    }
    localStorage.setItem('lineheight', height);
}