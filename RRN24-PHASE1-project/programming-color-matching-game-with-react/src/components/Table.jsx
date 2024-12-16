import tableStyle from "../style/table";
import TableRow from "./TableRow";

const Table = ({ listOfAttempts }) => {
  return (
    <section>
      <table style={tableStyle.table}>
        {/* head */}
        <thead>
          <tr>
            <th style={tableStyle.tdth}>Attempt NO:</th>
            <th style={tableStyle.tdth}>Programing Language</th>
            <th style={tableStyle.tdth}>Status</th>
          </tr>
        </thead>

        {/* body */}
              <tbody>
                  
          {listOfAttempts.map((attp) => {
            return (
              <TableRow
                attemptNum={attp.attemptNum}
                prog={attp.prog}
                color={attp.color}
                status={attp.status}
                key={attp.attemptNum}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default Table;
