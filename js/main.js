// Collapse Section
let allMenuButtons = document.querySelectorAll(".menu-group-container");
for(let i = 0; i < allMenuButtons.length; i++) {
    allMenuButtons[i].addEventListener("click", collapseSection);
}

function collapseSection() {
    // this.querySelector(".menu-items-container-hero").classList.add("expand-item");
    // this.querySelector(".menu-items-container-hero").classList.remove("collapse-item");
    this.querySelector(".menu-items-container-hero").classList.toggle("hidden");
    this.querySelector(".expand-button").classList.toggle("hidden");
    this.querySelector(".minus-button").classList.toggle("hidden");
}

// Food Smoothie Switch
let allMenuNavButtons = document.querySelectorAll(".menu-nav-item");
console.log(allMenuNavButtons[1].classList)
for(let i = 0; i < allMenuNavButtons.length; i++) {
    allMenuNavButtons[i].addEventListener("click", collapseMenu);
}

function collapseMenu() {
    let currentColor = this.querySelector("h4").style.color;
    console.log(this.querySelector("h4").style.color);
    console.log(currentColor)
    //editing underline
    for(let i = 0; i < allMenuNavButtons.length; i++) {
        if(allMenuNavButtons != this) {
            allMenuNavButtons[i].querySelector("h4").setAttribute("style", "color: rgb(109, 110, 112)");
            allMenuNavButtons[i].setAttribute("style","border-bottom: 0px");
        }
    }
    this.querySelector("h4").setAttribute("style", "color: #cf2127");
    this.setAttribute("style", "border-bottom: 2px solid #cf2127");

    //editing menu containers
    let allContainers = document.querySelectorAll(".menu-container");
    if(currentColor !== "rgb(207, 33, 39)") {
        for(let i = 0; i < allContainers.length; i++) {
            allContainers[i].classList.toggle("hidden")
        }
    }
}