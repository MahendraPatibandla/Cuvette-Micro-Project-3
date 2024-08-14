const calculateSection = document.querySelector('.calculate_section');
const evaluateInput = document.querySelector('.evaluate_section input');

calculateSection.addEventListener('click', (event) => {
    
    if (event.target.tagName === "BUTTON") {

        let showInInput = evaluateInput.value;

        if(event.target.textContent.toLowerCase() === 'reset') {
            showInInput = "";
        }
        else if(event.target.textContent.toLowerCase() === '=') {
            const result = eval(showInInput)
            showInInput = result;
        }
        else if (event.target.textContent.toLowerCase() === 'del') {
            showInInput = showInInput.slice(0, -1);
        }
        else {
            showInInput += event.target.textContent;
        }

        evaluateInput.value = showInInput;

    }

});
