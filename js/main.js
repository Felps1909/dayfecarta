const  redirecionarCarta = ()=>{
    document.querySelector(".carta-fechada").style.display = "none";
    document.querySelector(".carta-aberta").style.display = "flex";
    document.querySelector(".content-carta1").style.display = "flex";
  
}
const nxtMonth = ()=>{
   
    document.querySelector(".content-carta1").style.display = "none";
    document.querySelector(".content-carta2").style.display = "flex";
}
const nxtMonth2 = ()=>{
    
    document.querySelector(".content-carta2").style.display = "none";
    document.querySelector(".content-carta3").style.display = "flex";
}
const nxtMonth3 = ()=>{
    
    document.querySelector(".content-carta3").style.display = "none";
    document.querySelector(".content-carta4").style.display = "flex";
}

const prvMonth2 = ()=>{
    
    document.querySelector(".content-carta1").style.display = "flex";
    document.querySelector(".content-carta2").style.display = "none";
}
const prvMonth3 = ()=>{
    
    document.querySelector(".content-carta2").style.display = "flex";
    document.querySelector(".content-carta3").style.display = "none";
}
const prvMonth4 = ()=>{
    
    document.querySelector(".content-carta3").style.display = "flex";
    document.querySelector(".content-carta4").style.display = "none";
}
