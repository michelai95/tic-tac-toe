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
    let gameOver = true; 
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
  
/*--- player selection ----*/ 

    function getTurn () {
        if (turn % 2 !== 0) {
            return true;
        } else { 
            return false;
        }
    }

    function updateScore () {
        player1.textContent = player1.points;
        player2.textContent = player2.points; 
    };

    console.log (updateScore); 

    let player1 = {
        points: 0,
        currentChoice: null
    };

    let player2 = {
        points: 0,
        currentChoice: null
    };

    let turn = 0; 

/*--- Event Listeners ----*/ 

    resetBtn.addEventListener('click', reset);
    t3.addEventListener('click', boxClick); 
    upLeft.addEventListener('click', boxClick);
    upMid.addEventListener('click', boxClick);
    upRight.addEventListener('click', boxClick); 
    midLeft.addEventListener('click', boxClick);
    midMid.addEventListener('click', boxClick);
    midRight.addEventListener('click', boxClick);
    downLeft.addEventListener('click', boxClick);
    downMid.addEventListener('click', boxClick);
    downRight.addEventListener('click', boxClick);


    // Box Chosen
    function boxClick(e) {
        console.log("You chose " + e.target.id)
        let box = e.target.id;

        /* If the game is not over and the opponent hasn't won
        if (player1.winningCombo === player2.winningCombo) {
            document.textContent = "It's a Tie!";
        };

        if (player1.boxClick === ) */

    } 
})
