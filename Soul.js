document.addEventListener('DOMContentLoaded', function () {
    let expression = ""; 
    let inputField = document.querySelector('.input');
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let buttonText = this.textContent;
            if (buttonText === '=') {
                    expression = eval(expression);
                    inputField.value = expression;
            } else if (buttonText === 'AC') {
                expression = "";
                inputField.value = expression;
            } else if (buttonText === 'DL') {
                expression = expression.substring(0, expression.length - 1);
                inputField.value = expression;
            } else {
                expression += buttonText;
                inputField.value = expression;
            }
        });
    }
});
