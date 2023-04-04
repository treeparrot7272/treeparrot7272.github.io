import annualStrokeRisk from "./chadsScoreData.js";
let riskFactors = ['CHF','Hypertension', 'Age', 'Diabetes', 'Stroke']


renderRadioButtons(riskFactors, 'CHADS');

function renderRadioButtons(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

        labels.forEach(label => {
        //step A, create the div
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        //step B, create the radio buttons
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'checkbox');
        inputElement.setAttribute('name', groupName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);

        //step C, create the labels
        let labelElement = document.createElement('label')
        labelElement.setAttribute('for', label);
        labelElement.innerText = label
        divElement.appendChild(labelElement);

        //step D, update the results with an eventListener
        inputElement.addEventListener('click', updateResults);

        //step E, append the div to the container
        container.appendChild(divElement);
        

       
        

    })
    document.querySelector('main').prepend(container);
}

function updateResults() {

    //get variables
    //tabulate what has been scored
    const riskChosen = document.querySelectorAll("input[name='CHADS']:checked");
    let message = ''
    riskChosen.forEach(risks => {
        message += risks.value + ', '
        
    })
    
    //add a period to the end, allows for regex
    message += '.' 
    

    //take out last , and put in period
    //newMessage = message.replace(/, \./i, '.')
    //if (riskChosen.length > 1) {message = message.replace(/\w+\./, 'and $&')}
    
    

    //calculate chads score
    let chadsScore = 0
    riskChosen.forEach(risks => { chadsScore += 1});
    //add extra point if stroke is the last one
    if (riskChosen[riskChosen.length-1].value === 'Stroke') { chadsScore += 1}

    //render nothing if nothing is selected
    if (!riskChosen) {return; }

    //render choice onto the screen in the chadsScore id area and CHADS score
    document.getElementById("chadsScore").innerText = `Patient has risk factors of ${message} This pertains to a CHADS score of ${chadsScore}. Without anticoagulation, annual risk of stroke is ${annualStrokeRisk[chadsScore]['noTx']}%. With therapy, this will come down to  ${annualStrokeRisk[chadsScore]['warfarin']}%.`

    document.getElementById("pmhxFormat").innerText = `Atrial Fibrillation: \r -----CHADS: ${chadsScore}`
}


