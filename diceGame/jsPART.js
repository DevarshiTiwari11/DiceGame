
var dice1 = Math.floor(Math.random() * 7) ;
var dice2 = Math.floor(Math.random() * 7) ;

console.log("here are the values " + dice1 + " and for the player 2 " + dice2 );

    if (dice1 === 0 || dice1 === 1 ){
        document.querySelector("#player1").src = 'Face1.png';

        console.log("working");
    }
    else if (dice1 === 2){
        document.querySelector("#player1").src = 'face2.png';

        console.log("working");
    }
    else if (dice1 === 3){
        document.querySelector("#player1").src = 'face3.png';

        console.log("working");
    }
    else if (dice1 === 3){
        document.querySelector("#player1").src = 'face3.png';

        console.log("working");
    }
    else if (dice1 === 4){
        document.querySelector("#player1").src = 'face4.png';

        console.log("working");
    }
    else if (dice1 === 5){
        document.querySelector("#player1").src = 'face5.png';

        console.log("working");
    }
    else if (dice1 === 6){
        document.querySelector("#player1").src = 'face6.png';

        console.log("working");
    }
switch (dice2) {
    case 0:
        document.querySelector("#player2").src = 'Face1.png';
        console.log("Hi i am Dice2 ");
        break;
    case 1:
        document.querySelector("#player2").src = 'Face1.png';
        console.log("Hi i am Dice2 ");
        break;
    case 2:
        document.querySelector("#player2").src = 'face2.png';
        console.log("Hi i am Dice2 ");
        break;
    case 3:
        document.querySelector("#player2").src = 'face3.png';  
        console.log("Hi i am Dice2 ");
        break;
    case 4:
        document.querySelector("#player2").src = 'face4.png';
        console.log("Hi i am Dice2 ");
        break;
        
    case 5:
        document.querySelector("#player2").src = 'face5.png';
        console.log("Hi i am Dice2 ");
        break;
    
    case 6:
        document.querySelector("#player2").src = 'face6.png';
        console.log("Hi i am Dice2 ");
        break;

    default:
        break;
}

//now mentioning the winner of the game !! 

if(dice1>dice2){
    document.querySelector("#winnerResult").innerHTML = " Congrats Player 1, Jeet gaya bhai tu ";
}
else if(dice1<dice2){
    document.querySelector("#winnerResult").innerHTML = " Congrats Player 2, Jeet gaya bhai tu ";
}

else{
    document.querySelector("#winnerResult").innerHTML = "Koi nahi jeeta firse khel lo bhai ";
}