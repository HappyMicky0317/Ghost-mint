import styled from 'styled-components';
import Images from 'src/theme/Images';

export const Footer = styled.footer`
    display: block;
    padding:0;
    color: #fff;
    a{
      transition: 0.3s;
    }
    a:hover{
      color: rgb(233, 24, 24)
    }
    .phone_icon_image{
        margin-right: 4px;
        height: 25px;
        width: 25px;
     }
     .email_icon_image{
        margin-right: 4px;
        height: 25px;
        width: 25px;
     }
    .social_icon_image {
        padding: 7px;
        height: 30px;
        width: 30px;
    }
    .social-link-div {
        width:30px;
        border-radius: 20%;
        margin-right: 20px;
    }
    .social-link-div:hover {
        background-color: rgb(233, 24, 24);
    }
    .default-font-style{
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: rgb(134, 134, 134);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
        }
    ul{
        line-height: 30px;
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: white;
        font-weight:400;
        font-style:normal;
        font-variant:normal;
    }
    .section {
        width: 100%;
        background-color: #111;
        margin: 0 auto;
        min-height: 81px;
    }

    .footer-link {
        text-align:left;
        margin:auto;
        max-width: 1100px;
    }
    .text-deco{
      text-decoration: underline !important;
      margin-left: 4px;
      text-decoration-color: rgb(233,24,24);
    }
    .bottom-section{
        max-width:1100px;
        margin: 0 auto;
        padding: 20px;
        
        div {
          
          font-family: Muli, sans-serif;
          font-size:16px !important;
          color: white;
          font-weight: 100;
          line-height:29.7143px;
          text-align: center;
          font-style:normal;
          font-variant:normal;
          margin: 0;
        }
        
    }

    .item-title {
        margin-block-start: 1.67em;
        margin-block-end: 1.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px; 
        color: #868686;
        font-size: 17px;
        font-weight: bolder;
    }

    .top-section {
        background-image: url(${Images.BackgroundCrypto});
        padding: 60px 0px;
        text-align: center;

        h1 {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #1f1666;
            max-width: 730px;
            margin: auto;

            @media screen and (max-width: 768px) {
                font-size: 30px;
                br {
                    display: none;
                }
            }
            @media screen and (max-width: 575px) {
                font-size: 24px;
            }
        }

        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            margin-top: 30px;

            .logo-text {
                width: 160px;
                object-fit: cover;
            }
    
            .logo-btc {
                width: 100px;
                object-fit: cover;
                margin-left: 30px;
            }
        }
        
        .logo-button {
            display: inline-block;
            font-size: 28px;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            background-color: #1f1666;
            margin-top: 30px;
        }
    }

    .list-section {
        
        .list-container {
            padding: 80px 50px 50px;
            background-color: #1c1c1c;
            // border-radius: 10px;
            text-align:center;
  
            .list-item {
                margin: 10px 16px;
                .item-title {
                    font-size: 24px;
                    font-weight: bold;                    
                }

               
            }
        }
    }
@media(max-width:800px) {
  *{
    text-align: center;
  }
  .social-link-box{
    justify-content: center;
  }
  .section{
    height: auto;
  }
  .wrapper{
    height: 300px;
  }
  .phone-box, .email-box{
    justify-content: center;
  }
}
    


`;
