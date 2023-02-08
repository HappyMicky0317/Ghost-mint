import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`
export const TopImage = styled.div`
    background-image: url(${Images.Pricing1});
    background-color: #ccc;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    height:400px;
    div{
      background-color:rgba(0,0,0,0.4);
      height:100%;
      text-align:center;
      h1{
        color:#ffffff;
        font-family:Montserrat, sans-serif;
        font-size:48px;
        font-weight:900;
        position: relative;
        top: 230px;
      }
      p{
        color:#ffffff;
        font-family:Montserrat, sans-serif;
        font-size:35px;
        font-weight:900;
        position: relative;
        top: 230px;
      }
    }
`

export const TransactionPricing = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 50px auto 0px auto;
    border-radius: 10px;
    text-align: center;
    padding-left:15px;
    padding-right:15px;
    span{
      color:rgb(233, 24, 24);
      font-family:Montserrat, sans-serif;
      font-size:42px;
      font-weight:900;
      margin-top:30px;
    }
    p { 
        margin-top:10px;
        font-size: 18px;
        word-spacing: 1px;
        letter-spacing:normal;
        word-wrap: break-word;
        color: #3a3a3a;
        font-family: 'Muli',sans-serif;
        font-weight: 400;
        line-height: 33.4286px;
    }
    a{ 
      color:rgb(233, 24, 24) !important;
      margin-top:10px;
      font-size: 18px;
      font-family: 'Muli',sans-serif;
      font-weight: 400;
      text-decoration:underline!important;
      cursor:pointer;
    }
    a:hover{
      color:rgb(58, 58, 58) !important;
    }
    .row{
      margin-top:70px;
      .col-lg-4{
        .shadowBox{
          box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
          .top{
            background-color:#e91818;
            padding:20px 0;
          }
          .second{
            padding:0 20px;
            .borderLine{
              border-bottom: 1px solid rgba(58, 58, 58,0.3);
              padding:30px 0;
            }
          }
          .third{
            padding 0 20px;
            img{
              width:20px;
            }
            span{
              line-height:32.7143px;
            }
            .textDecoration {
              span{
                text-decoration:line-through;
              }
            }
          }
        }
      }
    }  
`

export const ActualCost = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 120px auto 50px auto;
    border-radius: 10px;
    text-align: center;
    padding-left:15px;
    padding-right:15px;
    span{
      color:rgb(233, 24, 24);
      font-family:Montserrat, sans-serif;
      font-size:42px;
      font-weight:900;
      margin-top:30px;
    }
    p { 
        margin-top:10px;
        font-size: 18px;
        word-spacing: 1px;
        letter-spacing:normal;
        word-wrap: break-word;
        color: #3a3a3a;
        font-family: 'Muli',sans-serif;
        font-weight: 400;
        line-height: 33.4286px;
    }
    .row{
      margin-top:70px;
      .col-lg-4{
        .shadowBox{
          box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
          .top{
            padding:30px 20px;
            p{
              color:#686868;
              font-family:Muli, sans-serif;
              font-size:16px;
              line-height:29.7143px;
              span{
                color:#686868;
                font-family:Muli, sans-serif;
                font-size:16px;
                line-height:29.7143px;
                font-weight:600;
              }
            }
          }
          .second{
            border-radus
            .dark{
              background-color:#e8e8e8;
            }
            .detail{
              p{
                font-size:15px;
                margin:5px 0;
              }
              padding 0 20px;
              img{
                width:20px;
              }
              span{
                line-height:32.7143px;
              }
              .textDecoration {
                span{
                  text-decoration:line-through;
                }
              }
            }
            .detail:hover{
              background-color:red;
              p{
                color:white;
              }
            }
          }
        }
      }
    }  
`

export const AboutFee = styled.div`
  width:100%;
  background-color: #2b2b2b;
  padding:50px 15px;
  padding-bottom:70px;
  div{
    max-width: 1100px;
    margin:auto;
    .tableDiv{
      border-radius:10px;
      .dark{
        background-color:#e8e8e8;
      }
      background-color:#fff;
      .row{
        .col-lg-6{
          p{
            margin:15px 0;
            color:#3a3a3a;
            font-family:Muli, sans-serif;
            font-size:16px;
            font-weight:400;
          }
        }
      }
      .row:hover{
        background-color:red;
        p{
          color:white;
        }
      }
    }
  }
`

export const SavingsGuarantee = styled.div`
  .row{
    max-width:1100px;
    margin:auto;
    display:flex;
    .left{
      margin:auto
    }
    .imageDiv{
      background-image: url('${Images.Pricing2}');
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: scroll;
      background-size: cover;
      min-height: 400px;
    }
  }
  
`
export  const endContent = styled.div `
  background-image: url(${Images.Pricing3});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  div{
    div{
      justify-content: center;
      margin: 70px auto 0px auto;
      max-width:1120px;
      margin:auto;
      text-align:center;
      .left{
        padding:0;
        display:block;
        text-align:left;
        img{
          width:175px;
        }
        span{
          text-align:left;
          color:#ffffff;
          font-family:Montserrat, sans-serif;
          font-size:45px;
          line-height:58.5px;
          font-weight:900;
        }
      }
      .right{
        display:block
      }
      @media screen and (max-width: 992px) {
            grid-gap: 15px;       
        }
      @media screen and (max-width: 880px) {
          display:block;
          margin:0 20px;
      }
    }
  }
`