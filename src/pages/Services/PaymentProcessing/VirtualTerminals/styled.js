import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
    max-width:1120px;
    padding:70px 10px;
    margin:auto;
    .CentralCapabilities{
      margin-top:40px;
      @media screen and (max-width: 992px) {
        .row{
            margin-top:0px!important;
        }
        .CapabilitiesImg{
          text-aling:center;
          img{
            margin:auto;
          }
        } 
        .CapabilitiesSpan{
          div{
            text-align: center!important;
          }
        }     
      }
      @media screen and (max-width: 880px) {
          display:block;
          margin:0 20px;
      }
    } 
    div{
      p{
        color:#000000;
        font-family:Montserrat, sans-serif;
        line-height:33.4286px;
        font-weight:400;
        font-size:18px;
      }
    }  
`

export  const endContent = styled.div `
  background-image: url(${Images.VirtualTerminals2});
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