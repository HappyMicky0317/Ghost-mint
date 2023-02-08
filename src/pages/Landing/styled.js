import styled from 'styled-components';
import Images from '../../theme/Images';

export const Bg = styled.div`

.header-image{
  position: relative;
  top: 0px;
  height: 745px;
  width: 100%;
  background-image: url(${Images.PaymentTopImg});
  background-color: grey;
  background-attachment: fixed;
  clip-path: polygon(0% 0%, 100% 0, 100% 86%, 50% 100%, 0 86%);
  background-repeat: no-repeat;
  background-size: cover;
}
.amazing-font-box{
  padding-top: 300px;
  width: 60%;
  margin: 0 auto;
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  color: white;
  font-weight: 900;
}

.button-box>div>div>div{
  margin-top: 60px;
  height: 60px;
  width: 250px;
  font-size: 18px;
  font-weight: 400;
}
.button-div{
  width: 560px;
}
.red-button {
  background-color: red;
  color: white;
  border: none;
  text-align: center;
  padding-top: 19px;
}
.outline-button{
  text-align: center;
  padding-top: 15px;
}
.red-button:hover {
  background-color: #D81815;
}
.learn-button{
  height: 50px;
}
.learn-button>span{
  
  margin: 0 auto;
}

.outline-button{
  background: none;
  border: solid 3px red;
  color: white;
}

.outline-button:hover{
  background-color: red;
}
.card-processing{
  text-align: center;
  width: 1100px;
  padding:80px 5% !important;
  margin: 0 auto;
  
}
.giant-red-font{
  margin: 0 auto;
  color:rgb(219, 25, 21);
  font-weight:900;
  font-size: 42px;
  font-family: Montserrat, sans-serif;
  margin-top: 50px;
}
.content-red-font{
  margin: 0 auto;
  color:rgb(219, 25, 21);
  font-weight:900;
  font-size: 22px;
  font-family: Montserrat, sans-serif
}
.content-font{
  margin: 20px auto;
  font-weight:400;
  width:90%;
  text-align: start;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  
}
.row {
  padding: 0 !important;
  // margin: 0 !important;
  // border: 0 !important;
}
.learn-card{
  margin-top: 60px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.learn-card-title{
  font-weight:900;
  margin-top: 20px;
  font-size: 24px;
  font-family: Montserrat, sans-serif;
   color:rgb(219, 25, 21);
   

}
.learn-button{
  text-align: center;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  padding-top: 10px;
}
.card-content{
  padding: 0 10px;
 }
.learn-card-img{
  width: 100%;
}
.footer-content{
  margin-top: 50px;
}
.review{
  background-color: rgb(233, 24, 24);
  padding: 50px;
}
.review-content{
  width:60%;
  padding: 0;
  margin: 0 auto;
}
.white-mid-font {
  margin: 0 auto;
  color:white;
  font-weight:900;
  font-size: 30px;
  font-family: Montserrat, sans-serif
}
.tel-part{
  width:90%;
  margin: 0 auto;
}
.white-button{
  height: 55px;
  background-color: white;
  box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  width: 190px;
  text-align: center;
  color:rgb(233, 24,24);
  font-weight:400;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  margin: 0 auto;
  padding-top: 15px;
  
}
.tel-content{
padding-top: 15px;
  color:white;
  font-weight:400;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
}

.icon-style{
  width: 40px;
  height: 40px;
}
.default-font-style{
        font-family: Montserrat, sans-serif;
        font-size:16px !important;
        color: rgb(233,24, 24);
        font-weight:900;
        font-style:normal;
        font-variant:normal;
        text-align: start;
    }
.card-content-font{
  font-weight:400;
  width:100%;
  text-align: start;
  font-size: 16px;
  font-family: Montserrat, sans-serif;}
.black-part{
  width: 100%;
  background-color:#1C1C1C;
}
.content-black-part{
  width: 60%;
  margin: 0 auto;
}
.black-content-font{
  line-height: 33.4286px;
  color: white !important;
  text-align: start;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  }
}
.red-phone-button{
  width: 280px;
  height: 55px;
  padding-top: 7px;
  background-color: rgb(233, 24, 24);
  color: white;
  border: none;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
}
.receiver-img{
  width: 80%;
  height: 100%;
  
}
.red-phone-button:hover {
  background-color: #D81815;
}
.athlete-img{
      background-image: url(https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Workout-Gym.jpg);
      background-size: cover;
      
}
.top-rate{
  box-shadow:rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-bottom-left-radius: 50px;
  background-color: white;
}

.top-rate-box{
  width: 70%;
  margin: 0 auto;
}
.logo-img{
  width: 110px;
  height: 75px;
}
.logo-expl>p{
  line-height:33.42px;
}
.logos img{
  width: 150px;
  margin: 40px auto;
}
.logos{
  margin-bottom: 30px;
}
.content-lineheight{
  line-height: 35px;
}
.iso-program{
      background-image: url(https://www.hostmerchantservices.com/wp-content/uploads/2020/06/2471284.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      
}
.call-woman{
    position: absolute;
  bottom: 0;
  
}
.calling{
  padding-top: 40px !important;
  text-align: center;
  width: 1140px;
  padding:0px 5% ;
  margin: 0 auto;
  @media(max-width:1000px) {
  width:100%;
   .call-woman{
    display: none;
   }
  }
}
.news-font-style{
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    line-height: 35px;
    font-weight:900;
    
    
}
.red-board{
  min-height: 430px;
  background-image: url(https://www.hostmerchantservices.com/wp-content/uploads/2020/04/hms-footer-med.jpg);
    background-attachment: scroll;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;  
}
.giant-white-font{
  margin: 0 auto;
  color: white;
  font-weight:900;
  font-size: 42px;
  font-family: Montserrat, sans-serif
}
.red-board-content-font{
  font-size: 25px;
  width: 60%;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  color: white;
  margin: 0 auto;


}
.col-lg-2>.p-1>img{
  margin: 0 auto
}
@media(max-width:800px) {
    .row{
      margin: 0 !important;
    }
    .header-image {
        clip-path: polygon(0% 0%, 100% 0, 100% 95%, 50% 100%, 0 95%);

    }
    
    .amazing-font-box{
      padding-top: 10%;
      width: 90%;
      margin: 0 auto;
      font-family: Montserrat, sans-serif;
      font-size: 48px;
      color: white;
      font-weight: 900;
    }
    .content-font{
      margin: 0 auto;
      
    }
    .content-red-font{
      margin:5px !important;
    }
    .card-processing{
      width: 100%;
      padding-left:0 !important;
      padding-right:0 !important;
    }
    .card-processing>div{
      margin, padding: 0;
    }
    .review{
      margin: 10px;
      padding: 5px;
    }
    .review-content{
      width:100%;
      font-size: 30px;
      text-align: center;
      margin: 0 !important;
      padding: 0 !important;
    }
    .calling{
      width: 100%;
    }
    .call-woman, .receiver-img, .call-woman{
      display: none;
    }
    .content-black-part{
      width: 100%;
    }
    .content-red-font{
      font-size: 20px;
      width: 80%;
      margin: 0 auto !important;
    }
    .top-rate-box{
      width: 100%;
    }
    .top-rate{
      width: 100%;
      border-radius: 0 ;
    }
    .include-star .outline-button .red-button{
      margin: 0 auto !important;
    }
    
}
`