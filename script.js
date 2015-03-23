//Need flashy stuff
$(document).ready(function () {
	var playerScore = 0;
	var tieScore = 0;
	var computerScore = 0;
	$("#player").html("Player: " + " " + playerScore);
	$("#tie").html("Tie: " + " " + tieScore);
	$("#computer").html("Computer: " + " " + computerScore);
    $('div div div').click(function () {
		if ($(this).text().length > 0) {} else {
            $(this).append('X');
            var varietyPick = Math.floor(Math.random()*2);
            playerOneWin();
            computerPick();
            playerTwoWin();

            

            function playerOneWin() {
                if ($('#tl').text() == 'X' && $('#tm').text() == 'X' && $('#tr').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#ml').text() == 'X' && $('#mm').text() == 'X' && $('#mr').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#bl').text() == 'X' && $('#bm').text() == 'X' && $('#br').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#tl').text() == 'X' && $('#ml').text() == 'X' && $('#bl').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#tm').text() == 'X' && $('#mm').text() == 'X' && $('#bm').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#tr').text() == 'X' && $('#mr').text() == 'X' && $('#br').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#tl').text() == 'X' && $('#mm').text() == 'X' && $('#br').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if ($('#tr').text() == 'X' && $('#mm').text() == 'X' && $('#bl').text() == 'X') {
					playerScore = playerScore + 1;
					$("#player").html("Player: " + playerScore);
                    alert("Win");
                    clearBoard();
                } else if (($('#gameBoard').text().length - 176 == 9)) {
					tieScore = tieScore + 1;
					$("#tie").html("Tie: " + tieScore);
                    alert("Tie");
                    clearBoard();
                }
            }
            


            function computerPick() {
                if ($('#tl').text() == 'O' && $('#tm').text() == 'O' && $('#tr').text().length === 0) {
                    $('#tr').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'O' && $('#mm').text() == 'O' && $('#mr').text().length == 0) {
                    $('#mr').append('O');
                    playerTwoWin();
                } else if ($('#bl').text() == 'O' && $('#bm').text() == 'O' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#ml').text() == 'O' && $('#bl').text().length == 0) {
                    $('#bl').append('O');
                    playerTwoWin();
                } else if ($('#tm').text() == 'O' && $('#mm').text() == 'O' && $('#bm').text().length == 0) {
                    $('#bm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mr').text() == 'O' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#mm').text() == 'O' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mm').text() == 'O' && $('#bl').text().length == 0) {
                    $('#bl').append('O');
                    playerTwoWin();
//Three code blocks to cover every final answer above1
                
                } else if ($('#tl').text() == 'O' && $('#tm').text().length == 0 && $('#tr').text() == 'O') {
                    $('#tm').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'O' && $('#mm').text().length == 0 && $('#mr').text() == 'O') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#bl').text() == 'O' && $('#bm').text().length == 0 && $('#br').text() == 'O') {
                    $('#bm').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#ml').text().length == 0 && $('#bl').text() == 'O') {
                    $('#ml').append('O');
                    playerTwoWin();
                } else if ($('#tm').text() == 'O' && $('#mm').text().length == 0 && $('#bm').text() == 'O') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mr').text().length == 0 && $('#br').text() == 'O') {
                    $('#mr').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#mm').text().length == 0 && $('#br').text() == 'O') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mm').text().length == 0 && $('#bl').text() == 'O') {
                    $('#mm').append('O');
                    playerTwoWin();
//Three code blocks to cover every final answer above2
                
                } else if ($('#tl').text().length == 0 && $('#tm').text() == 'O' && $('#tr').text() == 'O') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#ml').text().length == 0 && $('#mm').text() == 'O' && $('#mr').text() == 'O') {
                    $('#ml').append('O');
                    playerTwoWin();
                } else if ($('#bl').text().length == 0 && $('#bm').text() == 'O' && $('#br').text() == 'O') {
                    $('#bl').append('O');
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#ml').text() == 'O' && $('#bl').text() == 'O') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#tm').text().length == 0 && $('#mm').text() == 'O' && $('#bm').text() == 'O') {
                    $('#tm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mr').text() == 'O' && $('#br').text() == 'O') {
                    $('#tr').append('O');
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#mm').text() == 'O' && $('#br').text() == 'O') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mm').text() == 'O' && $('#bl').text() == 'O') {
                    $('#tr').append('O');
                    playerTwoWin(); 
//Three code blocks to cover every final answer above3
//Code blocks to prevent win from player one below1

                } else if ($('#tl').text() == 'X' && $('#tm').text() == 'X' && $('#tr').text().length == 0) {
                    $('#tr').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'X' && $('#mm').text() == 'X' && $('#mr').text().length == 0) {
                    $('#mr').append('O');
                    playerTwoWin();
                } else if ($('#bl').text() == 'X' && $('#bm').text() == 'X' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'X' && $('#ml').text() == 'X' && $('#bl').text().length == 0) {
                    $('#bl').append('O');
                    playerTwoWin();
                } else if ($('#tm').text() == 'X' && $('#mm').text() == 'X' && $('#bm').text().length == 0) {
                    $('#bm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'X' && $('#mr').text() == 'X' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'X' && $('#mm').text() == 'X' && $('#br').text().length == 0) {
                    $('#br').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'X' && $('#mm').text() == 'X' && $('#bl').text().length == 0) {
                    $('#bl').append('O');
                    playerTwoWin();
//Code blocks to prevent win from player one below2                    
                    
                } else if ($('#tl').text() == 'X' && $('#tm').text().length == 0 && $('#tr').text() == 'X') {
                    $('#tm').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'X' && $('#mm').text().length == 0 && $('#mr').text() == 'X') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#bl').text() == 'X' && $('#bm').text().length == 0 && $('#br').text() == 'X') {
                    $('#bm').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'X' && $('#ml').text().length == 0 && $('#bl').text() == 'X') {
                    $('#ml').append('O');
                    playerTwoWin();
                } else if ($('#tm').text() == 'X' && $('#mm').text().length == 0 && $('#bm').text() == 'X') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'X' && $('#mr').text().length == 0 && $('#br').text() == 'X') {
                    $('#mr').append('O');
                    playerTwoWin();
                } else if ($('#tl').text() == 'X' && $('#mm').text().length == 0 && $('#br').text() == 'X') {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'X' && $('#mm').text().length == 0 && $('#bl').text() == 'X') {
                    $('#mm').append('O');
                    playerTwoWin();
//Code blocks to prevent win from player one below3                    
                    
                } else if ($('#tl').text().length == 0 && $('#tm').text() == 'X' && $('#tr').text() == 'X') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#ml').text().length == 0 && $('#mm').text() == 'X' && $('#mr').text() == 'X') {
                    $('#ml').append('O');
                    playerTwoWin();
                } else if ($('#bl').text().length == 0 && $('#bm').text() == 'X' && $('#br').text() == 'X') {
                    $('#bl').append('O');
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#ml').text() == 'X' && $('#bl').text() == 'X') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#tm').text().length == 0 && $('#mm').text() == 'X' && $('#bm').text() == 'X') {
                    $('#tm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mr').text() == 'X' && $('#br').text() == 'X') {
                    $('#tr').append('O');
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#mm').text() == 'X' && $('#br').text() == 'X') {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mm').text() == 'X' && $('#bl').text() == 'X') {
                    $('#tr').append('O');
                    playerTwoWin();                    
//Second move                    
                 
               }  else if ($('#tl').text().length == 0 && $('#tm').text().length == 0 && $('#tr').text() == 'O') {
                   if(varietyPick == 1) {$('#tm').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#ml').text().length == 0 && $('#mm').text().length == 0 && $('#mr').text() == 'O') {
                   if(varietyPick == 1) {$('#mm').append('O');} 
                   else {$('#ml').append('O');};
                    playerTwoWin();
                } else if ($('#bl').text().length == 0 && $('#bm').text().length == 0 && $('#br').text() == 'O') {
                   if(varietyPick == 1) {$('#bm').append('O');} 
                   else {$('#bl').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#ml').text().length == 0 && $('#bl').text() == 'O') {
                   if(varietyPick == 1) {$('#ml').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#tm').text().length == 0 && $('#mm').text().length == 0 && $('#bm').text() == 'O') {
                   if(varietyPick == 1) {$('#mm').append('O');} 
                   else {$('#tm').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mr').text().length == 0 && $('#br').text() == 'O') {
                   if(varietyPick == 1) {$('#mr').append('O');} 
                   else {$('#tr').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#mm').text().length == 0 && $('#br').text() == 'O') {
                   if(varietyPick == 1) {$('#mm').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mm').text().length == 0 && $('#bl').text() == 'O') {
                   if(varietyPick == 1) {$('#mm').append('O');} 
                   else {$('#tr').append('O');};
                    playerTwoWin();
//Second move

                } else if ($('#tl').text().length == 0 && $('#tm').text() == 'O' && $('#tr').text().length == 0) {
                   if(varietyPick == 1) {$('#tr').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#ml').text().length == 0 && $('#mm').text() == 'O' && $('#mr').text().length == 0) {
                   if(varietyPick == 1) {$('#mr').append('O');} 
                   else {$('#ml').append('O');};
                    playerTwoWin();
                } else if ($('#bl').text().length == 0 && $('#bm').text() == 'O' && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#bl').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#ml').text() == 'O' && $('#bl').text().length == 0) {
                   if(varietyPick == 1) {$('#bl').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#tm').text().length == 0 && $('#mm').text() == 'O' && $('#bm').text().length == 0) {
                   if(varietyPick == 1) {$('#bm').append('O');} 
                   else {$('#tm').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mr').text() == 'O' && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#tr').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text().length == 0 && $('#mm').text() == 'O' && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#tl').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text().length == 0 && $('#mm').text() == 'O' && $('#bl').text().length == 0) {
                   if(varietyPick == 1) {$('#bl').append('O');} 
                   else {$('#tr').append('O');};
                    playerTwoWin();
//Second move

                } else if ($('#tl').text() == 'O' && $('#tm').text().length == 0 && $('#tr').text().length == 0) {
                   if(varietyPick == 1) {$('#tr').append('O');} 
                   else {$('#tm').append('O');};
                    playerTwoWin();
                } else if ($('#ml').text() == 'O' && $('#mm').text().length == 0 && $('#mr').text().length == 0) {
                   if(varietyPick == 1) {$('#mr').append('O');} 
                   else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#bl').text() == 'O' && $('#bm').text().length == 0 && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#bm').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#ml').text().length == 0 && $('#bl').text().length == 0) {
                   if(varietyPick == 1) {$('#bl').append('O');} 
                   else {$('#ml').append('O');};
                    playerTwoWin();
                } else if ($('#tm').text() == 'O' && $('#mm').text().length == 0 && $('#bm').text().length == 0) {
                   if(varietyPick == 1) {$('#bm').append('O');} 
                   else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mr').text().length == 0 && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#mr').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text() == 'O' && $('#mm').text().length == 0 && $('#br').text().length == 0) {
                   if(varietyPick == 1) {$('#br').append('O');} 
                   else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#tr').text() == 'O' && $('#mm').text().length == 0 && $('#bl').text().length == 0) {
                   if(varietyPick == 1) {$('#bl').append('O');} 
                   else {$('#mm').append('O');};
                    playerTwoWin();
//First move -need varietyPick-
                    
                } else if ($('#tm').text() == 'X' && $('#tl').text().length == 0) {
                    $('#tl').append('O');
                    playerTwoWin();               
                } else if ($('#mm').text() == 'X' && $('#tl').text().length == 0) {
                    $('#tl').append('O');
                    playerTwoWin();
                } else if ($('#bm').text() == 'X' && $('#mm').text().length == 0) {
                    if($('#tl').text().length == 0) {$('#tl').append('O');} 
                    else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#tl').text() == 'X' && $('#mm').text().length == 0) {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'X' && $('#mm').text().length == 0) {
                    if(varietyPick == 1 && $('#tl').text().length == 0) {
                            $('#tl').append('O');
                    } else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#bl').text() == 'X' && $('#mm').text().length == 0) {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#tr').text() == 'X' && $('#mm').text().length == 0) {
                    $('#mm').append('O');
                    playerTwoWin();
                    //middle-right proving win strat
                } else if ($('#mr').text() == 'X' && $('#mm').text().length == 0) {
                    if(varietyPick == 1 && $('#tl').text().length == 0) {
                            $('#tl').append('O');
                    } else {$('#mm').append('O');};
                    playerTwoWin();
                } else if ($('#br').text() == 'X' && $('#mm').text().length == 0) {
                    $('#mm').append('O');
                    playerTwoWin();
                } else if ($('#mr').text() == 'X' && $('#tm').text().length == 0) {
                    $('#tm').append('O');
                    playerTwoWin();
                } else if ($('#mr').text() == 'X' && $('#bm').text().length == 0) {
                    $('#bm').append('O');
                    playerTwoWin();
                } else if ($('#bm').text() == 'X' && $('#mr').text().length == 0) {
                    $('#mr').append('O');
                    playerTwoWin();
                } else if ($('#ml').text() == 'X' && $('#bm').text().length == 0) {
                    $('#bm').append('O');
                    playerTwoWin();
				} else if ($('#br').text() == 'X' && $('#ml').text().length == 0) {
                    $('#ml').append('O');
                    playerTwoWin();
				} else if ($('#bm').text() == 'X' && $('#ml').text().length == 0) {
                    $('#ml').append('O');
                    playerTwoWin();
            };
            };








            function playerTwoWin() {
                if ($('#tl').text() == 'O' && $('#tm').text() == 'O' && $('#tr').text() == 'O') {
                    computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
					alert("Lose");
                    clearBoard();
                } else if ($('#ml').text() == 'O' && $('#mm').text() == 'O' && $('#mr').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#bl').text() == 'O' && $('#bm').text() == 'O' && $('#br').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#tl').text() == 'O' && $('#ml').text() == 'O' && $('#bl').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#tm').text() == 'O' && $('#mm').text() == 'O' && $('#bm').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#tr').text() == 'O' && $('#mr').text() == 'O' && $('#br').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#tl').text() == 'O' && $('#mm').text() == 'O' && $('#br').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                } else if ($('#tr').text() == 'O' && $('#mm').text() == 'O' && $('#bl').text() == 'O') {
					computerScore = computerScore + 1;
					$("#computer").html("Computer: " + computerScore);
                    alert("Lose");
                    clearBoard();
                
                };
            };

            function clearBoard() {
                $('.box').empty();
            };
        };
    });
});