const myPt = {
            cirrhosis: {
                etiology: false,
                furosemide: false,
                spironolactone: false,
                varices: false
        }
    
}


//add etiologies to dropdown
let etiologyArray = ['Alcohol', 'Viral', 'Autoimmune', 'Metabolic', 'Biliary', 'Vascular', 'NAFLD', 'Medication'];
let etiologies = ""
for(let i = 0; i<etiologyArray.length; i++) {
    etiologies += "<option value=" + etiologyArray[i] + ">" +  etiologyArray[i] + "</option>";
};
document.getElementById("cirrhosisEtiologyDropdown").innerHTML = etiologies; 

const ptWriteup = {
    cirrhosisWritten: `The patient has ${myPt.cirrhosis.etiology}`
}

//get the dropdown box

let etiologyBox = document.getElementById("cirrhosisEtiologyDropdown");


function updateText() {
    myPt.cirrhosis.etiology = etiologyBox.value;
    document.getElementById("cirrhosisWriteup").innerHTML = `Cirrhosis: <br> &nbsp&nbsp&nbsp&nbsp&nbsp Etiology: ${myPt.cirrhosis.etiology}`; 
}; 


document.addEventListener("click", updateText);

