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

let backgroundColorSelect = document.querySelector("#selected-background-color");
backgroundColorSelect.addEventListener('change', function () {
    bgColor(backgroundColorSelect.selectedOptions[0].value);
})

let fontColorSelect = document.querySelector("#selected-font-color")
fontColorSelect.addEventListener('change', function () {
    textColor(fontColorSelect.selectedOptions[0].value);
})

let fontSizeSelect = document.querySelector("#selected-font-size")
fontSizeSelect.addEventListener('change', function () {
    fontSize(fontSizeSelect.selectedOptions[0].value);
})

let lineHeightSelect = document.querySelector("#selected-line-height")
lineHeightSelect.addEventListener('change', function () {
    lineHeight(lineHeightSelect.selectedOptions[0].value);
})

let fontFamilySelect = document.querySelector("#selected-font-family")
fontFamilySelect.addEventListener('change', function () {
    fontFamily(fontFamilySelect.selectedOptions[0].value);
})

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