const addUp = (num) => (num===0)?  0 : num +  addUp(num-1)
    
// Output
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));