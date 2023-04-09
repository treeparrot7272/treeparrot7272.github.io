
const myPt = {
    age: "",
    afiType: "",
    ejectF: ""
}
/*
let slider = document.getElementById("ef");
let sliderOutput = document.getElementById("output");


sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
    myPt.ejectF = this.value;
}

*/
//variables for age
let age_box = document.getElementById("age_box");
let age_printout = document.getElementById("age_printout");
//test button; i forget what it does now
let theButton = document.querySelector("#GenButt");
let afiRoRp0 = document.getElementById("RoRp0");
//variables to hide/show afi part
let afInputBox = document.getElementById("aFinputBox");
let aFHeading = document.getElementById("aFinputHeading");
//variables to hide/show CHF part
let chfInputHeading = document.getElementById("chfInputHeading");
let chfInputBox = document.getElementById("chfInputBox");


///hide show function
/*
function revealOrNot(thingy) {
    var x = thingy;
    if (x.style.display == "none") {
        x.style.display = "block"; 
    } else {
        x.style.display = "none";
    }
}
*/

function updateAge(){
    age_printout.innerHTML = document.getElementById(age_box).value;
};

//updates age 
age_box.addEventListener("keyup", updateAge);

//clicking on various things and making reveal changes
/* 
theButton.addEventListener("click", (e) => {
   revealOrNot(jsPrintout);
});
aFHeading.addEventListener("click", (e) => {
    revealOrNot(afInputBox);
});
chfInputHeading.addEventListener("click", (e) => {
    revealOrNot(chfInputBox);
})

*/