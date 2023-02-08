import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
class TopImg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img: "url("+Images[props.img]+")",
      letter: props.letter
    }
  }


  render() {
    const Image = styled.div`
    background-image: ${this.state.img};
    background-color: #ccc;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    height:390px;
    div{
      background-color:rgba(0,0,0,0.4);
      height:100%;
      h1 {
        max-width:1100px;
        position:relative;
        color:#ffffff;
        font-size: 48px;
        margin: auto;
        font-family: Montserrat, sans-serif;
        font-weight:900;
        top:240px;
        text-align:center;
      }
    }
  
    `
    return (
      <>
        <Image>
          <div>
            <h1>{this.state.letter}</h1>
          </div>
        </Image>
      </>
    )
  }
}

export default TopImg;
