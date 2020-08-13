const specialReverse = ( targetString,targetChar) => targetString.split(" ").map(element=>element[0]==targetChar?element.split("").reverse().join(""):element).join(" ")

