const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const scoreDisplay = document.getElementById("score");
let randomindex = 0;
let scorecount = 0;
let difficulty = 50;

function nextRound() {
  randomindex = Math.floor(Math.random() * 4);

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const oddred = red + difficulty;
  const oddgreen = green + difficulty;
  const oddblue = blue + difficulty;
  btn.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  btn1.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  btn2.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  btn3.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  if (randomindex === 0) {
    btn.style.backgroundColor =
      "rgb(" + oddred + ", " + oddgreen + ", " + oddblue + ")";
  }
  if (randomindex === 1) {
    btn1.style.backgroundColor =
      "rgb(" + oddred + ", " + oddgreen + ", " + oddblue + ")";
  }
  if (randomindex === 2) {
    btn2.style.backgroundColor =
      "rgb(" + oddred + ", " + oddgreen + ", " + oddblue + ")";
  }
  if (randomindex === 3) {
    btn3.style.backgroundColor =
      "rgb(" + oddred + ", " + oddgreen + ", " + oddblue + ")";
  }
}

function increaseScore() {
  scorecount = scorecount + 1;
  scoreDisplay.textContent = scorecount;
  console.log(scorecount);
  difficulty = difficulty - 1;
}
nextRound();
btn.addEventListener("click", () => {
  if (randomindex === 0) {
    console.log("Correct!");
    if (difficulty > 0) {
      increaseScore();
      nextRound();
    } else {
    }
  } else {
    console.log("Try again!");
  }
});
btn1.addEventListener("click", () => {
  if (randomindex === 1) {
    console.log("Correct!");
    if (difficulty > 0) {
      increaseScore();
      nextRound();
    } else {
    }
  } else {
    console.log("Try again!");
  }
});
btn2.addEventListener("click", () => {
  if (randomindex === 2) {
    console.log("Correct!");
    if (difficulty > 0) {
      increaseScore();
      nextRound();
    } else {
    }
  } else {
    console.log("Try again!");
  }
});

btn3.addEventListener("click", () => {
  if (randomindex === 3) {
    console.log("Correct!");
    if (difficulty > 0) {
      increaseScore();
      nextRound();
    } else {
    }
  } else {
    console.log("Try again!");
  }
});
