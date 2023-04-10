import {createTextInput } from "./StructureBuilders/renderInputs.js"
let data = ['firstName', 'lastName', 'familyName', 'familyRelation']

createTextInput('firstName')

let firstName = document.getElementById('firstNameTextBox')


document.addEventListener('click', updateResults)

function updateResults() {
    let simpleBlurb = [
        `Today, I had a discussion with ${firstName.value} and their family regarding their goals of care. They have expressed their willingness to opt for comfort care exclusively. During the conversation, I clarified that this would entail no further blood work, vital checks, or medical interventions. The patient and their family agreed to this approach, and I have modified the necessary orders and implemented comfort care orders accordingly.`,
    `Today I had a goals of care discussion with ${firstName.value} and family. They are agreeable to pursuing comfort care only. I expressed that this would mean no further blood work, vital checks or medical interventions. Patient and family agreed to this plan. I have changed the relevant orders and put comfort care orders in place.`,
    `I had a goals of care discussion today with the ${firstName.value} and their family, and they agreed to pursue comfort care only. I explained that this would involve no further medical interventions, blood work, or vital checks. Based on our conversation, I made the appropriate changes to the orders and established comfort care order.`]
    
    let textPlace = document.getElementById('textArea')
    let randomNumber = Math.floor(Math.random()*3)
    textPlace.innerText = simpleBlurb[randomNumber]



}

