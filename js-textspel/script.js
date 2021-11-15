
const forest = 'F';
const path = 'P';
const pathCrossing = 'Pc';
const pathDeadEnd = 'PdE';
const villageEntrance = 'vE';
const village = 'V';
const villageBlacksmith = 'vB';
const villageChief = 'vC';
const swamp = 'S';
const gate = 'G';
const wall = 'W';
let sword = false;
let gateKey = false;
let ogre = {seen: false, hp: 100,};

let override = false;



const field = [
    ['W', 'W', 'W', 'W', 'G', 'W', 'W', 'W', 'W'],
    ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'S', 'S'],
    ['F', 'F', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
    ['V', 'vE', 'P', 'P', 'Pc', 'P', 'P', 'PdE', 'O'],
    ['V', 'vC', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
    ['V', 'vB', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
]


let y = 5;
let x = 4;

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 'Enter') {
        action();
        checkSquare();
        return;
    }
}, false);

function action(){
    
    let action = document.querySelector("#input").value;
    
    if (action == "move north") {
        if (y <= 0) {
            return;
        }else{
            y--
        }
    }if (action == "move south") {
        if (y >= 5) {
            return;
        }else{
            y++
        }
    }if (action == "move east") {
        if (x >= 8) {
            return;
        }else{
            x++
        }
    }if (action == "move west") {
        if (x <= 0) {
            return;
        }if (x-1 == 1) {
            document.querySelector("#story").innerHTML = "The villages walls hinder you from going that way. You will need to find another way in. <br> What would you like to do?";
            override = true;
        }
        else{
            x--
        }
    }if(action == "hint"){
        alert("To move write move north, south, east or west. \nTo pick up an item write pickup (itemname)");
    }

}

function checkSquare(){
    if (override) {
        override = false;
        return;
    }

    switch (field[y][x]) {
        case forest:
    document.querySelector("#story").innerHTML = "You are in a forest! <br> What would you like to do?";
            
            break;
        case path:
    document.querySelector("#story").innerHTML = "You are on a path! <br> What would you like to do?";
            
            break;
        case pathCrossing:
    document.querySelector("#story").innerHTML = "You have come upon a crossing! <br> What would you like to do?";
            
            break;
        case pathDeadEnd:
    document.querySelector("#story").innerHTML = "You have come upon a dead end surrounded by a swamp. You see an ogre to the east.<br> What would you like to do?";
            
            break;
        case villageEntrance:
    document.querySelector("#story").innerHTML = "You have come upon a village! Maybe you could find someone to ask for help.<br> What would you like to do?";
            
            break;
        case village:
    document.querySelector("#story").innerHTML = "You can't find anyone in the village. It may be abandoned.<br> What would you like to do?";
            
            break;
        case villageBlacksmith:
    document.querySelector("#story").innerHTML = "<br> What would you like to do?";
            
            break;
        case villageChief:
    document.querySelector("#story").innerHTML = "<br> What would you like to do?";
            
            break;
        case swamp:
    document.querySelector("#story").innerHTML = "You are in a swamp!<br> What would you like to do?";
            
            break;
        case ogre:
    document.querySelector("#story").innerHTML = "<br> What would you like to do?";
            
            break;
        case gate:
    document.querySelector("#story").innerHTML = "You have come upon a giant gate with walls stretching as far as the eye can see to the west and east<br> What would you like to do?";
            
            break;
        case wall:
    document.querySelector("#story").innerHTML = "You find yourself at a giant wall spanning as far as the eye can see. Maybe there is a gate somewhere?<br> What would you like to do?";
            
            break;
        default:
            break;
    }
    

}