import React, { useState, useEffect } from "react";
import axios from "axios";

function GameList() {
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
    <div>
      {games.map((game, id) => (
        <h1 key={id}>{game.name}</h1>
      ))}
    </div>
  );
}

export default GameList;
