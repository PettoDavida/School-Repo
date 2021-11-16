
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
let axe = false;
let gateKey = false;
let talkToChief = false;
let ogre = { hp: 100, dead: false};

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
        if (y == 5 && x == 1) {
            alert("To move write move north, south, east or west. \nTo pick up an item write pickup (itemname)");
        }if (y == 3 && x == 8) {
            alert("To move write move north, south, east or west. \nTo hit Neo the Ogre write hit ogre with (weaponname) or just hit ogre");
        }else{
            alert("To move write move north, south, east or west.");
        }
    }if (action == "pickup sword") {
        if (y == 5 && x == 1) {
            sword=true;
        } else {
            return;
        }
    }if (action == "pickup axe") {
        if (y == 5 && x == 1) {
            axe=true;
        } else {
            return;
        }
    }if (action == "hit ogre") {
        if (y == 3 && x == 8) {
            let weapon = prompt("with what?")
            if (weapon == "sword") {
                hitOgre(15)
            }if (weapon == "axe") {
                hitOgre(25)
            }
        }
    
    }if (action == "hit ogre with sword") {
        if (y == 3 && x == 8) {
            hitOgre(15)
        }
    
    }if (action == "hit ogre with axe") {
        if (y == 3 && x == 8) {
            hitOgre(25)
        }
    
    }
}

function hitOgre(value) {
    ogre.hp -= value;
            if (ogre.hp <= 0) {
                story.innerHTML = ("The ogre has died.<br> You see a key hanging from the dead ogres belt.")
                ogre.dead = true;
            }else{
            story.innerHTML = ("The ogre has " + ogre.hp.toString() + "HP left" )
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
        }else{
            story.innerHTML= "You again?! I told you to talk to the village chief now bugger off I have work to do."
        }
    }else{
        if (talkToBlacksmith) {
            story.innerHTML = "I heard you talked to the chief and he told me to get out my best weapons so that you could help slay Neo the Ogre.<br> What weapon would you like?<br> *on the table you find a pristine looking sword and a battle hardened battle-axe*";
        } else {
            story.innerHTML = "Stranger! I've been expecting you.<br> The chief told me to get out my best weapons so that you could help slay Neo the Ogre.<br> What weapon would you like?<br> *on the table you find a pristine looking sword and a battle hardened battle-axe*";
        }
    }


    talkToBlacksmith = true;
}

function chief(){
    if (talkToChief) {
        if (talkToBlacksmith) {
            story.innerHTML = "Come on go kill Neo the Ogre.";
        }else{
            story.innerHTML = "You should go talk to the blacksmith. I have told him to expect you.";
        }
    }else{
        if (talkToBlacksmith) {
            story.innerHTML = "Hello, I've been waiting the blacksmith told me to expect a stranger to come by. ";
        }else{
            story.innerHTML = "Welcome to our village stranger. As you may have seen our village has been abandoned. <br> This is because of Neo the Ogre that lives in the swamp to the west. If you would be willing to help I will have a message delivered to the blacksmith telling him to expect you.<br> He should be able to give you some sort of weapon.";
        }
    }
    talkToChief = true;
}

function getWeapon(){

    if (sword && axe) {
        return "sword and axe";    
    }if (sword) {
        return "sword";
    }if (axe) {
        return "axe";
    }
}

function neoTheOgre(){
    if (talkToChief) {
        if (sword || axe) {
            story.innerHTML= "As you approach Neo the hulking ogre you draw your " + getWeapon() + " getting ready to strike";
        }else{
            story.innerHTML= "You see Neo the hulking ogre you should probably go the other way";
        }
    }else{
        story.innerHTML = "You see a hulking ogre you should probably go the other way"
    }
    
}

function wallGate(){
    story.innerHTML= "You have come upon a giant gate with walls stretching as far as the eye can see to the west and east";
}
