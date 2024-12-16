/* some abbreviations:
    - prog      >   programming
    - Lang      >   Language
    - Ref       >   Reference
*/

import { useRef } from "react";
import headerStyle from "../style/header";

export const DisplayProgLang = ({ progLang, color }) => {
  const progColorRef = useRef(null);

  let darkColors = ["rust", "ruby", "factor", "perl", "java", "python"];

  function handleClick() {
    progColorRef.current.textContent = color;
    setTimeout(() => {
      progColorRef.current.textContent = "";
    }, 400);
  }

  return (
    <div
      onClick={handleClick}
      title={color}
      style={headerStyle.displayProgLang}
    >
      <div style={{ backgroundColor: color, padding: "2px" }}>
        <div ref={progColorRef}>{/** display the name of the color  **/}</div>

        {/* display progLang base on their corresponding color */}
        {darkColors.includes(progLang) ? (
          <span style={{ color: "white" }}>{progLang}</span>
        ) : (
          <span>{progLang}</span>
        )}
      </div>
    </div>
  );
};
