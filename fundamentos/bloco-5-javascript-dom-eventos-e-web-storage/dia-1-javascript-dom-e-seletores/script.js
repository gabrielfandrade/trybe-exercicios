let header = document.querySelector("#header-container");
header.style.background = "limegreen";

let emergency = document.querySelector(".emergency-tasks");
emergency.style.background = "darksalmon";

let emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTitle.length; i++) {
    emergencyTitle[i].style.background = "blueviolet";
}

let noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.background = "yellow";

let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyTitle.length; i++) {
    noEmergencyTitle[i].style.background = "black";
}

let footer = document.querySelector("#footer-container");
footer.style.background = "darkgreen";