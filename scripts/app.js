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
  var availableSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var xPlays = [];
  var oPlays = [];
  var turn = 0;

//assuming the user goes first
  $(".square").click(function(){
    //IT IS THE USER'S TURN
    $(this).text("X");
    var classlist = $(this).attr("class").split(' ');
    var classnumber = classlist[classlist.length-1];
    var num = parseInt(classnumber.split("-").pop());//refactor these last two lines to be one.
    

    //get the number off the square class here and push is to the x array
    //and remove it from the availableSquares array
    //and push it to the xplays array
    //turn ++; 
    //if turn > 5
      //check to see whether xplays array is equal to any of the arrays in wins 
      //if so, game over X wins. 
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

