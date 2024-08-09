 function startgame()
 {
    
    var isRockChecked = document.getElementById("rock").checked;
    var isPaperChecked = document.getElementById("paper").checked;
    var isScissorsChecked = document.getElementById("scissors").checked;
    var playerschoice;
    if (isPaperChecked) {
        playerschoice = 2;
    } else if (isScissorsChecked) {
        playerschoice = 3;
    } else if (isRockChecked ) {
        playerschoice = 1;
    }

    var computerschoice = Math.floor(Math.random() * 3) + 1;

    var result = "";
    if (playerschoice == computerschoice) {
        result = "tie"
    } else if ((playerschoice ==1) && (computerschoice == 2)) {
        result = "Computer Wins, You Lose!";
    } else if ((playerschoice ==1) && (computerschoice ==3)) {
        result = "Player Wins!";
    } else if ((playerschoice ==2) && (computerschoice == 1)) {
        result = "Player Wins!";
    } else if ((playerschoice ==2) && (computerschoice ==3)) {
        result = "Computer Wins, You Lose!";
    } else if ((playerschoice ==3) && (computerschoice == 1)) {
        result = "Computer Wins, You Lose!";
    } else if ((playerschoice ==3) && (computerschoice ==2)) {
        result = "Player Wins!";
    } 
    var computerschoicename = "Rock";
    if (computerschoice == 1) {
        computerschoicename = "Rock";
    } else if (computerschoice == 2){
       computerschoicename = "Paper";
    } else if (computerschoice == 3){
        computerschoicename = "scissors";
    } 
    document.getElementById("message").innerHTML = "The Computer Chose " + computerschoicename + "\n" + result;

 }
