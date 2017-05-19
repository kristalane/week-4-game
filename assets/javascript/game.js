
$(document).ready(function(){


  // Define variables for initial state of game
    var numberToMatch;
    var win = 0;
    var loss = 0;
    var yourScore;
    var CrystalValue = [];

    function resetGame(){
      numberToMatch = randomFromRange(19, 120);
      $(".random-number").text(numberToMatch);
      for (var i = 1; i < 5; i++){
        CrystalValue[i] = randomFromRange(1, 12);
      }
      yourScore = 0;
      addToScore(0);
    }
    resetGame();

  // Write function to assign the random crystal values (generated during resetgame) to specific crystals
    function crystalClicked(){
      var slot = $(this).attr('id');
      var weight = CrystalValue[slot];

      console.log(slot + "=" + weight);
      addToScore(weight);
      checkHasWon();
    };

// This function will add the value of the clicked crystal to the player's score.
    function addToScore(amountToAdd) {
      yourScore = yourScore + amountToAdd;
      $("#yourScore").text(yourScore);
    };

    // Write random number generator function with reusable variables.

    function randomFromRange(minNumber,maxNumber) {
      var numberToMatch = Math.floor(Math.random() * (maxNumber-minNumber+1)+minNumber);
      return numberToMatch;
    };

  // Add event listener for button clicks for crystals.
  $(document).on('click', 'button', crystalClicked);


  // Write checkHasWon function to equal a score === the random number chosen.
    function checkHasWon() {
      if (yourScore === numberToMatch) {
        $('#win').text(win ++);
        alert("you won: what a great crystal collector you are!");
        resetGame();
      }
      else if (yourScore > numberToMatch) {
        $('#loss').text(loss ++);
        alert("You lost: not so great at collecting crystals, eh?");
        resetGame();
      }
    };




});
