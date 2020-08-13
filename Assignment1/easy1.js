const charCount= (unoChar, target)=>{
    let count = 0
    
    Array.from(target).forEach(element => {
        if (element===unoChar){
            count += 1
        }
    });
    return count
}
