import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const ApplyMerchantCash = (props) => {
  return (
    <S.Bg>
        <TopImg img="ApplyMerchantCash1" letter="Apply For A Merchant Cash Advance With 3 Easy Steps" />
        <S.TopContent>
          <div className="content">
            <p>Please fill out the form below for a no-obligation quote on a cash advance. We will present solutions that best fit your needs and explain them in detail to help you choose the right advance for your business. Once you accept, we will get you your working capital in as little as 24hrs.</p>
          </div>
          <div className="content">
            <p><strong>BONUS:</strong> Flexible payment options allow you to choose how to pay it back including daily and weekly ACH payments.</p>
          </div>
          <div className="header">
            <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Why Would You Need Working Capital?" />
          </div>
          <div className="content">
            <p>In today’s competitive market, you can get your business up and running or make the upgrades you need sooner than you think by securing<strong> a merchant cash advance.</strong> Use it to fund payroll, buy equipment, open new locations, hire staff and more. If you need working capital and need it fast, HMS is here to help. See if a <a>merchant cash</a> advance is right for your business.</p>
          </div>
        </S.TopContent>
      <S.BottomContent>
        <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Get What You Need" />
        <div className="row">
          <div className="col-lg-4">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Easy-Application.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Step 1 - Info" />
            <p>This one’s easy – Fill in the form on the bottom of this page</p>
          </div>
          <div className="col-lg-4">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/shopping-basket.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Step 2 - Options" />
            <p>We find the solutions that fit you best and explain each one to you.</p>
          </div>
          <div className="col-lg-4">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/003-credit.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Step 3 - Money" />
            <p>You get funded in as little as 24hrs! You can use this money without restriction for anything.</p>
          </div>
        </div>
      </S.BottomContent>
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

export default ApplyMerchantCash;