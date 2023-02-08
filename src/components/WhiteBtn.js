import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
class WhiteBtn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      letter: props.letter,
    }
  }s


  render() {
    const Btn = styled.div`
        text-align:center!important;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        cursor: pointer;  
        margin-bottom:0px;
        padding: 10px 15px;
        width:100%;
        border: 2px solid red;
        #WhiteBtnSpan{
          color: #e91818;
          font-family: 'Muli',sans-serif;
          font-size: 18px;
          font-weight: 400;
        }
      
     `
    return (
      <>
        <Btn>
          <span id="WhiteBtnSpan">{this.state.letter}</span>
        </Btn>
      </>
    )
  }
}

export default WhiteBtn;
