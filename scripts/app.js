$(document).ready(function(){
  //define the winning conditions
  var wins = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  // console.log(wins);
  // var typeOfWins = typeof(wins[1][1]);
  // console.log(typeOfWins);

  var availableSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var xPlays = [];
  var oPlays = [];
  var turn = 0;

//assuming the user goes first
  $(".square").click(function(){
    //IT IS THE USER'S TURN
    //check whether this square already has something in it. 
    if ($.trim($(this).html())=='') {
      $(this).text("X");
    } else {
      alert("nope");
    }
    
    var classlist = $(this).attr("class").split(' ');
    var classnumber = classlist[classlist.length-1];
    var num = parseInt(classnumber.split("-").pop());//refactor these last two lines to be one.
  
    //find it within the availablesquares array, and get rid of it
    var index = availableSquares.indexOf(num);
    availableSquares.splice(index, 1);

    //and push it to the xplays array
    xPlays.push(num);
    xPlays.sort(function(a, b){return a-b}); //sort it - not sure if we need this.
    console.log(xPlays);
    console.log(wins);

    //increment the turn
    turn ++; 
    console.log(turn);

    //if turn > 5
    // if (turn >=5) {
      var indexOfX = wins.indexOf(xPlays);
      console.log(indexOfX);


      // check to see whether xplays array is equal to any of the arrays in wins 
      // if so, game over X wins. 
      //if X has had 3 turns and they are a win
      //if X has had 3 turn and they are not a win
      //if X has had more than 3 turns before they win. 
    // }
      
    //NOW IT IS THE BROWSER'S TURN

      //delay for a second or two
      //generate a random number betwee 1 and 9
      //append that to square and get element with class of square-* on it
      //if it's empty, put an O in that element. 
      //and remover it from the availableSquares array
      //and push it to the oplays array
      //turn++
      // if turn > 6
        //check to see whether oplays array is equal to any of the arrays in wins 
        //if so, game over, O wins. 

  });

  

});

