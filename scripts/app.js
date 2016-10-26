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

  //creates a method on Array object so we can find an array within an array 
  Array.prototype.containsArray = function(val) {
    var hash = {};
    for(var i=0; i<this.length; i++) {
      hash[this[i]] = i;
    }
    return hash.hasOwnProperty(val);
  } 
  //todo: fix this
  // function arrayContainsAnotherArray(needle, haystack){
  //   for (var i = 0; i < haystack.length; i++) { //for each element in needle, each of which is an array
  //     if (haystack.indexOf(needle[i] === -1)){ //if the element's index within haystack is -1
  //       return false; //return false --> haystack does not contain needle. 
  //     }
  //   }
  // }




  // function to generate a random number for the browser's turn. 
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var availableSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var xPlays = [];
  var oPlays = [];
  var turn = 0;

  //setting up the browser's turn as its own function so we can call it with settimeout below
  var browsersTurn = function(){
    var browsersSquareNumber = getRandomIntInclusive(1, availableSquares.length); 
    var browserChoice = availableSquares[browsersSquareNumber-1]; //friggin' off-by-one error here, omg
     var $browserSquare = $(".square-" + browserChoice);
    $browserSquare.text("O");
    $(".turn-display").text("It's your turn!");

    //find it within the availableSquares array, and get rid of it
    var index = availableSquares.indexOf(browserChoice);
    availableSquares.splice(index, 1);
    console.log(availableSquares + " are still available");

    //and push it to the oplays array
    oPlays.push(browserChoice);
    oPlays.sort(function(a, b){return a-b});
    console.log(oPlays + " is what the browser has played");
    
    if (turn === 2 ) {
      var indexOfO = wins.containsArray(oPlays); //this works pretty well
      console.log("True or false, O has won " + indexOfO);
      if (indexOfO === true) {
        alert("the browser wins! try again!");
      }
    } 
    // else if (turn >= 3) {
    //   for (i = 0; i <= wins.length; i++) {
    //     var winCondition = wins[i];
    //     console.log(winCondition);        
    //     var winning = arrayContainsAnotherArray(winCondition, oPlays);
    //     console.log("It is " + winning + " that the browser is winning with the " + winCondition + " condition");
    //     if (winning) {
    //       alert("the browser wins! try again!");
    //       return;
    //     }
    //   }
    // }
  }


  //the user goes first

  $(".square").click(function(){
    console.log(turn + "is the");
    //IT IS THE USER'S TURN
    //check whether this square already has something in it. 
    if ($.trim($(this).html())=='') {
      $(this).text("X");

      $(".turn-display").text("It's the browser's turn!");
    } else {
      alert("nope");//fix and do something funny here
    }
    //get the classes on the square the user clicked
    var classlist = $(this).attr("class").split(' ');
    //get the number at the end of the last one.
    var userChoice = parseInt((classlist[classlist.length-1]).split("-").pop());

    //find it within the availableSquares array, and get rid of it
    var index = availableSquares.indexOf(userChoice);
    availableSquares.splice(index, 1);

    //and push it to the xplays array
    xPlays.push(userChoice);
    console.log(xPlays + " is what X has played");
    xPlays.sort(function(a, b){return a-b}); //sort it - not sure if we need this.

    //increment the turn
    turn ++; 

    //if the user has taken 3 turns 
    if (turn === 2 ) {
      var indexOfX = wins.containsArray(xPlays);
      console.log("True or false, X has won: " + indexOfX);
      
      if (indexOfX === true) {
        console.log("the user wins");
        alert("you win");
        if (winning) {
          alert("you win! thanks for playing!");
          return;
        }
      }
    } 
    // else if (turn >= 3) {
    //   for (i = 0; i < wins.length; i++) {
    //     var winCondition = wins[i];
    //     console.log("checking win condition " + winCondition);        
    //     var winning = arrayContainsAnotherArray(winCondition, xPlays);
    //     console.log("It is " + winning + " that the user is winning with the " + winCondition + " condition");
    //     //todo - get the win condition working here
    //   }
    // }
      
    //NOW IT IS THE BROWSER'S TURN
    setTimeout(browsersTurn, 500)
  });

});

