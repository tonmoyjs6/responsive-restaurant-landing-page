
let count=0
let target=15

let interval=setInterval(()=>{
    count++
     let h1= document.getElementById("ex-heading");
       h1.innerText=count

       if(count==target){
            clearInterval(interval)
       }
    
},100)


let chefsCount=0
let ChefsTarget=50


let shefsInterval=setInterval(()=>{
    chefsCount++

    const exChefs=document.getElementById("ex-chefs")
    exChefs.innerText=chefsCount

    if(chefsCount==ChefsTarget){
        clearInterval(shefsInterval)
    }

},100)