
const forest = 'F';
const path = 'P';
const pathCrossing = 'Pc';
const pathCrossingEast = 'PcE';
const pathCrossingWest = 'PcW';
const village = 'V';
const swamp = 'S';
const gate = 'G';
const wall = 'W';
let sword = false;
let gateKey = false;
let ogre = {seen: false, hp: 100,};



const field = [
    ['W', 'W', 'W', 'W', 'G', 'W', 'W', 'W', 'W'],
    ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'],
    ['F', 'F', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
    ['F', 'PcW', 'P', 'P', 'Pc', 'P', 'P', 'PcE', 'O'],
    ['F', 'V', 'F', 'F', 'P', 'F', 'F', 'S', 'S'],
    ['F', 'F', 'F', 'F', 'P', 'F', 'F', 'F', 'F'],
]


let y = 9;
let x = 5;

function action(){
    
    let action = document.querySelector("#input").value;
    
    if (action == "move north") {
        if (y <= 0) {
            break;
        }else{
            y--
        }
    }if (action == "move south") {
        if (y >= 5) {
            break;
        }else{
            y++
        }
    }if (action == "move east") {
        if (x >= 8) {
            break;
        }else{
            x++
        }
    }if (action == "move west") {
        if (x <= 0) {
            break;
        }else{
            x--
        }
    }if(action == "hint"){
        alert("To move write move north, south, east or west. \nTo pick up an item write pickup (itemname)");
    }

    document.querySelector("#story").innerHTML = field[y][x];
}

function checkSquare(){

    if (field[y][x] == squareForest) {
        
    }
    if (field[y][x] == squarePath) {
        
    }
    if (field[y][x] == 0) {
        
    }
    if (field[y][x] == 0) {
        
    }
    if (field[y][x] == 0) {
        
    }
}