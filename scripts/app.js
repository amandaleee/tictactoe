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
  for (var i = 0; i++; i > 9) { //maximum of n
    //if i is odd, it's the user's turn
      $(".square").click(function(){
        $(this).text("X");
        //get the number off the square class here and push is to the x array
        //and remove it from the availableSquares array

      });
    //if i is even, it's the browser's turn
      //generate a umber between 1 and 9

      //append that to square and get element the class of square* on it. 

      //check whether this has a number in it already; if it does, repeat this function.

      //after it finds a spot that isn't 
    //if i >= 5
      // after every turn, check to see whether the
  }

  //user's turn 
  
  //computer's turn
  $(".your-turn").click(function(){
    //generate a n 

  });
});

