const testJackpot = (outcome)=>{
   for(let i=1; i<outcome.length; i++){
        if(outcome[0]!==outcome[i]){
            return false
        }
    }
    return true
}


console.log(testJackpot (["@", "@", "@", "@"]) )
console.log(testJackpot (["abc", "abc", "abc", "abc"]) )
console.log(testJackpot (["SS", "SS", "SS", "SS"]) )
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]) )
console.log(testJackpot (["SS", "SS", "SS", "Ss"]) )
