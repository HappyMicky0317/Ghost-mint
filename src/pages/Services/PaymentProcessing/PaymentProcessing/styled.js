import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const ConvertContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 50px auto 0px auto;
    padding: 40px 0px;
    text-align: center;
    p {
        font-size: 18px;
        word-spacing: 1px;
        letter-spacing:normal;
        word-wrap: break-word;
        color: #3a3a3a;
        font-family: 'Muli',sans-serif;
        font-weight: 400;
        line-height: 33.4286px;
        text-align: left;
        a{
            color:red!important;
            cursor: pointer;
        }
    }
`

export const MerchantAccounts = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 20px auto;
    padding: 40px 15px;
    text-align: center;
    color: #fff;
    h1 {
        font-size: 42px;
        color:rgb(233, 24, 24);
        text-align:left; 
        font-weight: 900;
        font-family: Montserrat, sans-serif;   
    }
    .wallets {
        justify-content: center;
        margin: 35px auto 0px auto;
        color: #464646;
        // max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;

        .wallet-icon {
            object-fit: contain;
            margin: 0 auto;
        }
        .wallet {
            text-align: center;
            box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
            .text-block {
                // height: 70px;
                vertical-align: middle;
                padding-left:20px;
                p { 
                    text-align: left;
                    font-size: 16px;
                    // font-weight: bold;
                    line-height: 1.85714285714286;
                    font-family: 'Muli',sans-serif;
                    margin-top: 10px;
                    &.Account-title {
                        font-family :Montserrat, sans-serif;
                        Font being Rendered:Montserrat 100.0% (remote);
                        color:#e91818;
                        font-size:24px;
                        font-weight:900;
                        word-spacing:0px;
                    }
                    &.Account-explain {
                        font-size: 24px;
                        font-weight: 1000;
                        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";  
                        line-height: 1;
                    }
                }
            }
            .wallet-id {
                text-align:center;
                justify-content: space-between;
                align-items: center;
                margin: 16px 0px 0px 0px;
                padding: 10px 15px;
                background-color: red;
                cursor: pointer;
                box-shadow: 0px 5px 0px 0px rgb(1 1 1 / 20%);
                span {
                    color: #fff;
                    font-family: 'Muli',sans-serif;
                    font-size: 18px;
                    font-weight: inherit;
                }
            }
        }
        @media screen and (max-width: 992px) {
            grid-gap: 15px;       
        }
        @media screen and (max-width: 880px) {
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: 1fr;
            max-width: 400px;
        }
    }
`

export const Benefits = styled.div`
    max-width:1120px;
    padding-top:50px;
    margin:20px auto;
    text-align:center;
    padding-left:15px;
    padding-right:15px;
    span{
      color: #db1915;
      font-family:Montserrat, sans-serif;
      Font being:Montserrat;
      font-size:42px;
      font-weight:900;
    }
    div{
      width: 100%;
      text-align: left;
      span{
        font-family:Montserrat, sans-serif;
        font-size:30px;
      }
      p{
        text-align: left;
        font-family :Montserrat, sans-serif;
        font-size:18px;
        line-height: 33.4286px;
        letter-spacing:normal;
        word-spacing:0px;
        font-weight:400;
        margin-top: 10px;
      }
      a{
         color: #db1915!important;
        font-family:Muli, sans-serif;
        font-size:18px;
        text-decoration:underline!important;
        cursor:pointer;
      }
      a:hover{
        color:#3a3a3a!important;
      }
    }
`

export const PaymentProcessing = styled.div`
    
    text-align:center;
    width: 100%;
    max-width: 1120px;
    margin: 20px auto;
    padding: 40px 0px;
    color: #fff;
    padding-left:0px!important;
    h1 {
        font-size: 42px;
        color:#db1915;
        text-align:center; 
        font-weight: 900;
        font-family:Montserrat, sans-serif;   
    }
    .wallets {
        justify-content: center;
        margin: 70px auto 0px auto;
        color: #464646;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;

        .wallet-icon {
            object-fit: contain;
            margin: 0 auto;
        }
        .wallet {
            text-align: center;
            .wallet-icon{
              width:90%;
            }
            .text-block {
                vertical-align: middle;
                padding-left:20px;
                margin-top:40px;
                
                .Account-title {
                    font-family :Montserrat, sans-serif;
                    Font being Rendered:Montserrat 100.0% (remote);
                    color:#e91818;
                    font-size:24px;
                    
                    font-weight:900;
                    word-spacing:0px;
                    line-height:33.6px;
                }
                p{ 
                    color:rgb(58, 58, 58);
                    text-align: left;
                    font-family :Muli, sans-serif;
                    font-size:18px;
                    line-height: 33.4286px;
                    letter-spacing:normal;
                    word-spacing:0px;
                    font-weight:400;
                    margin-top: 10px;
                    
                    strong{
                      font-family (stack):Muli, sans-serif;
                    }
                }
            }
        }
        @media screen and (max-width: 992px) {
            grid-gap: 15px;       
        }
        @media screen and (max-width: 880px) {
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: 1fr;
            max-width: 400px;
        }
    }
    .wallet-id {
        width:42%;
        text-align:center;
        justify-content: space-between;
        align-items: center;
        margin:auto;
        margin-top:20px;
        padding: 10px 15px;
        background-color: red;
        cursor: pointer;
        box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 50%);
        span {
            color: #ffffff;
            font-family: 'Muli',sans-serif;
            font-size: 18px;
            font-weight: 400;
        }
    }
`

export const PaymentProcessingSolution = styled.div`
  max-width:1120px;
  padding-left:0px!important;
  text-align:center;
  margin:auto;
  margin-top:90px;
  h1{
    font-size: 42px;
    color:#db1915;
    text-align:center; 
    font-weight: 900;
    font-family:Montserrat, sans-serif;
    Font being Rendered:Montserrat;
    margin-bottom:70px;
  }
  div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    .content{
        display:block;
        div{
          display:flex;
          .symbol{
            width:50px;
            padding-left:10px;
          }
          div{
            display:block;
            h4{
              text-align:left;
              color:rgb(233, 24, 24);
              font-family:Montserrat, sans-serif;
              font-size:20px;
              font-weight:900;
              cursor:pointer;
             }
          }
          p{
            text-align:left;
            color:rgb(58, 58, 58);
            font-family:Muli, sans-serif;
            font-size:18px;
            line-height:33.4286px;
            font-weight:400;
            letter-spacing:normal;
            word-spacing:0px;
          }
        }
     }
    .img{
      display:block;
      margin:auto;
      padding-right:10px;
      div{
        display:block;
        vertical-align:middle;
        img{
          border-radius:20px;
        }
      }
    }
    @media screen and (max-width: 992px) {
            grid-gap: 15px;       
        }
      @media screen and (max-width: 880px) {
          display:block;
          margin:0 20px;
      }
  }
  p{
    padding:0 10px;
    text-align:left;
    color:rgb(58, 58, 58);
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    font-weight:400;
    letter-spacing:normal;
    word-spacing:0px;
    span{
      color: #c61913;
      text-decoration:underline;
      cursor:pointer;
    }
  }
`
export  const endContent = styled.div `
  background-image: url(${Images.endImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 70px;
  div{
    div{
    justify-content: center;
        margin: 70px auto 0px auto;
      max-width:1120px;
      margin:auto;
      text-align:center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      .left{
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