//JS code goes here
var players=[];
var markers=["X","O"];
var whoseTurn = 0;
players[0] = "Player One";
players [1] = "Player Two";
var scores=[];
var winValues=[7,56,73,84,146,273,292,448];
var gameOver;
var gameMessage;
var winner1,winner2;
var looser1,looser2;
//var mainMessage = document.getElementById("game-message").innerText;


function scoreBoard(){
	if (winCheck()) {
        
		if (players[whoseTurn] == "X") {
            winner = 1+ document.getElementById("scoreBoard").innerHTML;
		}
        
	}
	return winner;
}

function reset(){
	gameOver=false;
	scores=[0,0];
	gameMessage = document.getElementById("game-message");
	winner1 = document.getElementById("win-1");
	winner2 = document.getElementById("win-2");
	looser1 = document.getElementById("lost-1");
	looser2 = document.getElementById("lost-2");
	drawBoard();
	gameMessage.innerText = "New Game";
}

function drawBoard(){

	var display = "";
	var binaryCount = 1;


	for (var i=1; i<=3; i++)
	{
		if(i==3){
			display += '<tr id="row-'+i+'">';
		for (var j=0; j<3; j++){

			if(j==2){
			display +=  '<td id="'+j+'" onclick="play(event,'+binaryCount+')" class=""></td>';
		    binaryCount = (binaryCount*2);
		}


		else {
			display +=  '<td id="'+j+'" onclick="play(event,'+binaryCount+')" class="borderRight"></td>';
		    binaryCount = (binaryCount*2);
		}
	}

		display += '</tr>';
	}



		else{
			display += '<tr id="row-'+i+'">';
		for (var j=0; j<3; j++){

			if(j==2){
			display +=  '<td id="'+j+'" onclick="play(event,'+binaryCount+')" class="borderBottom "></td>';
		    binaryCount = (binaryCount*2);
		}


		else {
			display +=  '<td id="'+j+'" onclick="play(event,'+binaryCount+')" class="borderBottom borderRight"></td>';
		    binaryCount = (binaryCount*2);
		}
	}

		display += '</tr>';
	}

}
	document.getElementById("game-board").innerHTML = display;
	//display += '</tbody>';
}



function updateGameMessage(message=false){
	if (!message){
      gameMessage.innerText = players[whoseTurn]+ "'s Turn";
	}
	 else gameMessage.innerText = message;
	
}


function winCheck(){
for (var i=0; i < winValues.length; i++){
	if ((scores[whoseTurn] & winValues[i]) == winValues[i]) 
	{
		updateGameMessage (players[whoseTurn] + " Wins!");
		//alert (players[whoseTurn] + " Wins");

            if (players[whoseTurn] == "Player One") {
            winner1.innerText = 1 + parseFloat(winner1.innerHTML);
            looser2.innerText = winner1.innerText;
		}

		if (players[whoseTurn] == "Player Two") {
            winner2.innerText = 1 + parseFloat(winner2.innerHTML);
            looser1.innerText = winner2.innerText;
		}


		gameOver=true;

	}
}
if (((scores[0] + scores[1]) == 511) && !gameOver) {
	updateGameMessage("No one Wins!");
	gameOver=true;
}
//scoreBoard();
return gameOver;
}


function play(event,evalue){
	if (!gameOver) {
	scores[whoseTurn] += evalue;
	if (event.target.innerText==false) {
	event.target.innerHTML = "<span>" + markers[whoseTurn] + "</span";
	winCheck();

	if(!gameOver) toggle();
}
}

	/*if(!event.target.innerText){
	event.target.innerText = turn? "O": "X";
	turn = !turn;
 }*/
}

function toggle() {
	if (whoseTurn == 0) whoseTurn = 1;
	else whoseTurn = 0;

	updateGameMessage();

}