function add (){
    
    a = document.querySelector("#a").value
    b = document.querySelector("#b").value
    c = document.querySelector("#c")
   
    console.log(a + " " + b)
    a = parseInt(a)
    b = parseInt(b)
    
    c.innerHTML = (a+b)
}

function sub (){
    
    a = document.querySelector("#a").value
    b = document.querySelector("#b").value
    c = document.querySelector("#c")
   
    console.log(a + " " + b)
    a = parseInt(a)
    b = parseInt(b)
    
    c.innerHTML = (a-b)
}
function mul (){
    
    a = document.querySelector("#a").value
    b = document.querySelector("#b").value
    c = document.querySelector("#c")
   
    console.log(a + " " + b)
    a = parseInt(a)
    b = parseInt(b)
    
    c.innerHTML = (a*b)
}
function div (){
    
    a = document.querySelector("#a").value
    b = document.querySelector("#b").value
    c = document.querySelector("#c")
   
    console.log(a + " " + b)
    a = parseInt(a)
    b = parseInt(b)
    
    c.innerHTML = (a/b)
}
function mod (){
    
    a = document.querySelector("#a").value
    b = document.querySelector("#b").value
    c = document.querySelector("#c")
   
    console.log(a + " " + b)
    a = parseInt(a)
    b = parseInt(b)
    
    c.innerHTML = (a%b)
}