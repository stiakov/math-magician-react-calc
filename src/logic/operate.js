import Big from 'big-js';

export const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '–':
      return substract(num1, num2);
    case 'x':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return percent(num1, num2);
    case '+/-':
      return reverse(num1);
    default:
      break;
  }
}

const add = (num1, num2) => Big(num1).plus(num2).toString();
const substract = (num1, num2) => Big(num1).minus(num2).toString();
const multiply = (num1, num2) => Big(num1).times(num2).toString();
const divide = (num1, num2) => (num2 == 0) ? 'ERROR' : Big(num1).div(num2).toString();
const percent = (num1, num2) => Big(num1).div(100).times(num2).toString();
const reverse = (num1) => Big(num1).times(-1).toString();
