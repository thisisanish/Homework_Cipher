const testJackpot = (outcome)=>{
   for(let i=1; i<outcome.length; i++){
        if(outcome[0]!==outcome[i]){
            return false
        }
    }
    return true
}
