import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { CardDeck, Row, Col, Container, Button } from "reactstrap";

function GameList() {
  const [games, setGames] = useState([]);
  const [areBestGamesFiltered, setAreBestGamesFiltered] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await axios.get(
        "https://wild-games.herokuapp.com/api/v1"
      );
      setGames(data);
    };
    fetchGames();
  }, []);

  const deleteGame = gameId => {
    setGames(games.filter(game => game.id !== gameId));
  };

  return (
    <Container>
      <Row>
        <Col className="text-center mt-2">
          <Button
            onClick={() => setAreBestGamesFiltered(!areBestGamesFiltered)}
          >
            {areBestGamesFiltered ? "All games" : "Best Games"}
          </Button>
        </Col>
      </Row>
      <CardDeck>
        <Row>
          {games
            .filter(game => !areBestGamesFiltered || game.rating >= 4.5)
            .map((game, id) => (
              <Col sm="3" key={id}>
                <Game game={game} deleteGame={deleteGame} />
              </Col>
            ))}
        </Row>
      </CardDeck>
    </Container>
  );
}

export default GameList;

// const style = {
//   display: "flex",
//   flexWrap: "wrap"
// };
