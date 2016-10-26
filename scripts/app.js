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

  function arrayContainsAnotherArray(needle, haystack){
    for (var i = 0; i < needle.length; i++) { //for each element in needly
      if (haystack.indexOf(needle[i] === -1)){ //if the element's index within haystack is -1
        return false; //return false --> haystack does not contain needle. 
      }
    }
  }




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

  //setting up the browser's turn as its own function
  var browsersTurn = function(){
    var browsersSquareNumber = getRandomIntInclusive(1, availableSquares.length); 
    console.log(browsersSquareNumber + " is the number the browser is picking at random");
    var browserChoice = availableSquares[browsersSquareNumber-1]; //friggin' off-by-one omg
    console.log(availableSquares[browsersSquareNumber] + " is the box the browser is picking from the availableSquares array");
    var $browserSquare = $(".square-" + browserChoice);
    // console.log($browserSquare + " is the browsersquare"); 
    $browserSquare.text("O");
    $(".turn-display").text("It's your turn!");

    //find it within the availableSquares array, and get rid of it
    var index = availableSquares.indexOf(browserChoice);
    availableSquares.splice(index, 1);
    console.log(availableSquares);

    //and push it to the oplays array
    oPlays.push(browserChoice);
    oPlays.sort(function(a, b){return a-b});
    console.log(oPlays);
    
    if (turn >=3 ) {
      var indexOfO = wins.containsArray(oPlays); //this is neato
      console.log(indexOfO);
      if (indexOfO === true) {
        console.log("you win");
      }
      // TO FIX: if O has had more than 3 turns before they win, this doesn't work. 
    } else if (turn > 3) {
      for (i = 0; i <= wins.length; i++) {
        var winCondition = wins[i];
        console.log(winCondition);        
        var winning = arrayContainsAnotherArray(winCondition, oPlays);
        console.log("It is " + winning + " that the browser is winning with the " + winCondition + " condition");
      }
    }
  }


  //the user goes first

  $(".square").click(function(){
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
    xPlays.sort(function(a, b){return a-b}); //sort it - not sure if we need this.

    //increment the turn
    turn ++; 
    console.log(turn); //works 

    //if the user has taken more than 3 turns 
    if (turn === 3 ) {
      var indexOfX = wins.containsArray(xPlays); //this is neato
      console.log(indexOfX);
      if (indexOfX === true) {
        console.log("the user wins");
        //x wins, are we keeping track of how many wins? possibly in localstorage? 
      }
    } 
    else if (turn > 3) {
      for (i = 0; i <= wins.length; i++) {
        var winCondition = wins[i];
        console.log(winCondition);        
        var winning = arrayContainsAnotherArray(winCondition, xPlays);
        console.log("It is " + winning + " that the user is winning with the " + winCondition + " condition");
      }
    }
      
    //NOW IT IS THE BROWSER'S TURN
    setTimeout(browsersTurn, 1000)
    //todo - if a user clicks another square during this settimeout, make it do nothing. 

  });

});

