const vertMirror = (str) => str.split('\n').map((val) => val.split('').reverse().join('')).join('\n');
const horMirror = (str) => str.split('\n').reverse().join('\n');
const oper = (fct, s) => fct(s);
