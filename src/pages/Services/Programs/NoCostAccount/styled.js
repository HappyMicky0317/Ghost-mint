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
    margin-top:40px;
  }
  .row{
    margin-top:50px;
    .imgPart{
      display:flex;
      img{
        margin:auto;
        border-radius:10px;
      }
    }
  }
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    text-align:left;
    margin-top:10px;
    a{
      color:#e91818!important;
      text-decoration:underline!important;
      cursor:pointer;
    }
    a:hover{
      color:#3a3a3a!important;
    }
  }
`
export  const endContent = styled.div `
  background-image: url(${Images.ApplyMerchantCash2});
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