const backBt = document.querySelector('.fieldset_controls .back')
const nextBt = document.querySelector('.fieldset_controls .next')

let formPosition = 0;

const formFieldsets = document.querySelectorAll('.contact .content > fieldset')

formFieldsets[formPosition].classList.add('visible')

const lastFieldPos = formFieldsets.length - 1

const typeOfCleaningInput = document.getElementById('cleaningService')
const regularCleaningHighlights = document.querySelector('.contact .highlights')
let showingHighlights = false;

typeOfCleaningInput.addEventListener('change', function(event) {
    if(showingHighlights == false) {
        if(typeOfCleaningInput.value == 'Regular Domestic Cleaning') {
            regularCleaningHighlights.classList.add('show')
            showingHighlights = true;
        } else {
            return;
        }
    } else {
        regularCleaningHighlights.classList.remove('show')
        showingHighlights = false;
    }
})

function checkFieldsets(direction) {
    if (direction == 'forwards') {
    if (!formFieldsets[lastFieldPos].classList.contains('visible')) {
        backBt.classList.remove('disabled');
        formFieldsets[formPosition].classList.remove('visible');
        formPosition++;
        formFieldsets[formPosition].classList.add('visible');

        if (formPosition === lastFieldPos) {
        nextBt.classList.add('disabled');
        }
    }
    } else if (direction == 'backwards') {
    if (!formFieldsets[0].classList.contains('visible')) {
        nextBt.classList.remove('disabled');
        formFieldsets[formPosition].classList.remove('visible');
        formPosition--;
        formFieldsets[formPosition].classList.add('visible');

        if (formPosition === 0) {
            backBt.classList.add('disabled');
        }
    }
    }
}

const firstFields = document.querySelectorAll('.contact fieldset:first-child input, .contact fieldset:first-child select')

const submitBt = document.querySelector('#get-a-quote .cta')

for(let i=0;i<firstFields.length;i++) {
    firstFields[i].addEventListener('input', function() {
        const allFilled = Array.from(firstFields).every(input => input.value.trim() !== '');

        if (allFilled) {
            submitBt.classList.remove('disabled')
        } else {
            submitBt.classList.add('disabled')
        }
    })
}

const backwardsBt = document.querySelector('button.back')
const forwardsBt = document.querySelector('button.next')

backwardsBt.addEventListener('click', function() {
    checkFieldsets('backwards')
})

forwardsBt.addEventListener('click', function() {
    checkFieldsets('forwards')
})