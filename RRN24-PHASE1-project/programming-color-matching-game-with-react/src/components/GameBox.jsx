import { useEffect, useRef } from "react";
import gamePanelStyle from "../style/GamePanel";
import InputFields from "./InputFields";

const GameBox = () => {
  const gameBoxRef = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      gameBoxRef.current.style.display = "";
    }, 12000);
  }, [gameBoxRef]);

  return (
    <article ref={gameBoxRef} style={gamePanelStyle.gameBox}>
      <InputFields />
    </article>
  );
};
export default GameBox;
