import React from 'react';
import styled from 'styled-components';

class SubmitBusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Submit = styled.div`
      background-color: #fff;
      border-style: solid;
      border-width: 0;
      background-clip: border-box;
      border-color: #e91818;
      border-top-width: 8px;
      border-right-width: 8px;
      border-bottom-width: 8px;
      border-left-width: 8px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 50%);
      display:block!important;
      text-align:left;
      margin:auto;
      padding: 30px 15px;
      span{
        color:rgb(233, 24, 24);
        font-family:Montserrat, sans-serif;
        font-size:30px;
        font-weight:900;
      }
      span{
        font-family: Muli, sans-serif;
        color: rgb(121, 0, 0);
      }
      p{
        clear:both;
        color:#6d6d6d;
        font-family (stack):Muli, sans-serif;
        font-size:16px;
        font-weight:400;
        line-height:25.6px;
        vertical-align:baseline;
        letter-spacing:normal;
        word-spacing:-2px;
        text-align:left;
      }
      input:focus{
        background-color: #F2F2F2;
        border:solid 1px #719ECE;
        box-shadow: none;
        
      }
      form{
          Label{
            color: rgb(58,58,58);
            font-family:Muli, sans-serif;
            font-size:18px;
            font-weight:400;
            letter-spacing: normal;
          }
         
        }
      }
      input{
        font-size: 18px;
        font-weight: 400;
        font-family: Muli, sans-serif;
        padding-left: 9px;
        background-color: #F2F2F2;
        
      }
      select{
        font-size: 18px;
        font-weight: 400;
        font-family: Muli, sans-serif;
        padding-left: 9px;
        background-color: #F2F2F2;
      }
      .explain{
        font-family: Muli, sans-serif;
        font-weight: 400;
        color: rgb(109, 109, 109);
        font-size: 16px;
      }
      #submit{
        background: #c61913;
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
        width: 137px;
        height:47px;
        color: #fff;
        background-color: #e91818;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 35px;
        padding-right: 35px;
        white-space: normal;
        border-radius: 2px;
        font-family: Muli, sans-serif;
        font-weight: 400;
        font-size:18px;
        text-shadow: none;
        cursor: pointer;
        border:none;
        margin-top:30px;
        display:block;
      }
      @import url('https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap');
      *{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .form-group{
         display: block;
         text-align: left;
         margin-top: 10px;
         margin-bottom: 10px;
      }
      .wrapper{
        min-height: 100px;
        min-width: 180px;
        align-items: left;
        border-radius: 5px;
        margin: 5px;
        padding: 10px 5px;
      }
      .wrapper .option{
        height: 40px;
        width: 77px;
        display: flex;
        font-family: Muli, sans-serif;
        font-size:15px;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        padding: 0 3px;
        margin-right: 10px;
        
        border: 2px solid lightgrey;
        transition: all 0.3s ease;
      }
      .wrapper .option .dot{
        height: 15px;
        width: 15px;
        background: #d9d9d9;
        border-radius: 50%;
        position: relative;
        margin-right: 0;
      }
      .wrapper .option .dot::before{
        position: absolute;
        content: "";
        top: 4px;
        left: 4px;
        background: rgb(0, 128, 0);
        border-radius: 50%;
        opacity: 0;
        transform: scale(1.5);
        transition: all 0.3s ease;
      }
      input[type="radio"]{
        display: none;
      }
      #option-1:checked:checked ~ .option-1,
      #option-2:checked:checked ~ .option-2{
        border-color: rgb(0, 128,0);
        background: rgba(0, 80, 0, 0.15);
      }
      #option-1:checked:checked ~ .option-1 .dot,
      #option-2:checked:checked ~ .option-2 .dot{
        background: rgb(0, 128,0);
      }
      #option-1:checked:checked ~ .option-1 .dot::before,
      #option-2:checked:checked ~ .option-2 .dot::before{
        opacity: 1;
        transform: scale(1);
      }
      .wrapper .option span{
        font-size: 15px;
        color: #808080;
      }
      .submit-title{
        color: rgb(233,24,24);
      }
      .ready-hidden{
        margin-top:40px;
      }
      section>nav>label{
        font-family: Muli, sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: rgb(58,58,58)
      }
      @media(max-width:900px) {
        .right{
          display: none;
        }
        .part1, .part2{
          padding-right: 10px !important;
          
        }
        .hidden-one{
          display: block;
        }
        .ready-hidden{
          display: none !important;
        }
        .option{
          margin-bottom: 5px;
        }
        .right{
          margin:0px !important;
        }
        form>div{
          width: 100% !important;
        }
        form{
        div{
          display: inline-block;
          input{
            border:none;
            width:100%;
          }
        }
        #extension2{
          width: 90%;
         }
        .whole-part{
          margin: 0;
        }
        .form-group{
         margin: 0 ;
        }
        .currently-one{
          margin-left:0;
        }
    `;

    return (
      <>
        <Submit id="submit-box">
          <span className="submit-title">Let's Get Started!</span>
          <p className="explain">Fill out the fields below and a Host Merchant Services representative will contact you.
            Your submitted information is private and secure.</p>
          <form onSubmit="">
            <div className="whole-part row">
              <div className="name-part col-md-6">

                <div className="form-group">
                  <label>Name <span style={{ fontSize: '20px' }}>*</span></label>
                  <input type="text" className="form-control" id="firstName" name=""/>
                </div>

              </div>
              <div className="col-md-6">
                <div className="form-group ready-hidden">
                  <input type="text" className="form-control" id="lastName" name=""/>
                </div>
              </div>
                <div className="form-group">
                  <label>Business Location <span style={{ fontSize: '20px' }}>*</span></label>
                  <input type="text" className="form-control" id="business" name=""/>
                </div>
                <div className="form-group" >
                  <label>Phone Extension <span style={{ fontSize: '20px' }}>*</span></label>
                  <input type="text" className="form-control" id="extensiion" name=""/>
                </div>
              </div>

            <div className="form-group" >
              <label>Estimated Monthly Volume</label>
              <select className="form-control" id="extension2" name="" placeholder="Phone Extension">
                <option>Under $5k</option>
                <option>$5k - $20k</option>
                <option>$20k - $50k</option>
                <option>Over $50k</option>
              </select>
            </div>
          </form>
          <input id="submit" type="submit"/>
        </Submit>
      </>
    );
  }
}

export default SubmitBusinessForm;
