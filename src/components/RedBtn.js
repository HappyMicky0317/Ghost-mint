import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
class RedBtn extends React.Component{
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
        background-color: #e91818;
        cursor: pointer;
        padding: 10px 15px;
        margin-bottom:0px;
        width:100%;
        height:100%;
        #RedBtnSpan{
          color: #fff;
          font-family: 'Muli',sans-serif;
          font-size: 18px;
          font-weight: inherit;
        }
      
     `
    return (
      <>
        <Btn>
          <span id="RedBtnSpan">{this.state.letter}</span>
        </Btn>
      </>
    )
  }
}

export default RedBtn;
