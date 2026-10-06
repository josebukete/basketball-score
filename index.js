let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function updateStyles(){

    guestScore.classList.remove("winner");
    guestScore.classList.remove("draw");
    homeScore.classList.remove("draw");
    homeScore.classList.remove("winner");

    if (guestPoints > homePoints){
    guestScore.classList.add("winner");
    }
    if (guestPoints < homePoints){
    homeScore.classList.add("winner");
    }
    if (guestPoints == homePoints && guestPoints != 0 && homePoints != 0){
    homeScore.classList.add("draw");
    guestScore.classList.add("draw");
}
}

let homePoints = 0;
let guestPoints = 0;

function homeOne(){
    homePoints+=1;
    homeScore.textContent = homePoints;
    updateStyles();
}
function homeTwo(){
    homePoints+=2;
    homeScore.textContent = homePoints;
    updateStyles();
}
function homeThree(){
    homePoints+=3;
    homeScore.textContent = homePoints;
    updateStyles();
}

function guestOne(){
    guestPoints+=1;
    guestScore.textContent = guestPoints;
    updateStyles();
}
function guestTwo(){
    guestPoints+=2;
    guestScore.textContent = guestPoints;
    updateStyles();
}
function guestThree(){
    guestPoints+=3;
    guestScore.textContent = guestPoints;
    updateStyles();
}

function reset(){
    guestPoints=0;
    homePoints=0;
    guestScore.textContent = guestPoints;
    homeScore.textContent = homePoints;
    updateStyles();
}

