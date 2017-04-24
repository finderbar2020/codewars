function race(v1, v2, g) {
  if(v2 > v1) {
    const catchCal = ( g / (v2 - v1)) * 60 * 60;
    return [
       Math.floor((catchCal / 60) / 60), // gethours
       Math.floor((catchCal / 60) % 60), // getminutes
       Math.floor(catchCal % 60) // seconds
    ]
  }
  return null;
}
