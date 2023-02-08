import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
    max-width: 1120px;
    margin:auto;
    padding-top:50px;
    padding-left:20px;
    padding-right:20px;
    span{
      line-height:54.6px!important;
    }
    p{
      color:#000000;
      font-family:Muli, sans-serif;
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
`

export  const endContent = styled.div `
  background-image: url(${Images.CloverPOS5});
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