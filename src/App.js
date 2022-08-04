import { useState } from 'react';
import Card from "./components/UI/card";
import Header from "./components/Layout/Header";
import Scoreboard from "./components/Cricket/Scoreboard";
import Teams from './components/Cricket/Teams';

function App() {

  const [showScoreBoard, setShowScoreBoard] = useState(false);

  const scoreboardShownHandler = () => {
    setShowScoreBoard(true);
  }

  const scoreboardHideHandler = () => {
    setShowScoreBoard(false);
  }

  return (
    <div>
        <Card>
          <Header />
          {showScoreBoard && <Teams onHideScoreboard={scoreboardHideHandler} /> }
          <Scoreboard onShowScoreboard={scoreboardShownHandler} />
        </Card>
    </div>
  );
}

export default App;
