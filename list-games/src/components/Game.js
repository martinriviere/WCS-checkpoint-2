import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

function Game({ game, deleteGame }) {
  const genreColor = genreId => {
    switch (genreId) {
      case 1:
        return "primary";
      case 2:
        return "secondary";
      case 3:
        return "success";
      case 4:
        return "danger";
      case 5:
        return "warning";
      case 6:
        return "info";
      case 7:
        return "dark";
      default:
        return "light";
    }
  };

  return (
    <div className="mt-3">
      <Card>
        <CardImg top width="100%" src={game.background_image} alt={game.name} />
        <CardBody>
          <CardTitle>{game.name}</CardTitle>
          <CardSubtitle>
            Genre:{" "}
            {game.genres.map((genre, id) => (
              <Badge color={genreColor(genre.id)} className="mr-1" key={id}>
                {genre.name}
              </Badge>
            ))}
          </CardSubtitle>
          <CardSubtitle className="mt-1">
            Rating: <Badge>{game.rating}</Badge>
          </CardSubtitle>
          <Row className="mt-3" style={{ margin: "auto" }}>
            <Col className="text-center">
              <Link to={`jeu/screenshot/${game.id}`}>
                <Button className="m-1">View screenshots</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                onClick={() => deleteGame(game.id)}
                color="danger"
                className="m-1"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default Game;
