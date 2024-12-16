import { useEffect, useRef } from "react";
import tableStyle from "../style/table";

const TableRow = (props) => {
  const { attemptNum, prog, status, color } = props;
  const progRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    progRef.current.style.backgroundColor = color;
  }, [color]);

  return (
    <tr>
      <td style={tableStyle.tdth}>{attemptNum}</td>
      <td ref={progRef} style={tableStyle.tdth}>
        {prog}
      </td>
      {status ? (
        <td style={tableStyle.tdth}>V</td>
      ) : (
        <td style={tableStyle.tdth}>X</td>
      )}
    </tr>
  );
};
export default TableRow;
