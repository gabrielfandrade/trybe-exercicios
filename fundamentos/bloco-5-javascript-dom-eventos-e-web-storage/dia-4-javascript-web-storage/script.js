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

function fontFamily(font) {
    let text = document.querySelectorAll('p');
    for (const key in text) {
        text[key].style.fontFamily = font;
    }
    localStorage.setItem('fontfamily', font);
}



function iniciar() {
    let backgroundColor = localStorage.getItem("bgcolor");
    if (backgroundColor) {
        bgColor(backgroundColor);
    }

    let fontColor = localStorage.getItem("txtcolor");
    if (fontColor) {
        textColor(fontColor);
    }

    let fontSize = localStorage.getItem("txtsize");
    if (fontSize) fontSize(fontSize);

    let lineHeight = localStorage.getItem("lineheight")
    if (lineHeight) lineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontfamily")
    if (fontFamily) fontFamily(fontFamily)
}

iniciar();