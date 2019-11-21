import React from "react";
import { Card, CardImg } from "reactstrap";

function ScreenShot({ image }) {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Screenshot" />
    </Card>
  );
}

export default ScreenShot;
