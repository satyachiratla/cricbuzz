import "../Cricket/Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="head">
        <h1>Matches</h1>
      </div>
      <div className="teams">
        <h1>Mumbai Indians</h1>
        <h2>vs</h2>
        <h1>Chennai Super Kings</h1>
        <div className="actions">
          <button onClick={props.onShowScoreboard}>ScoreBoard</button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
