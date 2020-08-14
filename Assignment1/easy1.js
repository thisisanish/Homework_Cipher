const charCount= (unoChar, target)=>{
    let count = 0
    
    Array.from(target).forEach(element => {
        if (element===unoChar){
            count += 1
        }
    });
   
    return count
}

// Output

console.log(charCount("a","edabit"));
console.log(charCount("c", "Chambers of secret"));
console.log(charCount("b", "big fat bubble"));