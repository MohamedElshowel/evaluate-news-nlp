function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = ''; // Remove previous results data.

    fetch(`http://localhost:8081/meaning?text=${formText}`)
        .then(res => res.json())
        .then(function (res) {
            resultsElement.appendChild(getResultsListElement(res))
        })
}

function getResultsListElement(data) {
    let dataListElement = document.createElement('ul');
    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'string') {
            const dataItem = document.createElement('li');
            dataItem.innerHTML = `<strong>${key}</strong>: ${data[key]}`;
            dataListElement.appendChild(dataItem);
        }
    });
    return dataListElement;
}

export { handleSubmit }
