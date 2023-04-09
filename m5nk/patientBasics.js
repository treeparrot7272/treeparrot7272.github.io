import { createTextInput, renderRadioButtons } from './StructureBuilders/renderInputs.js'

document.addEventListener('click', updateResults)

//names
createTextInput('firstName');
let firstName = document.getElementById('firstNameTextBox')
createTextInput('lastName');
let lastName = document.getElementById('lastNameTextBox')

//age
createTextInput('age');
let age = document.getElementById('ageTextBox');

//gender
renderRadioButtons(['M', 'F'], 'gender');
//value gets drawn below, due to not being a static element


function updateResults() {
    
    let textPlace = document.getElementById('textArea')
    
    //get gender; evaluate live because checked nature?
    const gender = document.querySelector("input[name='gender']:checked");

    textPlace.innerText = `${firstName.value} ${lastName.value} is a ${age.value}${gender.value} who presented to hospital with `
}