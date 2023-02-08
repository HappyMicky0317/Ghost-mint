import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0
`
export const TopContent = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:70px;
  padding-left:15px;
  padding-right:15px;
  margin-bottom:70px;
  .row{
    margin-top:100px;
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
    .imgPart{
      display:flex;
      img{
        margin:auto;
        border-radius:10px;
      }
    }
  }
`

export  const middleContent = styled.div `
  background-image: url(${Images.PaymentTopImg});
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

export  const bottomContent = styled.div `
  max-width:1100px;
  margin:auto;
  margin-top:100px;
  margin-bottom:100px;
  padding-left:30px;
  padding-right:15px;
  .indivs{
      margin-top:20px;
  }
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    text-align:left;
  }
  .bold{
    p{
      font-weight:900;
    }
  }
  .normal{
    p{
      font-weight:400;
    }
  }
  ul{
    margin-left:20px;
    li{
      margin-left:20px;
      list-style-type:disc;
       a{
        font-family:Muli, sans-serif;
        font-size:18px;
        line-height:33.4286px;
        text-align:left;
        color:#e91818!important;
        cursor:pointer;
      }
      a:hover{
        color:#3a3a3a!important;
      }
    }
  }
`