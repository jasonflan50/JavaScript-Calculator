// This JS file was made to be used with the JavaScript-Calculator program


function addition(x, y) { return x + y;}

function subtraction(x, y) {return x - y;}

function multiplication(x, y) {return x * y;}

function division(x, y) {return x / y;}

// This function will decide which operation to perform
function operate(x, y, operator) {
    return (operator === '+') ? addition(x,y):
    (operator === '-') ? subtraction(x, y):
    (operator === 'x') ? multiplication(x, y):
    (operator === '/') ? division(x, y): null;
}

// provides css trasnformation for button clicking
function blur(){

}