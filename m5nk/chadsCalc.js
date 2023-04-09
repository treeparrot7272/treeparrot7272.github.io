import { riskFactors, annualStrokeRisk, anticoagulation } from "./DataSets/chadsScoreData.js";

import { renderCheckboxList, createSelection, createTextInput } from "./StructureBuilders/renderInputs.js";

document.addEventListener('click', updateResults);

renderCheckboxList(riskFactors, 'CHADS');

createSelection(anticoagulation)




//create a checkbox list out of an array

function updateResults() {
    //set chadsScore variable
    let chadsScore = 0

    //tabulate what has been scored
    const riskChosen = document.querySelectorAll("input[name='CHADS']:checked");
    riskChosen.forEach(risks => { chadsScore += 1});
    
    //formulate message
    let message = ''
    //create message with each selection, then add a comma
    riskChosen.forEach(risks => {
        message += risks.value + ', '    })
        //add a period to the end, allows for regex
    message += '.' 
    

    //take out last , and put in period
    message = message.replace(/,\s\./i, '.')
    if (riskChosen.length > 1) {message = message.replace(/\w+\./, 'and $&')}
    
    let chadsAdvice = ''
    //calculate chads advice
    if (chadsScore <= 4) {
        chadsAdvice = `Without anticoagulation, annual risk of stroke is ${annualStrokeRisk[chadsScore]['noTx']}%. With therapy, this will come down to  ${annualStrokeRisk[chadsScore]['warfarin']}%.`
    } else {
        chadsAdvice = `Given that CHADS score is greater than 4, an annual overall risk of stroke and improvement form anticoagulation are not robustly clear in the literature. However, we know that for a CHADS score of 4 without anticoagulation, annual risk of stroke is ${annualStrokeRisk[4]['noTx']}%. With therapy, this will come down to  ${annualStrokeRisk[4]['warfarin']}%.`
    }

    
    
    
    //add extra point if stroke is the last one
    if (riskChosen[riskChosen.length-1].value === 'Stroke') { chadsScore += 1}

    //render nothing if nothing is selected
    if (!riskChosen) {return; }

    //render choice onto the screen in the chadsScore id area and CHADS score
    document.getElementById("chadsScore").innerText = `Patient has risk factors of ${message} This pertains to a CHADS score of ${chadsScore}. ${chadsAdvice}`

    document.getElementById("pmhxFormat").innerText = `Atrial Fibrillation: \r -----CHADS: ${chadsScore} \r -----${document.getElementById('Choices').value}`
}

