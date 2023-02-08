import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import Spanletter from './Spanletter';
import RedBtn from './RedBtn';

class RowExplain1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img:Images[props.img],
      header: props.header,
      letter: props.letter,
      btn: props.btn,
      btnSize: props.btnSize,
    }
  }


  render() {
    const RowExplain = styled.div `
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
        padding-left:0px;
        padding-top:15px;
        height:100%;
      .ExplainComp{
        .headerImg{
          height:220px;
          display:flex;
          img{
            width:230px;
            margin:auto;
          }
        }
        display: contents;
        .header{
          padding-left:10px;
          span{
            line-height:33.4286px!important;
          }
        }
        .content{
          padding-left:10px;
          p{
            padding-bottom:50px;
          }
        }
        p{
          color:#000000;
          font-family:Muli, sans-serif;
          line-height:33.4286px;
          font-weight:400;
          font-size:18px;
          margin-top:15px;
          padding-right:20px;
          text-aling:left;
        }
        .customBtn{
          background-color:#e91818;
          cursor:pointer;
          width:100%;
          text-align:center!important;
          position: absolute;
          width: 91%;
          bottom: 0;
          padding:10px;
          span{
            color:#fff;
            font-size:${this.state.btnSize}px;
          }
         }
      }
    `
    return (
      <>
        <RowExplain>
          <div className="ExplainComp row">
            <div className="headerImg">
              <img src={this.state.img} />
            </div>
            <div className="header">
              <Spanletter fontSize="22" fontColor="#e91818" fontWeight="900" textAlign="left" letter={this.state.header} />
            </div>
            <div className="content">
              <p>{this.state.letter}</p>
            </div>
            <div className="customBtn">
                <span>{this.state.btn}</span>
            </div>
          </div>
        </RowExplain>
      </>
    )
  }
}

export default RowExplain1;
