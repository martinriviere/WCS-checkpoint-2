import React from "react";
import GameList from "./components/GameList";
import GamesProvider from "./providers/GamesProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
