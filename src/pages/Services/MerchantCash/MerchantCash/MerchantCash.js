import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import WhiteBtn from 'src/components/WhiteBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';
import CheckWord from 'src/components/CheckWord';

const MerchantCash = (props) => {
  return (
    <S.Bg>
        <TopImg img="MerchantCash1" letter="Business Cash Advance Solutions" />
        <S.TopContent>
          <div className="content">
            <p>Host Merchant Services offers its clients a quick, low documentation merchant cash advance solution. This cash advance is not a loan. The working capital provided has no restrictions on use, and will let you improve the future of your business by accessing cash now.</p>
          </div>
          <div className="header">
            <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Why Would You Need Working Capital?" />
          </div>
          <div className="content">
            <p>In today’s competitive market, you can get your business up and running or make the upgrades you need sooner than you think by securing<strong> a merchant cash advance.</strong> Use it to fund payroll, buy equipment, open new locations, hire staff and more. If you need working capital and need it fast, HMS is here to help. See if a<a> merchant cash advance</a> is right for your business.</p>
          </div>
        </S.TopContent>
        <S.GetApproved>
          <div className="content row">
            <div className="col-lg-8">
              <Spanletter fontSize="30" fontColor="#fff" fontWeight="900" textAlign="left" letter="You Can Get Approved Today!" />
              <Spanletter fontSize="18" fontColor="#fff" fontWeight="700" textAlign="left" letter="We’ll present you the best options for your situation. Lower credit options available." />
            </div>
            <div className="col-lg-4 whiteBtn" style={{paddingRight:'30px'}}>
              <WhiteBtn letter="GET QUICK APPROVAL NOW" />
            </div>
          </div>
        </S.GetApproved>
      <S.Benefits>
        <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="left" letter="The Benefits of the Cash Advance Program" />
        <div className="row">
          <div className="col-lg-6">
            <p>The Host Merchant Services business cash advance programs can enable you to:</p>
            <div>
              <CheckWord letter="Get working capital fast." />
            </div>
            <div className="indivs">
              <CheckWord letter="Get up to $500,000 in 3 to 5 days." />
            </div>
            <div className="indivs">
              <CheckWord letter="Get a fast cash advance of up to $20,000 within 48 hours." />
            </div>
            <div className="indivs">
              <CheckWord letter="Pre-qualify within 24 hours." />
            </div>
            <div className="indivs">
              <CheckWord letter="No collateral required." />
            </div>
            <div className="indivs">
              <CheckWord letter="No application fees." />
            </div>
            <div className="indivs">
              <CheckWord letter="90% approval rate." />
            </div>
            <div className="indivs">
              <CheckWord letter="Pay as you grow." />
            </div>
          </div>
          <div className="col-lg-6" style={{display:'flex'}}>
            <img src={Images.MerchantCash2} />
          </div>
        </div>
      </S.Benefits>
      <S.MiddleContent>
        <div className="header">
          <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Need to Raise Working Capital Fast?" />
        </div>
        <div className="normal">
          <p>With our programs, you can obtain a cash advance to fund daily expenditures, allow you to do renovations, let you pursue other business ventures that require a cash infusion, or even just expand your current operations. This fast influx of cash can help you upgrade a variety of aspects of your business and it is not a loan so will not affect your credit. Check out the<a> top 5 reasons</a> you need a cash advance to help fund your business!</p>
        </div>
        <div className="HowWork">
          <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="How Does a Business Cash Advance Work?" />
          <div className="checkContent">
            <p>The Merchant Cash Advance program from Host Merchant Services follows these easy steps:</p>
            <div className="indivs">
              <CheckWord letter="Host Merchant Services will find the cash advance partner that fits you best." />
            </div>
            <div className="indivs">
              <CheckWord letter="The partner for this advance purchases a percentage of your future credit card receipts and loans those funds to you up-front." />
            </div>
            <div className="indivs">
              <CheckWord letter="You use the working capital without restriction." />
            </div>
            <div className="indivs">
              <CheckWord letter="The partner that Host Merchant Services provided then deducts a small percentage daily from your credit card sales." />
            </div>
          </div>
          <div style={{marginTop:'30px'}}>
            <p>If you have any more questions about how Host Merchant Services can help grow your business with this fast and <a> easy Merchant Cash Advance</a> program, <a><strong>contact us now.</strong></a></p>
          </div>
        </div>
      </S.MiddleContent>
      <S.BottomContent>
        <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Get What You Need" />
        <div className="row">
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Easy-Application.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Easy Application" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/shopping-basket.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="$5,000 To $500,000" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/003-credit.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Flexible Payments" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/24-Hour-Funding.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="24-Hour Funding" />
          </div>
        </div>
      </S.BottomContent>
      <S.BottomContent>
        <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="center" letter="To Help You" />
        <div className="row">
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Make-Payroll.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Make Payroll" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/hotel.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Open New Locations" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/008-responsive.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Buy Equipment" />
          </div>
          <div className="col-lg-3">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/001-customer-service.svg" />
            <Spanletter fontSize="18" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Hire New Staff" />
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

export default MerchantCash;