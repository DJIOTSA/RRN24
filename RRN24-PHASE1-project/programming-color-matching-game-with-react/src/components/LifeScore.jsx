import gamePanelStyle from "../style/GamePanel";

const LifeScore = ({ value, title, changeColor }) => {
  return (
    <article style={gamePanelStyle.lifeScoreBox}>
      <div style={gamePanelStyle.lifeScoreContainer}>
        {changeColor ? (
          <p style={gamePanelStyle.lifeScoreValueRed}>{value}</p>
        ) : (
          <p style={gamePanelStyle.lifeScoreValue}>{value}</p>
        )}
        <p style={gamePanelStyle.lifeScoreTitle}>{title}</p>
      </div>
    </article>
  );
};
export default LifeScore;
