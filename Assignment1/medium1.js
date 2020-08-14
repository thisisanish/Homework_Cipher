const specialReverse = ( targetString,targetChar) => targetString.split(" ").map(element=>element[0]==targetChar?element.split("").reverse().join(""):element).join(" ")

//output

console.log(specialReverse("word searches are super fun","s"));
console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("peter piper picked pickled peppers","p"));
