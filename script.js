
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




// api for food menu
let mainContainer=document.getElementById("main-items")

const lunch=document.getElementById("lunch")


lunch.addEventListener("click",()=>{
    mainContainer.innerHTML=""


    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(values=>values.json())
    .then(values=>{
        const realValues=values.categories.slice(0,6)
         const mainItems=document.getElementById("main-items")
        realValues.map((element)=>{
            console.log(element);
   

            // const menuItems=document.getElementById("items")
            const div=document.createElement("div")
            div.id="Items"

            mainItems.appendChild(div)
            let image=document.createElement("img")
            image.src=element.strCategoryThumb
            div.appendChild(image)
            let h4=document.createElement("h4")
            h4.innerText=`${element.strCategoryDescription.slice(0,40)}`
            div.appendChild(h4)
            let p=document.createElement("p")
            p.innerText="$115"
            p.style.color="#E1AD01"
            p.style.fontSize="40px"
            div.appendChild(p)






            
            
            

        })
    })
   
  

   
})


let dinner=document.getElementById("dinner")

dinner.addEventListener("click",()=>{
    mainContainer.innerHTML=""


    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(values=>values.json())
    .then(values=>{
        const realValues=values.categories.slice(6,12)
         const mainItems=document.getElementById("main-items")
        realValues.map((element)=>{
            console.log(element);
   

            // const menuItems=document.getElementById("items")
            const div=document.createElement("div")
            div.id="Items"

            mainItems.appendChild(div)
            let image=document.createElement("img")
            image.src=element.strCategoryThumb
            div.appendChild(image)
            let h4=document.createElement("h4")
            h4.innerText=`${element.strCategoryDescription.slice(0,40)}`
            div.appendChild(h4)
            let p=document.createElement("p")
            p.innerText="$115"
            p.style.color="#E1AD01"
            p.style.fontSize="40px"
            div.appendChild(p)






            
            
            

        })
    })
   
  

   
})

