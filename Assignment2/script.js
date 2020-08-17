let productList = ["cup-cake","sweet","cake","donut"]

function showOnly(category){
    let all = document.getElementsByClassName(`card`)
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none"
    }
    
     let target = document.getElementsByClassName(`${category}`)
     for (let i = 0; i < target.length; i++) {
         target[i].style.display = "inline-block"
     }
}


function search(){
    let value = document.getElementById('search').value
   
    if (productList.includes(value)){
        showOnly(value)
    }
    
    else{
        
        showOnly("none")
        
    }
}