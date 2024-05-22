// system no.1
// directly apply on html element

// system no.2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// system no.3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue();

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// system no.4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// system no.5
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// system no.6
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
