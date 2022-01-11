import React from "react";
import { Container } from "react-bootstrap";
import { PongSpinner } from "react-spinners-kit";
import { SpinnerStyled } from "./Spinner.styled";

export class Spinner extends React.Component {
  render() {
    return (
       <Container style={{ height: '100vh' }}>
          <SpinnerStyled>
            <PongSpinner />
          </SpinnerStyled>
        </Container>
    );
  }
}
