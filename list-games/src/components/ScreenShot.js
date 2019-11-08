import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

function ScreenShot({ image }) {
  return <CardImg top width="100%" src={image} alt={game.name} />;
}

export default ScreenShot;
