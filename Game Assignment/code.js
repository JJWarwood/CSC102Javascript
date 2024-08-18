 //Jeremy Warwood//
 
 //function to start the paper rock scissors game
 //player selects one of the three, and the computer will randomly select one of the three
 function startgame()
 {
    //the three variables are the choices the player selects by clicking 
    //variables are named rock paper and scissors
    //checked means clicked on/selected by the player
    var isRockChecked = document.getElementById("rock").checked;
    var isPaperChecked = document.getElementById("paper").checked;
    var isScissorsChecked = document.getElementById("scissors").checked;
    var playerschoice;
    //each object checked is assigned a number, 1, 2, or 3
    //players choice assigned a number rock defaults to 1
    //paper assigned 2 and scissors assigned 3
    if (isPaperChecked) {
        playerschoice = 2;
    } else if (isScissorsChecked) {
        playerschoice = 3;
    } else if (isRockChecked ) {
        playerschoice = 1;
    }
    //this var is how the computer randomly selects a number between 1 and 3
    var computerschoice = Math.floor(Math.random() * 3) + 1;
    //players number is compared to computers number
    //now that the three objects have each been assigned a number
    playGame(playerschoice, computerschoice);

 }

    //this function is comparing player and computer numbers
    //these comparisons determine the outcome of the game
 function playGame(playerschoice, computerschoice)
 {
    // the variable yields the result of players choice being equal to 
    // the computerschoice
    // all of the else if (()&&())) comparisons are all of the possible outcomes
    // if the computer randomly selects 1, and the player selects 1, then
    //the players choice == computers choice
    //the result of the else if statements are "strings" that display the game's outcome
    , the result is "Tie"
    var result = "";
    if (playerschoice == computerschoice) {
        result = "Tie"
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
    //the following variable assigns the numbers 1, 2 or 3, to computerschoicename
    //the numbers have been assigned their corresponding objects, rock, paper, or scissors
    var computerschoicename = "Rock";
    if (computerschoice == 1) {
        computerschoicename = "Rock.";
    } else if (computerschoice == 2){
       computerschoicename = "Paper.";
    } else if (computerschoice == 3){
        computerschoicename = "Scissors.";
    } 
    //this is the result message that pops up, and displays what the computer chose
    document.getElementById("message").innerHTML = "The Computer Chose " + computerschoicename + "\n" + result;

 }