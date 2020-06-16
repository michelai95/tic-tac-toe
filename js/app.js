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
    let game = document.getElementById('game');
    let playerOneScore = document.getElementById('playeronescore');
    let playerTwoScore = document.getElementById('playertwoscore');
    console.log(game);
    let aside = document.getElementById('turn');

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

    let Rick = {
        points: 0,
        currentChoice: null,
        allChoices: []
        };

    let Morty = {
        points: 0,
        currentChoice: null,
        allChoices: []
        };

    function getTurn() {

        if (turn % 2) {
            
            return true;
        } else { 
            
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
    })
}

function play(e) {
    let playerTurns = getTurn(); 
    if (playerTurns) {
        Morty.allChoices.push(e);
        aside.textContent = "Player One's Turn!"
        // let aside = document.createElement = (aside, ["Player One's Turn!"])
    }
    else {Rick.allChoices.push(e);
        aside.textContent = "Player Two's Turn!"
        // let aside = document.createElement = (aside, ["Player Two's Turn!"])
    }
    // first time will return true and then push into his choices
    // if it's not morty's then it's rick's choice 
    // have to separate two different functions "getters" and "setters"
    turn++;
    if (e === '00') {
        if (playerTurns) {
            upLeft.textContent = '💃🏽';
        } else {
            upLeft.textContent = '🕺🏾'; 
        } console.log('hi');
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
    

    function boxClick(e) {
        console.log("You chose " + e.target.id);
        let box = e.target.id;
        let combo = true;
        play(box);
        checkWin();
    }

    const choices = ['00','01', '02', '03', '04', '05', '06', '07', '08']; 
// Yoshi helped me with fixing my bugs and getting my win function to operate 
    function checkWin() {
        // declare variables for the function here 
        console.log("checkWin");
        console.log(Rick.allChoices);
        console.log(Morty.allChoices);
        let winner = false;
        // look in Rick's plays for winning combo
        // look in Morty's play for winning combos
        //i++ counts by one, you could even do i+2 to skip, etc.
        for (let i = 0; i < winningCombo.length; i++) {
            let rickScore = 0;
            let mortyScore = 0;
            for (let j = 0; j < winningCombo[i].length; j++) {
                if (Rick.allChoices.includes(winningCombo[i][j])) {
                    console.log("winning combo", winningCombo[i][j])
                    rickScore++;
                    // looking for one of the winning scores of the winning combo 
                  //  playerOneScore.contentText =  ("Rick's Score " + rickScore); 
                    console.log("Rick's score ", rickScore)
                } 
                if (Morty.allChoices.includes(winningCombo[i][j])) {
                    mortyScore++;
                  //  playerTwoScore.contentText =  ("Morty's Score " + mortyScore);
                    console.log("Morty's score " + mortyScore)
                }
                // comparing rick and morty's score and if it is equal to a winning combo
                if (rickScore === 3) {
                    //playerOneScore.contentText = ("Rick has won!"); 
                    console.log("Rick has won!");
                    winner = true;
                    dog("Rick");
                    return
                } 
                else if (mortyScore === 3) {
                   // playerTwoScore.contentText = ("Morty has won!"); 
                    console.log("Morty has won!");
                    winner = true;
                    dog("Morty");
                    return
                }
                }
                if (!winner && turn == 9) {
                    console.log('draw')
                    dog(winner)
                    return
                }
            }   
        }
        // depending on if we find a winning combo or not message the user/update user
        /*for (i = 0; i < winningCombo.length; i++) {
            let RickScore = 0;
            let MortyScore = 0;
            for (j = 0; j < winningCombo[i].length; j++) {
                if (Morty.choices.includes(winningCombo[i][j])) {
                    MortyScore++;
                    console.log(counter);
                    if (Morty === 3) {
                        let winner = chicken(count);
                        if (MortyScore === 3) {
                            display.textContent = "Rick Wins!";
                        } if (Rick.choices.includes(winningCombo[i][j])) {
                            RickScore++;
                            if (Rick === 3) {
                                let winner = chicken(count);
                            }
                        }
                        else {
                            gamePrompt.textContent = "Morty Wins!";
                        }
                    }
                }
            }
        }*/
    console.log();

    function dog(winner) {
        if (winner === "Morty") {
            // can use any form of math for point scale
            Morty.points = Morty.points+1;
            playerOneScore.innerText = Morty.points;
        }
        if (winner === "Rick") {
            Rick.points = Rick.points+1;
            playerTwoScore.innerText = Rick.points; 
        }
        if (!winner) {
            console.log('draw')
            game.textContent = "It's a draw!"
        }
        t3.removeEventListener("click", boxClick);
    }
    
}) 
