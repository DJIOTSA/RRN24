import { useEffect, useRef } from "react";
import headerStyle from "../style/header";
import db from "../database";
import { DisplayProgLang } from "./DisplayProgLang";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      headerRef.current.style.display = "none";
    }, 4000);
  }, [headerRef]);

  return (
    <section style={headerStyle.header}>
      <div>
        <h1 style={headerStyle.title}>RRN 2024 PHASE 1 TASK</h1>

        <p style={headerStyle.gameDescription}>
          Master All The Programming Languages With Their Colors In Less Than 4
          Second And Guess Them! 
        </p>

        <hr />

        <article ref={headerRef} style={headerStyle.database}>
          <p style={{color:"blue", margin: 5}}>Click or hover an element to to see the corresponding color name.</p>
          <div style={headerStyle.databaseProgLang}>
            {db.map((i) => (
              <DisplayProgLang
                key={i.id}
                progLang={i.progLang}
                color={i.color}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
export default Header;
