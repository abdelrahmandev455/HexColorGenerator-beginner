let btn = document.querySelector(".btn")
let con = document.querySelector('.con')
let copyright = document.querySelector('.copyright')
let codesnippet = document.querySelector('.code')

const hexColors = {
  hex1: ["#E2DB1F", "#D9B943", "#D19768", "#C8768C", "#BF54B0", "#B732D5", "#AE10F9"],

  hex2: ["#FFA8BD", "#DB93C0", "#B67EC3", "#9269C6", "#6D54C9", "#493FCC", "#242ACF"],
  
  hex3 : ["#05C9F9","#2AD1D4","#50D8AF","#75E08A","#9AE765","#C0EF40","#E5F61B"],
  
  hex4: ["#F8997D","#EC887A","#DF7778","#D36675","#C65572","#BA4470","#AD336D"],
  
  hex5 : ["#0AB6F8","#309FDD","#5688C1","#7C72A6","#A15B8A","#C7446F","#ED2D53"]
}


function random(){
  let keys = hexColors[Object.keys(hexColors)[Math.floor(Math.random()*Object.keys(hexColors).length)]]

  let keysstring = keys.toString()
  
  con.style.backgroundImage = `linear-gradient(to right , ${keysstring})`
  
  codesnippet.innerText = `linear-gradient(to right , ${keysstring})`
}

let interval = setInterval(random,1000)

btn.onclick = () => {
  clearInterval(interval)
  random()
}

//copyright
copyright.onclick = () => {
  alert("All rights reseved by Abdelrahman \n Hireme: abdelrahmanshaheen2007@gmail.com")
}
