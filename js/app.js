document.addEventListener('DOMContentLoaded', function() {
    /*----DOM REFS---*/
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
    let turn = 0; 
    let t3 = document.getElementById('tictactoe');
    let Rick = document.getElementById('playerOneScore');
    let Morty = document.getElementById('playerTwoScore');

 /*---Event Listeners----*/ 
    resetBtn.addEventListener('click', reset);
    t3.addEventListener('click', boxClick);    

    /*---Game Logic---*/
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
    function getTurn() {
        if (turn % 2) {
            turn++;
            return true;
        } else { 
            turn++;
            return false;
        }
    }
    function chicken(count){
        if (count % 2) {
            return true;
        } else {
                return false;
            }
    }
    let cells = document.getElementsByClassName('.inner');
console.log(cells);

for (let i= 0; i < cells.length; i++) {
    cells.addEventListener ('click', function(){
        console.log(i)
    })
}

function getTurn() {
    if (turn % 2) {
        turn++;
        return true;
    } else { 
        turn++;
        return false;
    }
}
function chicken(count){
    if (count % 2) {
        return true;
    } else {
            return false;
        }
}

function play(e) {
    let playerTurns = getTurn(); 
    if (e === '00') {
        if (playerTurns) {
            upLeft.textContent = '💃🏽';
        } else {
            upLeft.textContent = '🕺🏾'; 
        }
      } if (e === '01') {
          if (playerTurns) {
              upMid.textContent = '💃🏽';
          } else {
              upMid.textContent = '🕺🏾';
          }
      } if (e === '02') {
          if (playerTurns) {
            upRight.textContent = '💃🏽';
        } else {
            upRight.textContent = '🕺🏾';
        }
    } if (e === '03') {
        if (playerTurns) {
            midLeft.textContent = '💃🏽';
        } else {
            midLeft.textContent = '🕺🏾';
        }
    } if (e === '04') {
        if (playerTurns) {
            midMid.textContent = '💃🏽';
        } else {
            midMid.textContent = '🕺🏾';
        }
    } if (e === '05') {
        if (playerTurns) {
            midRight.textContent = '💃🏽';
        } else {
            midRight.textContent = '🕺🏾';
        }
    } if (e === '06') {
        if (playerTurns) {
            downLeft.textContent = '💃🏽';
        } else {
            downLeft.textContent = '🕺🏾';
        }
    } if (e === '07') {
        if (playerTurns) {
            downMid.textContent = '💃🏽';
        } else {
            downMid.textContent = '🕺🏾';
        }
    } if (e === '08') {
        if (playerTurns) {
            downRight.textContent = '💃🏽';
        } else {
            downRight.textContent = '🕺🏾';
        }
    }
    } 
    console.log(play);
    
    function boxClick(e) {
        console.log("You chose " + e.target.id);
        let box = e.target.id;
        let combo = true;
        play(box); 
        for (let i = 0; i < winningCombo.length; i++) {
            if (turn == 8) {
            combo = false;
        if (combo) returngamePrompt.textContent = "Cat's tongue"; 
        }
    
    function checkWin(playaplaya) {
        for (i = 0; i < winningCombo.length; i++) {
            let counter = 0;
            let opponent = 0;
            for (j = 0; j < winningCombo[i].length; j++) {
               if (winningCombo.includes(winningCombo[i][j])) {
                console.log("Rick");
                counter++;
                console.log("Rick's score " + counter++);
                if (counter === 3) {
                    let winner = chicken(count);
                        if (winner) {
                            gamePrompt.textContent = "Rick Wins!";
                        } else {
                            gamePrompt.textContent = "Morty Wins!";
                        }
                    }
                }
            }
        }
    } 
    console.log();

   /* function reset() {
        counter !== 3
        gamePrompt.textContent = "Game Over";
        if (counter => 3) {
            endGame(false)
        }  


    } */

    checkWin();
}    

}

})

