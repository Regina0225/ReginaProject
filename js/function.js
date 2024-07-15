let userTotalScore = 0;
let computerTotalScore = 0;
let rounds = 0;

function rollDice() {
  if (rounds >= 3) {
    alert("Game is over. Please press reset button.");
    return;
  }

  const userDice1 = Math.floor(Math.random() * 6) + 1;
  const userDice2 = Math.floor(Math.random() * 6) + 1;
  const computerDice1 = Math.floor(Math.random() * 6) + 1;
  const computerDice2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById(
    "userDice"
  ).innerHTML = `<img src="dice_images/${userDice1}.png"  alt= "Dice ${userDice1}"> <img src="dice_images/${userDice2}.png"  alt= "Dice ${userDice2}">`;
  document.getElementById(
    "computerDice"
  ).innerHTML = `<img src="dice_images/${computerDice1}.png"  alt= "Dice ${computerDice1}"> <img src="dice_images/${computerDice2}.png"  alt= "Dice ${computerDice2}">`;

  const userRoundScore = calculateScore(userDice1, userDice2);
  const computerRoundScore = calculateScore(computerDice1, computerDice2);

  userTotalScore += userRoundScore;
  computerTotalScore += computerRoundScore;

  document.getElementById("userRoundScore").innerText = userRoundScore;
  document.getElementById("computerRoundScore").innerText = computerRoundScore;
  document.getElementById("userTotalScore").innerText = userTotalScore;
  document.getElementById("computerTotalScore").innerText = computerTotalScore;

  rounds++;

  if (rounds === 3) {
    setTimeout(() => {
      declareWinner();
    }, 100);
  }
}

function calculateScore(dice1, dice2) {
  let score;
  if (dice1 === 1 || dice2 === 1) {
    score = 0;
  } else if (dice1 === dice2) {
    score = (dice1 + dice2) * 2;
  } else {
    score = dice1 + dice2;
  }
  return score;
}

function declareWinner() {
  setTimeout(function(){
    if(userTotalScore > computerTotalScore){
      alert("User won!");
    }else if(computerTotalScore > userTotalScore){
      alert("Computer won!");
    }else{
      alert("It's tied!");
    }
    }, 1000);
  }

function resetGame() {
  setTimeout(function(){
  userTotalScore = 0;
  computerTotalScore = 0;
  rounds = 0;

  document.getElementById("userDice").innerHTML = `<img src="dice_images/1.png"> <img src="dice_images/1.png">`;
  document.getElementById("computerDice").innerHTML = `<img src="dice_images/1.png"> <img src="dice_images/1.png">`;
  document.getElementById("userRoundScore").innerText = "0";
  document.getElementById("computerRoundScore").innerText = "0";
  document.getElementById("userTotalScore").innerText = "0";
  document.getElementById("computerTotalScore").innerText = "0";

  alert("Game is over. Please start new game!");
  }, 500);
}


function showRules() {
  const rules = `
Dice Game Rules:
- The user and the computer each roll a pair of dice three times.
- Scores are calculated based on the values of the rolled dice in each round.
1. If any of the player's two dice shows a 1, the score for that round is 0.
   For example, if the player rolls a 6 and a 1, their score is 0.
2. If the player rolls a pair of the same numbers, the score for that round is the total of the two dice multiplied by 2.
   For example, if the player rolls a 5 and a 5, their score is (5+5)*2=20.
3. For any other combination of dice, the score is the total value of the two dice. 
   For example, if the player rolls a 3 and a 2, their score is 3+2=5.
  `;
  alert(rules);
}



