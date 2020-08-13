const replaceVowel = (target)=> Array.from(target).map((element)=>{
        switch(element){
            case "a":
                return  "1"
            case "e":
                return  "2"
            case "i":
                return  "3"
            case "o":
                return  "4"
            case "u":
                return  "5"
            default:
                return element
        }
    }).join("")   

