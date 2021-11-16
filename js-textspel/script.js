
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
let talkToChief = false;
let ogre = {seen: false, hp: 100,};

let override = false;
let story = document.querySelector("#story");
let talkToBlacksmith = false;


const field = [
    ['W', 'W', 'W', 'W', 'G', 'W', 'W', 'W', 'W'],
    ['F', 'F', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
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
        }if (x-1 == 1 && y == 4 || y == 5) {
            story.innerHTML= "The villages walls hinder you from going that way. You will need to find another way in. ";
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
    story.innerHTML= "You are in a forest! ";
            
            break;
        case path:
    story.innerHTML= "You are on a path! ";
            
            break;
        case pathCrossing:
    story.innerHTML= "You have come upon a crossing! ";
            
            break;
        case pathDeadEnd:
    story.innerHTML= "You have come upon a dead end surrounded by a swamp. You see an ogre to the east.";
            
            break;
        case villageEntrance:
    story.innerHTML= "You have come upon a village! Maybe you could find someone to ask for help.";
            
            break;
        case village:
    story.innerHTML= "You can't find anyone in the village. It may be abandoned.";
            
            break;
        case villageBlacksmith:
            blacksmith();
            
            break;
        case villageChief:
            chief();
            
            break;
        case swamp:
    story.innerHTML= "You are in a swamp!";
            
            break;
        case ogre:
            neoTheOgre();
            
            break;
        case gate:
            wallGate();    

            break;
        case wall:
    story.innerHTML= "You find yourself at a giant wall spanning as far as the eye can see. Maybe there is a gate somewhere?";
            
            break;
        default:  
            break;
    }
    
}

function blacksmith(){
    if (!talkToChief) {
        if (!talkToBlacksmith) {
            story.innerHTML= "Hello stranger, I am the village blacksmith and you should talk to the village chief. Until you have I can't help you.";
            talkToBlacksmith = true;
        }else{
            story.innerHTML= "You again?! I told you to talk to the village chief now bugger off I have work to do."
        }
    }
    else{
        if (talkToBlacksmith) {
            story.innerHTML = "I heard you talked to the chief and he told me to help you with whatever you need";
        } else {
            story.innerHTML = "Hello stranger, I am the village blacksmith the chief told me to help you with whatever you need";
            talkToBlacksmith=true;
        }
    }
}
function chief(){
    if (talkToChief && talkToBlacksmith) {
        story.innerHTML = 
    }
    if (!talkToChief) {
        story.innerHTML= "Hello stranger, welcome to our village. What brings you to our village?";
        talkToChief = true;
    }if (talkToBlacksmith) {
        story.innerHTML = "Hello, I've been waiting the blacksmith told me to expect a stranger to come by. ";
    }
}

function neoTheOgre(){
    story.innerHTML= "";
}

function wallGate(){
    story.innerHTML= "You have come upon a giant gate with walls stretching as far as the eye can see to the west and east";

}
