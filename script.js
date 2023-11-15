let cardsShown = 0;
var firstCard, secondCard;
var found = [];

let score = 0;
let scoreText = document.getElementById("scoreText");
scoreText.textContent = score;
let winningMessage = document.getElementById("winningMessage");

// for each game-cell, we want to add a listener to  listen for a click activity, then modify the display to block (from none)
document.addEventListener('DOMContentLoaded', function() {
  var cells = document.querySelectorAll('.game-cell');
  console.log("cells", cells)
  cells.forEach(function(cell) {
    console.log('cell', cell);
    cell.addEventListener('click', function() {
      toggleDisplay(cell)
    });
  });

  function toggleDisplay(cell) {
    score++;
    scoreText.textContent = score;
    // query document for img
    // if img is not null, toggle display to block
    var image = cell.querySelector('img');
    console.log('image', image)
    if (image) {
      image.style.display = (cardsShown < 2 && image.style.display === 'none') ? 'block' : 'none';
      if (cardsShown === 0) {
        firstCard = image.id;
      } else if (cardsShown === 1) {
        secondCard = image.id
        if (firstCard === secondCard) {
          console.log('We have a match', firstCard, secondCard);
          // We have a match!
          // we want to make sure that these are always displayed
          // an idea would be to maintain a list of ids already matched
          found.push(image.id);
        }
      }
      cardsShown++;
      // if cardsShown >= 2, then reset the board
      if (cardsShown > 2) {
        cells = document.querySelectorAll('.game-cell');
        cells.forEach(function(cell) {
          image = cell.querySelector('img');
          if (!found.includes(image.id)) {
            image.style.display = 'none';
          }
        });
        cardsShown = 0;
        // reset the board, maintaining visibility of matching cards
      }
    }

    //check if won
    if(found.length === 8){
      if(score === 24){
        winningMessage.textContent = "You Win! Congratulations on a perfect score!!";
      } else if(score <= 40){
        winningMessage.textContent = "You Win! You have a great score. Good job!";
      } else if(score <= 55){
        winningMessage.textContent = "You Win! You have an okay score.";
      }else {
        winningMessage.textContent = "You won eventually... Better luck next time!";
      }
    }
  }


  // Reset will be very similar to toggleDisplay without the conditional evaluation
  //   function reset(){
  //     cells = document.querySelectorAll('.game-cell');
  //     cells.forEach(function(cell) {
  //       console.log('cell', cell);

  //     });
  //   }
  // });

  // What is a match? A match is when two cards have the same image id


});

function resetBoard() {
  score = 0;
  scoreText.textContent = score;
  cells = document.querySelectorAll('.game-cell');
  cells.forEach(function(cell) {
    image = cell.querySelector('img');
    image.style.display = 'none';
  });
}

//   function updateScoreDisplay() {
//     scoreDisplay.textContent = `Score: ${score}`;
//   }

//   function ifMatch() {
//     if (cardsShown === 0) {
//       firstCard = image.id;
//     } else if (cardsShown === 1) {
//       secondCard = image.id
//       if (firstCard === secondCard)
//     }
//   }
//   updateScoreDisplay();
// });

// // Initial update of the score display
// updateScoreDisplay();
//       });