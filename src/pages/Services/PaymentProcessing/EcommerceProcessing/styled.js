import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const SolutionsAndIntegrations = styled.div`
    .content{
      padding 70px 10px;
      max-width:1100px;
      margin:auto;
      span{
        line-height:54.6px!important;
      }
      .explain{
        margin-top:30px;
        p{
          color:#3a3a3a;
          font-family:Montserrat, sans-serif;
          line-height:33.4286px;
          font-weight:400;
          font-size:18px;
          span{
            font-family:Muli, sans-serif;
            font-weight:600;
          }
          a{
            color:#e91818;
            text-decoration:underline!important;
            cursor:pointer
          }
          a:hover{
            color:#3a3a3a;
          }
        }
      }
      .shoppingCarts{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0px;
      }
      .prolems{
        margin-top:30px;
        span{
          line-height:30px!important;
        }
      }
    }
`

export const PaymentsMadeEasy = styled.div`
  background-color:black;
  .content{
    padding:50px 10px;
    max-width:1100px;
    margin:auto;
    .bankAvatar{
      padding-right:100px;
      img{
        width:140px;
        position: absolute;
        bottom: -50px;
        right:20%;
    }
  }

`

export const EComericeAdvantage = styled.div`
  .content{
    max-width:1100px;
    margin:auto;
    padding:50px 10px;
    p{
      color:#000000;
      font-family:Montserrat, sans-serif;
      line-height:33.4286px;
      font-weight:400;
      font-size:18px;
      a{
        color:red;
        text-decoration:underline!important;
        cursor:pointer;
      }
      a:hover {
        color:black;
      }
    }
  }
`

export const AcceptingCards = styled.div`
  background-color:#e91818;
  .content{
    max-width:1100px;
    margin:auto;
    padding-top:50px;
    padding-bottom:50px;
  }
`

export  const EComericeSolution = styled.div `
  .content{
    max-width:1100px;
    margin:auto;
    padding:50px 10px;
    p{
      color:#000000;
      font-family:Montserrat, sans-serif;
      line-height:33.4286px;
      font-weight:400;
      font-size:18px;
      a{
        color:red;
        text-decoration:underline!important;
        cursor:pointer;
      }
      a:hover {
        color:black;
      }
    }
  }
`

export  const endContent = styled.div `
  background-image: url(${Images.MerchantServices3});
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