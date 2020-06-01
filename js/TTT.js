document.addEventListener('DOMContentLoaded', function() {
    /*----DOM REFS---*/
    let upLeft = document.getElementById('00');
    let upMid = document.getElementById('01');
    let upRight = document.getElementById('02');
    let midLeft = document.getElementById('03');
    let midMid = document.getElementById9('04');
    let midRight = document.getElementById('05');
    let downLeft = document.getElementById('06');
    let downMid = document.getElementById('07');
    let downRight = document.getElementById('08');
    let resetBtn = document.getElementById('reset'); 
    let turn = 0; 
    let t3 = document.getElementById('tictactoe');
    let player1 = "Rick";
    let player2 = "Morty";

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
            upLeft.textContent = 'X';
        } else {
            upLeft.textContent = 'O'; 
        }
      } if (e === '01') {
          if (playerTurns) {
              upMid.textContent = 'X';
          } else {
              upMid.textContent = 'O';
          }
      } if (e === '02') {
          if (playerTurns) {
            upRight.textContent = 'X';
        } else {
            upRight.textContent = 'O';
        }
    } if (e === '03') {
        if (playerTurns) {
            midLeft.textContent = 'X';
        } else {
            midLeft.textContent = 'O';
        }
    } if (e === '04') {
        if (playerTurns) {
            midMid.textContent = 'X';
        } else {
            midMid.textContent = 'O';
        }
    } if (e === '05') {
        if (playerTurns) {
            midRight.textContent = 'X';
        } else {
            midRight.textContent = 'O';
        }
    } if (e === '06') {
        if (playerTurns) {
            downLeft.textContent = 'X';
        } else {
            downLeft.textContent = 'O';
        }
    } if (e === '07') {
        if (playerTurns) {
            downMid.textContent = 'X';
        } else {
            downMid.textContent = 'O';
        }
    } if (e === '08') {
        if (playerTurns) {
            downRight.textContent = 'X';
        } else {
            downRight.textContent = 'O';
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
            for (j = 0; j < winningCombo[i].length; j++) {
               if (playaplaya.includes(win[i][j])) {
                counter++;
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

    checkWin();
}    

}

})

