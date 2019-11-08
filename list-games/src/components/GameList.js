import React, { useState, useContext } from "react";
import Game from "./Game";
import { CardDeck, Row, Col, Container, Button } from "reactstrap";
import { GamesContext } from "../providers/GamesProvider";

function GameList() {
  const { games, setGames } = useContext(GamesContext);
  const [areBestGamesFiltered, setAreBestGamesFiltered] = useState(false);

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
