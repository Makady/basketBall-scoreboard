
let homePoints = 0
let guestPoints = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


homeScore.textContent = homePoints
guestScore.textContent = guestPoints

function home1(){
  
  homePoints+=1
  homeScore.textContent = homePoints
}
function home2(){
  
  homePoints+=2
  homeScore.textContent = homePoints
}
function home3(){
  
  homePoints+=3
  homeScore.textContent = homePoints
}

function guest1(){
  guestPoints +=1
  guestScore.textContent =guestPoints
}
function guest2(){
  guestPoints +=2
  guestScore.textContent =guestPoints
}
function guest3(){
  guestPoints +=3
  guestScore.textContent =guestPoints
}

function newGame(){
  guestPoints = 0
  homePoints = 0
  homeScore.textContent = homePoints
  guestScore.textContent =guestPoints
}