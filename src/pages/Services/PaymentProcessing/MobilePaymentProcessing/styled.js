import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
    max-width:1120px;
    padding:70px 10px;
    margin:auto;
    span{
      line-height:33.4px;
    }
    p{
      color:#000000;
      font-family:Montserrat, sans-serif;
      line-height:33.4286px;
      font-weight:400;
      font-size:18px;
      a{
        color:red!important;
        text-decoration:underline!important;
        cursor:pointer;
      }
      a:hover {
        color:black!important;
      }
    }
    .CardMachines{
      .row{
        padding-top:30px;
        padding-bottom:30px;
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 10%);
        .col-lg-3{
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: scroll;
          background-size: contain;
          width: 300px;
          height: 165px;
        }
        .img1{
          background-image: url(${Images.MobilePaymentProcessing2});
        }
        .img2{
          background-image: url(${Images.MobilePaymentProcessing3});
        }
        .img3{
          background-image: url(${Images.MobilePaymentProcessing4});
        }
        .img4{
          background-image: url(${Images.MobilePaymentProcessing5});
        }
        .col-lg-9{
          padding-top:40px;
          padding-left:30px;
          a{
            margin-top:50px;
            font-family:Montserrat, sans-serif;
            line-height:33.4286px;
            font-weight:400;
            font-size:18px;
            color:red!important;
            text-decoration:underline!important;
            cursor:pointer;
          }
          a:hover {
            color:black!important;
          }
        }
      }
    }
    
`

export  const endContent = styled.div `
  background-image: url(${Images.MobilePaymentProcessing7});
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