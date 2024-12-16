import { useEffect, useRef, useState } from "react";
import gamePanelStyle from "../style/GamePanel";
import db from "../database";
import LifeScore from "./LifeScore";
import Table from "./Table";
import { Howl } from "howler";
import failedSound from "../assets/sounds/bad-match.aac";
import wonSound from "../assets/sounds/matches.aac";

var listOfAttempts = [];

const InputFields = () => {
  const progRef = useRef(null); // programming input
  const colorRef = useRef(null); // color input
  const btnRef = useRef(null); // match button
  const resultRef = useRef(null); // status of the attempt
  const restartRef = useRef(null); // restart btn
  const fieldsRef = useRef(null); // form fields

  const [prog, setProg] = useState("");
  const [color, setColor] = useState("");
  const [result, setResult] = useState("");
  const [lifeScoreValue, setLifeScoreValue] = useState(5);
  const [title, setTitle] = useState("Remaining Failed Attempt(s)"); // for the score box
  const [changeColor, setChangeColor] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptNum, setAttemptNum] = useState(1);
  const [failStatus, setFailStatus] = useState(false);
  const [winStatus, setWinStatus] = useState(false);

  // define music playground

  useEffect(() => {}, []);

  // validate the form
  useEffect(() => {
    if (
      prog.length < 1 ||
      prog.startsWith(" ") ||
      prog.endsWith(" ") ||
      color.length < 3 ||
      color.includes(" ")
    ) {
      btnRef.current.disabled = true;
    } else {
      btnRef.current.disabled = false;
    }

    /** check if the the game is over or the user has won */
    if (lifeScoreValue == 0) {
      setChangeColor(true);
      setLifeScoreValue(score);
      setTitle("score");
      displayResult("Game Over");
      // remove the input field panel and display the restart button
      fieldsRef.current.style.display = "none";
      restartRef.current.style.display = "";
    }

    if (score == 100) {
      setChangeColor(false);
      setLifeScoreValue(score);
      setTitle("Score");
      displayResult("You Won The Game! Congrats", true);
      // remove the input field panel and display the restart button
      fieldsRef.current.style.display = "none";
      restartRef.current.style.display = "";
    }

    // handle sound play
    if (winStatus) {
      const soundWin = new Howl({
        src: [wonSound],
      });

      soundWin.play();

      setWinStatus(false);
    }

    if (failStatus) {
      const soundFail = new Howl({
        src: [failedSound],
        html5: true,
      });

      soundFail.play();

      setFailStatus(false);
    }
  }, [prog, color, lifeScoreValue, score, winStatus, failStatus]);

  function handleMatching(e) {
    e.preventDefault();

    //   increment the number of attempt to 1
    setAttemptNum(attemptNum + 1);

    // find an possible match
    const guess = db.find((item) => {
      if (item.progLang == prog && item.color == color) {
        return item;
      }
    });

    // verify the existence of the match
    if (guess == undefined) {
      playSounds(false);
      clearInputFields();
      displayResult("Wrong match!");
      setLifeScoreValue(lifeScoreValue - 1);
      // add the attempts to the attempt list
      addAttemptToAttemptList(attemptNum, prog, false, color);
    } else {
      //   if the prog color has been successfully guess
      if (guess.completed) {
        // check for repetition of of successful guess
        playSounds(false);
        clearInputFields();
        displayResult("Don't repeat successful guess!");
        setLifeScoreValue(lifeScoreValue - 1);
        // add the attempts to the attempt list
        addAttemptToAttemptList(attemptNum, prog, false, color);
      } else {
        // the user successfully guesses the prog lang
        // set the object to completed match status
        // change the background color of input fields to the corresponding color for 1 second

        bgAnimation(color);

        guess.completed = true;
        playSounds(true);
        setScore(score + 5);
        clearInputFields();
        displayResult("Congrats", true);
        // add the attempts to the attempt list
        addAttemptToAttemptList(attemptNum, prog, true, color);
      }
    }
  }

  function playSounds(status) {
    if (status) {
      setWinStatus(true);
      console.log("success sound");
    } else {
      console.log("failed sound");
      setFailStatus(true);
    }
  }

  function clearInputFields() {
    // set the value of prog and color fields to ""
    progRef.current.value = "";
    colorRef.current.value = "";
    // reset the value of prog and color to ""
    setProg("");
    setColor("");
  }

  function displayResult(msg, status = false) {
    /* Return the status of a match attempt. */
    if (status) {
      resultRef.current.style.color = "green";
      setResult(msg);
    } else {
      resultRef.current.style.color = "red";
      setResult(msg);
    }
  }

  function handleRestart() {
    restartRef.current.style.display = "none";
  }

  function addAttemptToAttemptList(attemptNum, prog, status, color) {
    //   add the attempt to the attempt list
    let attp = {
      attemptNum: attemptNum,
      prog: prog,
      status: status,
      color: color,
    };
    listOfAttempts.push(attp);
  }

  function handleProgChange() {
    setProg(progRef.current.value.toLocaleLowerCase());
    setResult("");
  }

  function handleColorChange() {
    setColor(colorRef.current.value.toLocaleLowerCase());
    setResult("");
  }

  function bgAnimation(color) {
    fieldsRef.current.style.backgroundColor = color;
    setTimeout(() => {
      fieldsRef.current.style.backgroundColor = "#fff";
      setTimeout(() => {
        fieldsRef.current.style.backgroundColor = color;
      }, 500);

      setTimeout(() => {
        fieldsRef.current.style.backgroundColor = color;
      }, 900);

      setTimeout(() => {
        fieldsRef.current.style.backgroundColor = "#fff";
      }, 1000);
    }, 300);
  }

  return (
    <>
      <LifeScore
        value={lifeScoreValue}
        title={title}
        changeColor={changeColor}
      />

      <form style={gamePanelStyle.form}>
        <div>
          {/* display results */}
          <div style={gamePanelStyle.matchResult} ref={resultRef}>
            <h4>{result}</h4>
          </div>

          <div ref={fieldsRef} style={gamePanelStyle.formBox}>
            {/* form  fields */}
            <div>
              <span>Programming Language</span>
              <p>
                <input
                  ref={progRef}
                  placeholder="Programming Language"
                  onChange={handleProgChange}
                  style={gamePanelStyle.input}
                />
              </p>
            </div>

            <div>
              <span>Programming Color</span>
              <p>
                <input
                  ref={colorRef}
                  placeholder="Programming Color"
                  onChange={handleColorChange}
                  style={gamePanelStyle.input}
                />
              </p>
            </div>
            <div style={gamePanelStyle.btnBox}>
              <button
                style={gamePanelStyle.btn}
                ref={btnRef}
                onClick={handleMatching}
                type="submit"
              >
                Match checking
              </button>
            </div>
          </div>
          {/* restart button */}
          <div style={gamePanelStyle.btnBox}>
            <button
              style={gamePanelStyle.restartBtn}
              ref={restartRef}
              onClick={handleRestart}
              type="submit"
            >
              Restart the Game
            </button>
          </div>

          {/* table of attemps */}
          <Table listOfAttempts={listOfAttempts} />
        </div>
      </form>
    </>
  );
};

export default InputFields;
