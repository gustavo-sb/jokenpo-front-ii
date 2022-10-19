var playerScore = 0;
var machineScore = 0;

function playerMove() {
  let response = prompt("rock[1] // paper[2] // sissors[3]");
  let playerMove = parseInt(response);
  return playerMove;
}

function machineMove() {
  let response = Math.random() * 3 + 1;
  let machineMove = parseInt(response);
  return machineMove;
}

function gameplay() {
  switch (playerMove()) {
    //rock
    case 1:
      if (machineMove() === 2) {
        machineScore++;
      } else if (machineMove() === 3) {
        playerScore++;
      }
      break;
    //paper
    case 2:
      if (machineMove() === 3) {
        machineScore++;
      } else if (machineMove() === 1) {
        playerScore++;
      }
      break;
    //sissors
    case 3:
      if (machineMove() === 1) {
        machineScore++;
      } else if (machineMove() === 2) {
        playerScore++;
      }
      break;
    default:
      break;
  }

  if (playerScore === 2) {
    alert("Victory!");
    playerScore = 0;
    machineScore = 0;
  } else if (machineScore === 2) {
    alert("Defeat");
    playerScore = 0;
    machineScore = 0;
  }
  gameplay();
}

gameplay();
