import {createTextInput, renderRadioButtons } from "./StructureBuilders/renderInputs.js"
let data = ['firstName', 'lastName', 'familyName', 'familyRelation', 'minutes']

data.forEach(title => {
    createTextInput(title);
})
renderRadioButtons(['Patient Present', 'Patient not Present'], 'presenceOfPatient')


function createButton(whatSays, whatCalled, whatDoes){
    let container = document.createElement('section')
    container.setAttribute('id', `${whatCalled}ButtonContainer`)

    let buttonElement = document.createElement('button');
    
    buttonElement.setAttribute('id', `${whatCalled}Button`)
    buttonElement.innerHTML = whatSays
    buttonElement.addEventListener('click', whatDoes)

    container.appendChild(buttonElement)

    document.querySelector('main').append(container)
}

createButton('Update Results', 'ResultButton', updateResults)



let firstName = document.getElementById('firstNameTextBox');
let familyName = document.getElementById('familyNameTextBox');
let familyRelation = document.getElementById('familyRelationTextBox');
let totalTime = document.getElementById('minutesTextBox');



    function updateResults(){ 
    let discussionVariations = [`I was able to speak to ${firstName.value} and their ${familyRelation.value} ${familyName.value}. I provided an update on their care and plan going forward. 
        Total time of our conversation was ${totalTime.value} minutes.`, `During our ${totalTime.value}-minute conversation, I had the opportunity to update ${firstName.value} and their ${familyRelation.value} ${familyName.value} on their care and the plan for moving forward.`, `In a ${totalTime.value}-minute conversation, I updated both ${firstName.value} and their ${familyRelation.value} ${familyName.value} regarding their care and the plan for the future.`, `In a ${totalTime.value}-minute conversation, I provided an update on the care and plan for ${firstName.value} and their ${familyRelation.value} ${familyName.value}.`]

    let textPlace = document.getElementById('textArea')
    let randomNumber = Math.floor(Math.random()*4)
    textPlace.innerText = discussionVariations[randomNumber]
    };