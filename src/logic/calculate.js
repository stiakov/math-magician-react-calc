import { operate } from './operate';

export const calculate = ({ total, next, operation }, btnName) => {
  switch (btnName) {
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      break;

    case '+/-':
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = btnName;
      break;

    case '%':
      total = operation ? operate(total, next, operation) : next;
      operation = btnName;
      break;

    case '=':
      total = operation ? operate(total, next, operation) : next;
      next = total;
      operation = '';
      break;

    default:
      total = '';
      break;
  }
}