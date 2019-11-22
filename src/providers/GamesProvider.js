import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GamesContext = createContext();

function GamesProvider(props) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        "https://wild-games.herokuapp.com/api/v1"
      );
      setGames(data);
    };
    fetchGames();
  }, []);

  return (
    <GamesContext.Provider value={{ games: games, setGames: setGames }}>
      {props.children}
    </GamesContext.Provider>
  );
}

export default GamesProvider;
