const gamePanelStyle = {
  gamePanel: {
    display: "none",
  },
  gameInfo: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 3em",
    color: "blue",
  },
  gameBox: {
    display: "none",
  },
  lifeScoreBox: {
    textAlign: "center",
    borderRadius: "10px",
    padding: "1rem 5rem",
    color: "blue",
    display: "flex",
    justifyContent: "center",
  },
  lifeScoreContainer: {
    border: "3px double blue",
    borderRadius: 10,
    padding: "0 20px 0 20px",
  },
  lifeScoreValue: {
    fontSize: "4rem",
    fontWeight: "bold",
  },
  lifeScoreValueRed: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "red",
  },
  lifeScoreTitle: {
    textTransform: "capitalize",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    color: "blue",
  },
  formBox: {
    // display: "grid",
    // gridTemplateColumns: "repeat(1, 1fr)",
    gap: 30,
    textAlign: "center",
    marginTop: 30,
  },
  input: {
    borderTop: "none",
    borderBottom: "0.2px solid blue",
    borderLeft: "none",
    borderRight: "none",
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
    padding: "5px 0 5px",
    color: "blue",
    textAlign: "center",
  },
  matchResult: {
    textAlign: "center",
  },
  btn: {
    margin: 20,
    padding: "10px 15px",
    borderRadius: 10,
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  restartBtn: {
    color: "white",
    backgroundColor: "blue",
    margin: 20,
    padding: "10px 15px",
    borderRadius: 10,
    fontSize: "1.2rem",
    cursor: "pointer",
    display: "none",
  },
  btnBox: {
    display: "flex",
    justifyContent: "center",
  },
};

export default gamePanelStyle;
