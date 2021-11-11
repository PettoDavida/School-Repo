/*console.log("Maximilian Widman");

let answer = prompt("Vart bor du?");

alert(answer);

let one = parseInt(prompt("Nummer 1"));
let two = parseInt(prompt("Nummer 2"));

let three = one + two;

alert(three);


let favoriteColor = prompt("Vad är din favorit färg?");

function color(){
    console.log(favoriteColor);
}

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;

    alert(fullName);
}

fullName("Maximilian", "Widman");*/

function changeText(text){
    let h1 = document.getElementById("h1");

    h1.innerText = text;
}

function changeBackground(){
    let divOne = document.getElementById("one");
    let divTwo = document.getElementById("two");
    let divOneh3 = document.getElementById("divOneh3");
    let divTwoh3 = document.getElementById("divTwoh3");

    const randomBgOne = Math.floor(Math.random()*16777215).toString(16);
    const randomBgTwo = Math.floor(Math.random()*16777215).toString(16);

    divOne.style.backgroundColor = "#" + randomBgOne;
    divTwo.style.backgroundColor = "#" + randomBgTwo;

    divOneh3.innerText = "#" + randomBgOne;
    divTwoh3.innerText = "#" + randomBgTwo;
}
