import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import Spanletter from './Spanletter';
class CheckWord extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      letter: props.letter
    }
  }


  render() {
    const CheckWord = styled.div`
      .checkWord{
        margin:0!important;
        div{
          display:flex;
          img{
            width:20px;
            margin:auto;
          }
        }
      }
    `
    return (
      <>
        <CheckWord>
          <div className="checkWord" style={{display:'flex',marginTop:'25px'}}>
            <div>
              <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
            </div>
            <div style={{marginLeft:'10px'}}>
              <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter={this.state.letter} />
            </div>
          </div>
        </CheckWord>
      </>
    )
  }
}

export default CheckWord;
