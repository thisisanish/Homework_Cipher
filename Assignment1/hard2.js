const numInStr=(list)=>list.filter((element)=>{
        for(let i = 0; i<= 9; i++){
            if(element.includes([i])){
                return element
            }
        }
    })
