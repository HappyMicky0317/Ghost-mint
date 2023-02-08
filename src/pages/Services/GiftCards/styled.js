import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`

export const MainContent = styled.div`
  .topContent{
    padding-left:15px;
    padding-right:15px;
    max-width:1100px;
    margin:auto;
    margin-top:70px;
    p{
      color:#3a3a3a;
      font-family:Muli, sans-serif;
      font-size:18px;
      line-height:33.4286px;
    }
    .bold{
      p{
        font-weight:700;
      }
    }
    .normal{
      margin-top:30px;
      p{
        font-weight:400;
      }
    }
    .checkout{
      .indivs{
        margin-top:20px;
      }
    }
    .linkContent{
      margin-top:50px;
      p{
        font-weight:400;
        a{
          color:#e91818;
          cursor:pointer;
          text-decoration:underline!important;
        }
        a:hover{
          color:#3a3a3a;
        }
      }
    }
  }
  .callUs{
    background-image:linear-gradient(90deg,#e91818 0%,#af270f 100%);
    margin-top:50px;
    .content{
      max-width:1100px;
      padding:50px 15px;
      margin:auto;
      .whiteBtn{
        display:flex;
        div{
          margin:auto;
        }
      }
    }
  }
`

export  const endContent = styled.div `
  background-image: url(${Images.GiftCards2});
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