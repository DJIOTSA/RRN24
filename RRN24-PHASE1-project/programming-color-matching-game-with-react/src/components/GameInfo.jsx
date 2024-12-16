import { useEffect, useRef } from "react";
import gamePanelStyle from "../style/GamePanel";

const GameInfo = () => {
  const gameInfoRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      gameInfoRef.current.style.display = "none";
    }, 12000);
  }, [gameInfoRef]);

  return (
    <section style={gamePanelStyle.gameInfo} ref={gameInfoRef}>
      <div>
        <h2>How to play?</h2>
        <br />
        <h4>
          1.    To win the game you must successfully guess 20 programming languages
          colors.
        </h4>
        <br />
        <h4>2.  You have up to 5 failed attempts</h4>
        <br />
        <h4>3.  Repetition of a completed match is a failed attempts</h4>
        <br />
        <h4>4.  Your score appear at the end of the game</h4>
      </div>
    </section>
  );
};
export default GameInfo;
