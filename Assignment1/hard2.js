const numInStr=(list)=>list.filter((element)=>{
        for(let i = 0; i<= 9; i++){
            if(element.includes([i])){
                return element
            }
        }
    })



console.log(numInStr (["1a", "a", "2b", "b"]))
console.log(numInStr (["abc", "abc10"]))
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr (["this is a test", "test1"]))
