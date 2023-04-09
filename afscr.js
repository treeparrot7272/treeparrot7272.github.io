//function for adding text to the first paragraph

//deifnes age and anticoagulation
let age_text = document.getElementById("age");
let age_box = document.getElementById("ageBox");
let anticoag_text = document.getElementById("acoag")
let anticoag_box = document.getElementById("anticoagulation")

//radio button vars
let gender_text = document.getElementById("gender_text");
let gender_radio = document.querySelectorAll('input[name="gender_radio"]');


//listener to update text
document.addEventListener("click", updateText);


//date box
let date_box = document.getElementById("admit_date");
let date_text = document.getElementById("admit_date_text")
let today = new Date();

function ShowHideDiv() {
    var dvCardio = document.getElementById("dvCardio");
    dvCardio.style.display = chkCardio.checked ? "block" : "none";
}


function updateText(){
    age_text.innerHTML = age_box.value;
    let modifier = 1000 * 3600 * 24
    for (var i=0; i < gender_radio.length; i++) {
        if (gender_radio[i].checked) {
            gender_text.innerHTML = gender_radio[i].value;
        }
    };
    date_text.innerHTML = date_box.value + `. Patient has been admitted for ` + `${Math.floor((today - date_box.valueAsNumber)/modifier)} days.`;
    ;
};

