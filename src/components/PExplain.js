import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
class PExplain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fontColor:props.fontColor,
      letter: props.letter
    }
  }s


  render() {
    const Spanletter = styled.div`
      #PExplain{
        color:${this.state.fontColor};
        font-family:Muli, sans-serif;
        font-size: 18px;
        font-weight:400;
        line-height:33.4286px;
        vertical-align:baseline;
        letter-spacing:normal;
        word-spacing:0px;
        margin:0px;
        padding:0px;
        font-style:normal;
        font-variant:normal;
      }
    `
    return (
      <>
        <PExplain>
          <p id="PExplain">{this.state.letter}</p>
        </PExplain>
      </>
    )
  }
}

export default PExplain;
