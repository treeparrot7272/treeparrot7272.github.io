import {createTextInput } from "./StructureBuilders/renderInputs.js"
let data = ['firstName', 'lastName', 'familyName', 'familyRelation', 'issueOfConcern', 'solutionToConcern']

data.forEach(title => {
    createTextInput(title);
})

createTextInput('minutes');

document.addEventListener('click', updateResults)

let firstName = document.getElementById('firstNameTextBox');
let lastName = document.getElementById('lastNameTextBox');
let familyName = document.getElementById('familyNameTextBox');
let familyRelation = document.getElementById('familyRelationTextBox');
let totalTime = document.getElementById('minutesTextBox');
let issueOfConcern = document.getElementById('issueOfConcernTextBox');
let solutionToConcern = document.getElementById('solutionToConcernTextBox');


    function updateResults(){ 
    let discussionVariations = [`I was able to speak to ${firstName.value} and their ${familyRelation.value} ${familyName.value}. I provided an update on their care and plan going forward. In particular, they had questions about ${issueOfConcern.value}. I let them know that  we will be ${solutionToConcern.value}.
        Total time of our conversation was ${totalTime.value} minutes.`, `During our ${totalTime.value}-minute conversation, I had the opportunity to update ${firstName.value} and their ${familyRelation.value} ${familyName.value} on their care and the plan for moving forward. They had some concerns about ${issueOfConcern.value}, but I reassured them that we plan to ${solutionToConcern.value}.`, `In a ${totalTime.value}-minute conversation, I updated both ${firstName.value} and their ${familyRelation.value} ${familyName.value} regarding their care and the plan for the future. They were specifically concerned about ${issueOfConcern.value} and I let them know we plan to ${solutionToConcern.value}.`, `In a ${totalTime.value}-minute conversation, I provided an update on the care and plan for ${firstName.value} and their ${familyRelation.value} ${familyName.value}. They had some questions and concerns about ${issueOfConcern.value}, but I was able to reassure them by outlining the solution we have in place to deal with this.`]

    let textPlace = document.getElementById('textArea')
    let randomNumber = Math.floor(Math.random()*4)
    textPlace.innerText = discussionVariations[randomNumber]
    };