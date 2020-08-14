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



// output

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log('the answer in the example is wrong. i was = 3 but its i in the example');
console.log(replaceVowel("khandbari"));