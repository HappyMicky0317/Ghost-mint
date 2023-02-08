import React from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import Spanletter from './Spanletter';
class ColExplain1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img:Images[props.img],
      header: props.header,
      letter: props.letter
    }
  }s


  render() {
    const Explain = styled.div `
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
        padding-left:10px;
        padding-top:15px;
        padding-bottom:15px;
      .ExplainComp{
        .underline{
          margin-top:5px;
          float:left;
        }
        .col-lg-3{
          display:flex;
        }
        .col-lg-9{
          display:flex;
          div{
            margin:auto;
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
        }
        a{
          font-family:Muli, sans-serif;
          line-height:33.4286px;
          font-weight:400;
          font-size:18px;
          color:red!important;
          cursor:pointer;
        }
        a:hover {
          color:black!important;
        }   
      }
    `
    return (
      <>
        <Explain>
          <div className="ExplainComp row">
            <div className="col-lg-3">
              <img src={this.state.img} />
            </div>
            <div className="col-lg-9">
              <div>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter={this.state.header} />
                <div className="underline" style={{width:'50px',height:'2px',border: '1px solid black'}}>
                </div>
                <p>{this.state.letter}</p>
                <a>&#8250; Details</a>
              </div>
            </div>
          </div>
        </Explain>
      </>
    )
  }
}

export default ColExplain1;
