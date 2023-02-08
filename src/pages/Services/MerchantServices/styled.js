import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Bg = styled.div`
  padding-bottom:0;
  background: url(${Images.background}) no-repeat center center;
  width:100%;
  height:100%;
  background-size:cover;
  overflow:auto;
  .logo {
    margin:auto;
    margin-top:25px;
    width:700px;
  }  
  @media only screen and (max-width: 768px) {
    .logo{
      width:350px;
    }
  }
  @media only screen and (max-width: 320px) {
    .logo{
      width:250px;
    }
  }
`

export const Header = styled.div`
  margin:auto;
  background-color: rgb(70,187,23);
  // border-radius:10px;
  // width: 80%;
  height: 100px;
  .logo-img {
    margin-top:10px;
    width:300px;
    margin-left:70px;
    cursor:pointer;
  }  
  .connect-button {
    width: 280px;
    height:50px;
    padding: 5px;
    background: #ff9800;
    text-align: center;
    border-radius: 30px;
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    white-space: nowrap;
    border: 1px solid transparent;
    user-select: none;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    margin-top:25px;
    margin-bottom:10px;
    font-weight:900 !important;
    float:right;
    margin-right:20px;
  }
  @media only screen and (max-width: 768px) {
    height:120px;
    .logo-img {
      margin:auto;
      width:200px;
    }
    .connect-button{
      width: 150px;
      height:40px;
      font-size: 17px;
      margin-top:10px;
      margin-bottom:10px;
      float:none;
    }
  }
`

export const MainContent = styled.div`
  width: 570px;
  background-color: rgb(234, 251, 131);
  border: 3px solid rgba(19, 58, 19, .7);
  border-radius: 25px;
  margin: auto;
  margin-top: 50px;
  height: auto;
  margin-bottom:200px;
  .address-con {
    text-align:center;
    background-color:rgba(234, 251, 131, .9);
    margin:auto;
    width:500px;
    margin-top:0px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
  }
  .wallet-address{
    font-family: Calibri;
    font-size:22px;
    margin-top:17px;
    display: inline-block;
  }
  .NFT-logo{
    display: block;
    height: 350px;
    width: 350px;
    background: url(${Images.NFTLogo}) no-repeat center center;
    background-size: contain;
    margin:auto;
    margin-top:20px;
    margin-bottom:40px;
    margin-top:50px;
  }
  .cost-con {
    margin:auto;
    margin-top:20px;
    width:400px;
  }
  .cost-word {
    font-size: 1.7rem;
    font-weight: 400 !important;
    word-wrap: break-word;
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    word-break: break-word;
    color: rgb(19 58 19);
    font-variant: tabular-nums;
    line-height: 1.5715;
  }
  .cost-val{
    border:none;
    border-bottom:1px solid #b8cf66;
    background-color:transparent;
    color:red;
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    font-weight: 500 !important;
    font-size:1.7rem;
    width:260px;
  }
  .cost-val:focus{
    outline: none;
  }
  .mintNum-val {
    width:175px;
  }
  .minted-con {
    margin:auto;
    margin-top:20px;
    width:400px;
  }
  .mint-word {
    font-size: 1.6rem;
    font-weight: 400 !important;
    letter-spacing:-1px;
    word-wrap: break-word;
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    word-break: break-word;
    color: rgb(19 58 19);
    font-variant: tabular-nums;
    line-height: 1.5715;
    word-spacing:-1px;
  }
  .mint-value {
    color:red;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing:-1px;
    word-wrap: break-word;
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    word-break: break-word;
    font-variant: tabular-nums;
    line-height: 1.5715;
  }
  .mint-button {
    margin:auto;
    margin-top:50px;
    margin-bottom: 30px;
    width: 350px;
    padding: 5px;
    background: #ff9800;
    text-align: center;
    border-radius: 30px;
    color: #fff;
    font-size: 30px;
    font-weight: 900 !important;
    letter-spacing:5px;
    white-space: nowrap;
    border: 1px solid transparent;
    user-select: none;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    font-family: apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    display:block;
  }
  .NFT-logo{
    display: block;
    height: 300px;
    width: 300px;
    background: url(${Images.NFTLogo}) no-repeat center center;
    background-size: contain;
    margin:auto;
    margin-top:20px;
    margin-bottom:50px;
    margin-top:50px;
  }
  @media only screen and (max-width: 768px) {
    width:350px!important;
    .address-con {
      width:350px;
    }
    .wallet-address{
      font-size:15px;
    }
    .cost-con {
      margin:auto;
      margin-top:20px;
      width:300px;
    }
    .cost-word {
      font-size: 1.2rem;
    }
    .cost-val{
      font-size:1.2rem;
      width:200px;
    }
    .mintNum-val {
      width:139px;
    }
    .minted-con {
      padding-left:25px;
    }
    .mint-word {
      font-size: 1.2rem;
    }
    .mint-value {
      font-size: 1.2rem;
    }
    .mint-button {
      width: 250px;
      font-size: 27px;
    }
   }
   @media only screen and (max-width: 320px) {
    width:270px!important;
    .address-con {
      width:260px;
    }
    .wallet-address{
      font-size:12px;
    }
    .NFT-logo{
      height: 250px;
    }
    .cost-con {
      margin:auto;
      margin-top:20px;
      width:250px;
    }
    .cost-word {
      font-size: 1.2rem;
    }
    .cost-val{
      font-size:1.2rem;
      width:160px;
    }
    .mintNum-val {
      width:100px;
    }
    .minted-con {
      padding-left:5px;
    }
    .mint-word {
      font-size: 1.1rem;
    }
    .mint-value {
      font-size: 1.1rem;
    }
    .mint-button {
      width: 200px;
      font-size: 25px;
    }
   }
`
export const Footer = styled.div`
  background-color:rgb(70,187,23);
  width:100%;
  border-top: 1px solid #40509d;
  height:60px;
  text-align:center;
  .footer-word {
    color:white;
    margin-top:15px;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing:-1px;
    word-wrap: break-word;
    font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
    font-variant: tabular-nums;
    line-height: 1.5715;
    display: inline-block;
  }
  .footer-preword {
    color:#dedaaa;
  }
  @media only screen and (max-width: 320px) {
    .footer-word {
      font-size: 1rem;
    }
  }
`
