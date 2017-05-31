function solution(str){
   const chunks = [];
   
   for (var i = 0; i < str.length; i+=2) {
    const subStr = str.substring(i, i + 2);
    const pairChar = subStr.length >= 2 ? subStr : subStr + '_';
    chunks.push(pairChar);
   }
   return chunks;
}