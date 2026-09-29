const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const buttonText = button.textContent;

        if (button.classList.contains('limpar')) {
            currentExpression = '';
            display.value = '0';
            return;
        }

        if (button.classList.contains('igual')) {
            try {

                let result = eval(currentExpression);
                
                if (result === undefined || isNaN(result) || !isFinite(result)) {
                    display.value = 'Erro';
                    currentExpression = '';
                } else {
                    display.value = result;
                    currentExpression = result.toString();
                }
            } catch (erro) {
                display.value = 'Erro';
                currentExpression = '';
            }
            return;
        }

        if (currentExpression === '' && (buttonText === '0' || button.classList.contains('operacao'))) {

            return;
        }

        if (display.value === '0' && !button.classList.contains('operacao') && buttonText !== '.') {
            currentExpression = buttonText;
        } else {
            currentExpression += buttonText;
        }

        display.value = currentExpression;
    });
});