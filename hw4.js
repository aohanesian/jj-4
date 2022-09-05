`use strict`;

let operation = prompt(`Choose:
add
sub
mult
div`);
let a = +prompt(`Enter 1st number`);
let b = +prompt(`Enter 2nd number`);

function sum(a, b) {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
}

function sub(a, b) {
    const result = a - b;
    console.log(`${a} - ${b} = ${result}`);
}

function mult(a, b) {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);
}

function div(a, b) {
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);
}

switch (operation) {
    case 'add':
        sum(a, b);
        break;
    case 'sub':
        sub(a, b);
        break;
    case 'mult':
        mult(a, b);
        break;
    case 'div':
        div(a, b);
        break;
    default:
        console.log(`Error`);
}