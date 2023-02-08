import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`
export const MainContent = styled.div`
  max-width:1100px;
  margin:auto;
  padding:70px 15px;
  .indivs{
    margin-top:30px;
  }
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    text-align:left;
    margin-top:10px;
  }
  .learnMore{
    .col-lg-3{
      .main{
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
        margin-top:50px;
        .learnHeader{
          padding-left:10px;
          padding-rigth:10px;
          padding-bottom:40px;
          margin-top:15px;
        }
        .learnBtn{
          position:relative;
          bottom:0;
        }
      }
    }
  }
  .Benefit{
    margin-top:100px;
    .row{
      margin-top:15px;
      .col-lg-4{
        display:flex;
        .imgPart{
          img{
            width:40px;
          }
        }
        .letterPart{
          margin-top:5px;
          padding-left:20px;
          p{
            line-height:22.4px;
            margin-top:10px;
            font-size:16px;
          }
        }
      }
    }
  }
`

export  const MiddleContent = styled.div `
  background-color:#1c1c1c;
  .content{
    max-width:1100px;
    margin:auto;
    padding-top:50px;
    padding-left:15px;
    padding-right:15px;
    .row{
      margin-top: 15px;
      .col-lg-6{
        span{
          color:#fff!important;
        }
      }
      .checkPart{
         padding-bottom:45px;
      }
      .ComImg{
        img{
          position:absolute;
          bottom:0;
        }
      }
      @media screen and (max-width: 992px) {
          img{
            position:relative!important;
          }      
      }
    }
  }
`

export  const endContent = styled.div `
  background-image: url(${Images.IOSAgent7});
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
        .redSpan{
          text-align:left!important;
          margin-top:20px;
          span{
            color:#e91818;
          }
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