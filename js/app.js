document.addEventListener('DOMContentLoaded', function(){
    /*---DOM REF'S ---*/
    let upLeft = document.getElementById('00');
    let upMid = document.getElementById('01');
    let upRight = document.getElementById('02');
    let midLeft = document.getElementById('03');
    let midMid = document.getElementById('04');
    let midRight = document.getElementById('05');
    let downLeft = document.getElementById('06');
    let downMid = document.getElementById('07');
    let downRight = document.getElementById('08');
    let resetBtn = document.getElementById('reset'); 
   

 
/*----Game Logic Variables ----*/
    let t3 = document.getElementById('tictactoe');

    // let gameOver = true; 

    let winningCombo = [
        ["00", "01" , "02"],
        ["03", "04", "05"],
        ["06" , "07" , "08"],
        ["00" , "04" , "08"],
        ["06" , "04" , "02"],
        ["00" , "03" , "06"],
        ["01" , "04" , "07"],
        ["02" , "05" , "08"]
    ]; 

    let player1 = "X"
    let player2 = "O"
  
/*--- player selection ----*/ 
// the function will see if there is a remainder of 0 between two players, if so it'll prompt the other player if not, it'll stop 

    function getTurn () {
        if (turn % 2 !== 0) {
            return true;
        } else { 
            return false;
        }
    }
    (getTurn); 

    /*function updateScore () {
        player1.textContent = player1.points;
        player2.textContent = player2.points; 
    };

    console.log (updateScore); */

/*--- Event Listeners ----*/ 

    resetBtn.addEventListener('click', reset);
    t3.addEventListener('click', boxClick); 
  /*-  upLeft.addEventListener('click', boxClick);
    upMid.addEventListener('click', boxClick);
    upRight.addEventListener('click', boxClick); 
    midLeft.addEventListener('click', boxClick);
    midMid.addEventListener('click', boxClick);
    midRight.addEventListener('click', boxClick);
    downLeft.addEventListener('click', boxClick);
    downMid.addEventListener('click', boxClick);
    downRight.addEventListener('click', boxClick); */


    // Box Chosen - learned through TA with Dope Lemon 
    function boxClick(e) {
        console.log("You chose " + e.target.id)
        let box = e.target.id;
        let combo = true;
        for (const i = 0; i < winningCombo; i++) {
            if (9 > winningCombo[i]) continue;
            combo = false;
            break;
        } 
        if (combo) return("Cat's tongue"); 
        }

        

       /* if (if (turn % 2 === 0) { //player 1, change element to x
} else {
// player 2, change element to */ 

/* Phillip wanted me to use a for loop but when googling it, articles said it's best not to since it renders the previous index   */  
let cells = document.getElementsByClassName('.inner');
console.log(cells);

for (let i= 0; i < cells.length; i++) {
    cells.addEventListener ('click', function(){
        console.log(i)
    })
}

function play (e) {
    console.log("The turn is " + e.target.id);
    let playerTurns = turn (); 
    if (e.target.id === '00') {
        if (playerTurns) {
            upLeft.textContent = 'X';
        } else {
            upLeft.textContent = 'O'; 
        }
      } if (e.target.id === '01') {
          if (playerTurns) {
              upMid.textContent = 'X';
          } else {
              upMid.textContent = 'O';
          }
      } if (e.target.id === '02') {
          if (playerTurns) {
            upRight.textContent = 'X';
        } else {
            upRight.textContent = 'O';
        }
    } if (e.target.id === '03') {
        if (playerTurns) {
            midLeft.textContent = 'X';
        } else {
            midLeft.textContent = 'O';
        }
    } if (e.target.id === '04') {
        if (playerTurns) {
            midMid.textContent = 'X';
        } else {
            midMid.textContent = 'O';
        }
    } if (e.target.id === '05') {
        if (playerTurns) {
            midRight.textContent = 'X';
        } else {
            midRight.textContent = 'O';
        }
    } if (e.target.id === '06') {
        if (playerTurns) {
            downLeft.textContent = 'X';
        } else {
            downLeft.textContent = 'O';
        }
    } if (e.target.id === '07') {
        if (playerTurns) {
            downMid.textContent = 'X';
        } else {
            downMid.textContent = 'O';
        }
    } if (e.target.id === '08') {
        if (playerTurns) {
            downRight.textContent = 'X';
        } else {
            downRight.textContent = 'O';
        }
    }
    } 
    console.log(play); 
})    


// Checking for a win - learned through TA hours with Phillip

        function winCheck() {
            for (let i = 0; i < winningCombos.length; i++) {
                let playerCountX = 0;
                let playerCountO = 0;
                for (let j = 0; j < winningCombos[i].length; j++) {
                    console.log(playerXChooses);
                    console.log(winningCombos[i][j]);
                    if (playerXChooses.includes(winningCombos[i][j])) {
                        console.log("player one check");
                        playerCountX++;
                        console.log("score = " + playerCountX);
                    } if (playerOChooses.includes(wininngCombos[i][j])) {
                        console.log("player two check");
                        playerCountO++;
                        console.log(playerCountO);
                    } if (playerXChooses.includes(winningCombos[i][j] && playerCountX === 3)) {
                        console.log("player one wins!");
                    } if (playerOChooses.includes(winningCombos[i][j]) && playerCountO === 3) {
                        console.log("player two wins!");
                    }
                }
            }
        }  

        (winCheck);

