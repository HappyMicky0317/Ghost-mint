import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import WhiteBtn from 'src/components/WhiteBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';
import CheckWord from 'src/components/CheckWord';


const GiftCards = (props) => {
  return (
    <S.Bg>
        <TopImg img="GiftCards1" letter="Gift Card and Loyalty Programs" />
        <S.MainContent>
            <div className="topContent">
              <div className="bold">
                <p>Custom gift cards and loyalty cards are a great way to encourage repeat business. Host Merchant Services takes all the time and hassle out of the process with complete turn-key solutions that can help you increase customer loyalty with minimal effort. Increase revenues by starting a program today!</p>
              </div>
              <div className="normal">
                <p>We provide our clients with the ability to offer the flexibility and convenience of Gift Cards and Loyalty Programs. These redeemable Transaction Cards let customers make flexible decisions when purchasing your goods or services. Host Merchant Services can customize the program to fit your needs, with options that include:</p>
              </div>
              <div className="checkout">
                <div className="indivs">
                  <CheckWord letter="Gift Card Only" />
                </div>
                <div className="indivs">
                  <CheckWord letter="Loyalty Program Only" />
                </div>
                <div className="indivs">
                  <CheckWord letter="Loyalty Cards Plus Program (Gift Cards + Loyalty)" />
                </div>
              </div>
              <div className="linkContent">
                <p>Host Merchant Services goes that extra mile with its <a>Gift Card and Loyalty Programs,</a> providing our clients with the support and expertise they need to make this work for them. We will make sure your terminal can process Gift Cards. We will help you create your Gift Card’s look and get you started with processing these cards quickly and efficiently.</p>
              </div>
            </div>
            <div className="callUs">
              <div className="content row">
                <div className="col-lg-9">
                  <Spanletter fontSize="30" fontColor="#fff" fontWeight="900" textAlign="left" letter="Call us today and let us find the Gift Card or Loyalty Program that helps your business succeed!" />
                </div>
                <div className="col-lg-3 whiteBtn" style={{paddingRight:'30px'}}>
                  <WhiteBtn letter="SCHEDULE DEMO" />
                </div>
              </div>
            </div>
        </S.MainContent>
        <S.endContent>
          <div style={{backgroundColor:'rgba(0,0,0,0.6)',padding:'70px 0'}}>
            <div className="row">
              <div className="left col-lg-5">
                <img src={Images.LogoWhite} />
                <span>Experience A Higher Level Of Service</span>
              </div>
              <div className="right col-lg-7">
                <SubmitForm />
              </div>
            </div>
          </div>
        </S.endContent>
    </S.Bg>
  );
};

export default GiftCards;