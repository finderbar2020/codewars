function vertMirror(strng) {
    return strng.split('\n').map((value) => Array.proptotype.reduce.call(value, (result, ch) => ch + result, ''));
}
function horMirror(strng) {
    return strng.reverse();
}
function oper(fct, s) {
   return fct(s);
}
