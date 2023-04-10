import { createTextInput, renderCheckboxList, renderRadioButtons } from './StructureBuilders/renderInputs.js'

import { cardinals } from './DataSets/cardinals.js';

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

//presentations
renderCheckboxList(cardinals, 'Presentations')


function updateResults() {
    
    let textPlace = document.getElementById('textArea')
    
    //get gender; evaluate live because checked nature?
    const gender = document.querySelector("input[name='gender']:checked");

    //cardinal pullout
    //tabulate what has been scored
    const presentation = document.querySelectorAll("input[name='Presentations']:checked");
        
    //formulate message
    let presentationMessage = ''
    //create message with each selection, then add a comma
    presentation.forEach(cardinalChosen => {
        presentationMessage += cardinalChosen.value + ', '    })
        //add a period to the end, allows for regex
    presentationMessage += '.' 
    

    //take out last , and put in period
    //presentationMessage = message.replace(/,\s\./i, '.')
    
    textPlace.innerText = `${firstName.value} ${lastName.value} is a ${age.value}${gender.value} who presented with ${presentationMessage}`
}