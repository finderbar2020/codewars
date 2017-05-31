function spinWords(str) {
  return str.split(' ').map((val) => val.length >=5 ? val.split('').reverse('').join('') : val).join(' ');
}

