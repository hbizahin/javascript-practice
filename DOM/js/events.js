// system no.1
// directly apply on html element

// system no.2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// system no.3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue();

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}