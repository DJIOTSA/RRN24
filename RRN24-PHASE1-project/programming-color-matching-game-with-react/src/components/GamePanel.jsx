import { useEffect, useRef } from "react";
import gamePanelStyle from "../style/GamePanel";
import GameInfo from "./GameInfo";
import GameBox from "./GameBox";

const GamePanel = () => {
  const gamePanelRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      gamePanelRef.current.style.display = "block";
    }, 4000);
  }, [gamePanelRef]);

  return (
    <section style={gamePanelStyle.gamePanel} ref={gamePanelRef}>
          <GameInfo  />
          <GameBox />
    </section>
  );
};

export default GamePanel;
