
//create a checkbox list out of an array
function renderCheckboxList(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

        labels.forEach(label => {
        //step A, create the div
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        //step B, create the checkboxes
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

        //step D, update the results with an eventListener; only do this if not on main section
        //inputElement.addEventListener('click', updateResults);

        //step E, append the div to the container
        container.appendChild(divElement);
        

       
        

    })
    document.querySelector('main').append(container);
}

//radio buttons
function renderRadioButtons(labels, groupName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${groupName}Inputs`);

        labels.forEach(label => {
        //step A, create the div
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        //step B, create the checkboxes
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', groupName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);

        //step C, create the labels
        let labelElement = document.createElement('label')
        labelElement.setAttribute('for', label);
        labelElement.innerText = label
        divElement.appendChild(labelElement);

        //step D, update the results with an eventListener; only do this if not on main section
        //inputElement.addEventListener('click', updateResults);

        //step E, append the div to the container
        container.appendChild(divElement);
        

       
        

    })
    document.querySelector('main').append(container);
}

//create a dropdown menu out of an array
function createSelection(datasetHere) {
    //container
    let container = document.createElement('section')
    container.setAttribute('id', 'selectionSection')

    //dropdown field
    let selectElement = document.createElement('select')
    selectElement.setAttribute('id', `Choices`)
    selectElement.setAttribute('name', 'foo')

    //multiple options
    for (let i=0; i< datasetHere.length; i++) {
        let optionElement = document.createElement('option')
        optionElement.setAttribute('value', datasetHere[i])
        optionElement.innerText = datasetHere[i];

        //add option to selectElement
        selectElement.appendChild(optionElement);
    }
        

        

        //add selectElement to container
        container.appendChild(selectElement);
    
    //selectElement.addEventListener('click', updateResults)
    //add container to webpage
    document.querySelector('main').append(container);
}

//create a textbox input
function createTextInput(nameOfBox) {
    //container
    let container = document.createElement('text')
    container.setAttribute('id', `${nameOfBox}TextBoxContainer`)

    //the Textbox
    let txtbx = document.createElement('input');
    txtbx.setAttribute('type', 'text')
    txtbx.setAttribute('id', `${nameOfBox}TextBox`)

    //the label
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', `${nameOfBox}TextBox`)
    labelElement.innerText = nameOfBox + `  `;
    container.appendChild(labelElement);

    //append to container
    container.appendChild(txtbx);

    document.querySelector('main').append(container)
    

}

export {createSelection, renderCheckboxList, createTextInput, renderRadioButtons}