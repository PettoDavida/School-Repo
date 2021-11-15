const field = [
    [01, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [02, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [03, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [04, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [05, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [06, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [07, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [08, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [09, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]

let y = 9;
let x = 5;

function action(){
    
    let action = document.querySelector("#input").value;
    
    if (action == "move north") {
        y--
    }if (action == "move south") {
        y++
    }if (action == "move east") {
        x++
    }if (action == "move west") {
        x--
    }if(action == "hint"){
        alert("To move write move north, south, east or west. To pick up an item write pickup (itemname)");
    }

    document.querySelector("#story").innerHTML = field[x,y];
}