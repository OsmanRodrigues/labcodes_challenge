import React from "react";
import { SeparatorStrawStyled, SeparatorStyled } from "./Separator.styled";

export class Separator extends React.Component {
  render() {
    return (
      <SeparatorStyled {...this.props}>
        <SeparatorStrawStyled noLine={this.props?.noLine}/>
      </SeparatorStyled>
    )
  }
}
