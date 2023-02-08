import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
class Spanletter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fontColor:props.fontColor,
      fontSize:props.fontSize + "px",
      letter: props.letter,
      textAlign: props.textAlign,
      fontWeight:props.fontWeight,
    }
  }s


  render() {
    const Spanletter = styled.div`
      text-align: ${this.state.textAlign}!important;
      #Spanlet{
        color:${this.state.fontColor};
        font-family:Montserrat, sans-serif;
        font-size: ${this.state.fontSize};
        font-weight:${this.state.fontWeight};
      }
    `
    return (
      <>
        <Spanletter>
          <span id="Spanlet">{this.state.letter}</span>
        </Spanletter>
      </>
    )
  }
}

export default Spanletter;
