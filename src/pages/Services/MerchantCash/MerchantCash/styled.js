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
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    a{
      color:#e91818!important;
      cursor:pointer;
      text-decoration:underline!important;
    }
    a:hover{
      color:#3a3a3a!important;
    }
  }
  .header{
    margin-top:50px;
  }
  .content{
    margin-top:20px;
  }
`

export const GetApproved = styled.div`
  background-image:linear-gradient(90deg,#e91818 0%,#af270f 100%);
  margin-top:50px;
  .content{
    max-width:1100px;
    margin:auto;
    padding:70px 15px;
    .whiteBtn{
      display:flex;
      div{
        margin:auto;
      }
    }
  }
`
export const Benefits = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:70px;
  padding-left:15px;
  padding-right:15px;
  .row{
    margin-top:20px;
    display:flex;
    .col-lg-6{
      p{
        color:#3a3a3a;
        font-family:Muli, sans-serif;
        font-size:18px;
        line-height:33.4286px;
        font-weight:400;
      }
      .indivs{
        margin-top:20px;
      }
      img{
        max-height:80%;
        margin:auto;
        border-radius:10px;
      }
    }
  }
`
export const MiddleContent = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:70px;
  padding-left:15px;
  padding-right:15px;
  p{
    color:#3a3a3a;
    font-family:Muli, sans-serif;
    font-size:18px;
    line-height:33.4286px;
    a{
      color:#e91818!important;
      cursor:pointer;
      text-decoration:underline!important;
    }
    a:hover{
      color:#3a3a3a!important;
    }
  }
  .normal{
    margin-top:30px;  
  }
  .HowWork{
    .checkContent{
      margin-top:20px;
      .indivs{
        margin-top:15px;
      }
    }
  }
`

export const BottomContent = styled.div`
  max-width:1100px;
  margin:auto;
  margin-top:50px;
  margin-bottom:70px;
  .row{
    margin-top:50px;
    .col-lg-3{
      img{
        width:42px;
        margin:auto;
      }
      div{
        margin-top:10px;
      }
    }
  }
`

export  const endContent = styled.div `
  background-image: url(${Images.MerchantCash3});
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