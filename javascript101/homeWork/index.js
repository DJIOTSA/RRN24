const progLang = document.getElementById("prog-lang");
const progColor = document.getElementById("prog-color");
const live = document.getElementById("live-num");
const score = document.getElementById("score-num");
const error = document.getElementById("error");
const body = document.getElementById("body");

let COLOR_MATCHING = [
  {
    programming: "c",
    color: "blue",
    completed: false,
    id: 1,
  },
  {
    programming: "c++",
    color: "violet",
    completed: false,
    id: 2,
  },
  {
    programming: "php",
    color: "purple",
    completed: false,
    id: 3,
  },
  {
    programming: "python",
    color: "navy",
    completed: false,
    id: 4,
  },
  {
    programming: "c#",
    color: "gray",
    completed: false,
    id: 5,
  },
  {
    programming: "javascript",
    color: "teal",
    completed: false,
    id: 6,
  },
  {
    programming: "java",
    color: "pink",
    completed: false,
    id: 7,
  },
  {
    programming: "dard",
    color: "orange",
    completed: false,
    id: 8,
  },
  {
    programming: "assembler",
    color: "lightblue",
    completed: false,
    id: 9,
  },
];

let progColors = COLOR_MATCHING;

// reset livenum and scoreNum
let scoreNum = 0;
var liveNum = 5;
live.innerText = liveNum;
score.textContent = scoreNum;

document.getElementById("submit").addEventListener("click", (e) => {
  // avoid the default form page refresh
  e.preventDefault();
  // get the value of the programming language and color
  let programming = progLang.value;
  let color = progColor.value;
  // validate the input value
  if (programming.length < 1 || color.length < 3) {
    error.textContent =
      "Invalid programming language or programming language color";
  } else {
    color.toLowerCase();
    programming.toLowerCase();
    // check the matching
    const match = progColors.find((item) => {
      if (item.programming === programming && item.color === color) {
        return item;
      }
    });
    if (match !== undefined) { 
      if (match.completed == true) {
        error.textContent =
          "You have Already completed matching. Try different one";
      } else {
        match.completed = true;
        // increase core
        scoreNum += 10;
        success(scoreNum, color);
      }
    } else {
      liveNum = liveNum - 1;
      failure(liveNum);
    }
  }
});

function ChangeBackground(color) {
  body.style.backgroundColor = color;
  setTimeout(() => (body.style.backgroundColor = "white"), 2000);
}

function success(scoreNum, color = "red") {
  score.textContent = scoreNum;
  ChangeBackground(color);
  if (scoreNum === 90) {
    error.style.backgroundColor = "Green";
    error.innerHTML = "<h1>You Won! Start Again!</h1>";
    // reset default live and score
    liveNum = 5;
    scoreNum = 0;
    live.innerText = liveNum;
    score.textContent = scoreNum;
    progColors = COLOR_MATCHING;
  }
}

function failure(liveNum) {
  if (liveNum == 0) {
    ChangeBackground("red");
    error.innerHTML = "<h3>Game Over! Start Again!</h3>";
    // reset default live and score
    liveNum = 5;
    scoreNum = 0;
    live.innerText = liveNum;
    score.textContent = scoreNum;
    progColors = COLOR_MATCHING;
  } else {
      live.textContent = liveNum;
      error.textContent = "invalid matching";
  }
}
