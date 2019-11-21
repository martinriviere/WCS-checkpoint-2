import React, { useContext } from "react";
import ScreenShot from "../components/ScreenShot";
import { GamesContext } from "../providers/GamesProvider";
import { Link, useParams } from "react-router-dom";
import { Container, Button } from "reactstrap";

function ScreenShots(props) {
  const { games } = useContext(GamesContext);
  const { gameId } = useParams();
  const currentGame = games.find(game => game.id === parseInt(gameId));
  return games.length > 0 ? (
    currentGame ? (
      <>
        <Container>
          <div>
            {currentGame.short_screenshots.map(screenshot => (
              <ScreenShot image={screenshot.image} key={screenshot.id} />
            ))}
          </div>
        </Container>
        <Link to="/">
          <Button style={{ position: "fixed", top: 16, left: 16 }}>
            Back to list
          </Button>
        </Link>
      </>
    ) : (
      <h1>Pas de jeu à cet identifiant</h1>
    )
  ) : (
    <h1>Loading...</h1>
  );
}

export default ScreenShots;
