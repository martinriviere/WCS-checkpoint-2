import React from "react";
import GameList from "./components/GameList";
import GamesProvider from "./providers/GamesProvider";

function App() {
  return (
    <GamesProvider>
      <GameList />
    </GamesProvider>
  );
}

export default App;
