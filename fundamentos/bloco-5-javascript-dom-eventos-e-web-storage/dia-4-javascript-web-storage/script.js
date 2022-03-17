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

 let fontColorButtons = document.querySelectorAll("#font-color>button")
 for (let index = 0; index < fontColorButtons.length; index += 1) {
   fontColorButtons[index].addEventListener("click", function(event) {
    textColor(event.target.innerHTML)
   })
 }

 let fontSizeButtons = document.querySelectorAll("#font-size>button")
 for (let index = 0; index < fontSizeButtons.length; index += 1) {
   fontSizeButtons[index].addEventListener("click", function(event) {
    fontSize(event.target.innerHTML)
   })
 }

 let lineHeightButtons = document.querySelectorAll("#line-height>button")
 for (let index = 0; index < lineHeightButtons.length; index += 1) {
   lineHeightButtons[index].addEventListener("click", function(event) {
    lineHeight(event.target.innerHTML)
   })
 }

 let fontFamilyButtons = document.querySelectorAll("#font-family>button")
 for (let index = 0; index < fontFamilyButtons.length; index += 1) {
   fontFamilyButtons[index].addEventListener("click", function(event) {
    fontFamily(event.target.innerHTML)
   })
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