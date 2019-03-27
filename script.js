//Player1 e player2 points counter
let points = 0;
let points2 = 0;

//Execute the button on click
myButton.addEventListener('click', () => {
    //The function returns a random number between 1 and 6
    //The myDice variable and its if/else statement assigns a different picture to each number
    //and display it
    let randomNumber = Math.floor(Math.random() * 6 + 1);

    let myDice = document.getElementById('placeholder')
    if (randomNumber == 1) {
        myDice.src = "img/dice1.jpg"
        points = 0;
        points2 = 0;
        document.getElementById("points").innerHTML = "You roll a 1: You Lost!";
        document.getElementById("points2").innerHTML = "You Won";

        console.log("youLost");
    } else if (randomNumber == 2) {
        myDice.src = "img/dice2.png"
        points += 2;
        document.getElementById("points").innerHTML = points;
    } else if (randomNumber == 3) {
        myDice.src = "img/dice3.png"
        points += 3;
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 4) {
        myDice.src = "img/dice4.png"
        points += 4;
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 5) {
        myDice.src = "img/dice5.png"
        points += 5;
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 6) {
        myDice.src = "img/dice6.png"
        points += 6;
        document.getElementById("points").innerHTML = points;
    }

    //Display the points on screen
    //document.getElementById("points").innerHTML = points;
    //console.log(points);


    //Check if the points of the player1 are less than 20 it display the points if not the game is over 
    if (points < 19) {

    } else {
        document.getElementById("points").innerHTML = "Score 20: You Won!";
        document.getElementById("points2").innerHTML = "You Lost";
        points = 0;
        points2 = 0;
    }
})


//Player2
//Execute the button on click
myButton2.addEventListener('click', () => {
    //The function returns a random number between 1 and 6
    //The myDice variable and its if/else statement assigns a different picture to each number
    //and display it
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    let myDice2 = document.getElementById('placeholder2')
    if (randomNumber2 == 1) {
        myDice2.src = "img/dice1.jpg"
        points = 0;
        points2 = 0;
        document.getElementById("points2").innerHTML = "You roll a 1: You Lost";
        document.getElementById("points").innerHTML = "You Won";
        console.log(points1)
        console.log("youLost");
    } else if (randomNumber2 == 2) {
        myDice2.src = "img/dice2.png"
        points2 += 2;
        document.getElementById("points2").innerHTML = points2;
    } else if (randomNumber2 == 3) {
        myDice2.src = "img/dice3.png"
        points2 += 3;
        document.getElementById("points2").innerHTML = points2;
    } else if (randomNumber2 == 4) {
        myDice2.src = "img/dice4.png"
        points2 += 4;
        document.getElementById("points2").innerHTML = points2;
    } else if (randomNumber2 == 5) {
        myDice2.src = "img/dice5.png"
        points2 += 5;
        document.getElementById("points2").innerHTML = points2;
    } else if (randomNumber2 == 6) {
        myDice2.src = "img/dice6.png"
        points2 += 6;
        document.getElementById("points2").innerHTML = points2;
    }

    //document.getElementById("points2").innerHTML = points2;
    //console.log(points2);


    //Check if the points of the player2 are less than 20 it display the points if not the game is over 
    if (points2 < 19) {

    } else {
        document.getElementById("points2").innerHTML = "Score:20. You Won!";
        document.getElementById("points").innerHTML = "You Lost";
        points2 = 0;
        points = 0;
    }
})

//The function reload the page to start a new game
function myFunction() {
    location.reload();
}