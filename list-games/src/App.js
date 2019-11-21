import React from "react";
import GamesProvider from "./providers/GamesProvider";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import ScreenShots from "./pages/ScreenShots";

function App() {
  return (
    <GamesProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/jeu/screenshot/:gameId" component={ScreenShots} />
        </Switch>
      </Router>
    </GamesProvider>
  );
}

export default App;
