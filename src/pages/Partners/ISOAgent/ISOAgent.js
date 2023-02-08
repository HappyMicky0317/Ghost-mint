import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import RedBtn from 'src/components/RedBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';
import CheckWord from 'src/components/CheckWord';


const ISOAgent = (props) => {
  return (
    <S.Bg>
      <TopImg img="IOSAgent1" letter="Independent Sales Rep Agent Program" />
      <S.MainContent>
        <div className="indivs">
          <p>As a sales rep, agent, or organization you want to promote a service that’s easy to sell and has high growth potential. Offering a wide range of quality products and services and five star rated customer service, our independent sales agents see more growth. Our focus on quality helps close more leads and retain customers.</p>
        </div>
        <div className="indivs">
          <p>Host Merchant Services offers the tools you need to be successful, setting our sales agents/organizations above the rest of the pack. Sell more services – credit card processing, point of sale, and merchant cash advances.</p>
        </div>
        <div className="row learnMore">
          <div className="col-lg-3 col-md-6">
              <div className="main">
                <div>
                  <img src={Images.IOSAgent2} />
                </div>
                <div className="learnHeader">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="Account Management Portal" />
                </div>
                <div className="learnBtn">
                  <RedBtn letter="LEARN MORE" />
                </div>
              </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="main">
              <div>
                <img src={Images.IOSAgent3} />
              </div>
              <div className="learnHeader">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="Full Visibility of Accumulated Residuals" />
              </div>
              <div className="learnBtn">
                <RedBtn letter="LEARN MORE" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="main">
              <div>
                <img src={Images.IOSAgent4} />
              </div>
              <div className="learnHeader">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="Paid On-time and Accurately" />
              </div>
              <div className="learnBtn">
                <RedBtn letter="LEARN MORE" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="main">
              <div>
                <img src={Images.IOSAgent5} />
              </div>
              <div className="learnHeader">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="Dedicated Point of Contact" />
              </div>
              <div className="learnBtn">
                <RedBtn letter="LEARN MORE" />
              </div>
            </div>
          </div>
        </div>
        <div className="Benefit">
          <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="center" letter="Benefits Of HMS" />
          <div className="row">
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Fast-Processing.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Fast Approvals" />
                <p>Increased speed = increased sales.</p>
                <p>Don’t let your deals linger, get approvals fast!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/005-point-of-service.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Bonsai Point of Sale" />
                <p>Become one of the elite selling Bonsai point of sale systems. Offering high quality and affordable systems gives you sales leverage as well as increasing customer retention.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/008-responsive.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Marketing Support" />
                <p>We offer a full range of training and marketing resources giving you every opportunity for success.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/001-customer-service.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Top Rated Customer Service" />
                <p>Impress and retain customers with our top of the line customer service. Online reviews rave about it!!!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Make-Payroll.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Fast, Accurate Residuals" />
                <p>You deserve to get the best treatment. With Host Merchant Services you will get paid accurately and on time.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/shopping-basket.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Products and Services" />
                <p>Offer a complete line of products and services to cross-sell your merchants.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/007-padlock.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Easy PCI Security" />
                <p>We handle PCI compliance quickly and easily leaving you and your merchants more time to conduct business.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imgPart">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/008-responsive.svg" />
              </div>
              <div className="letterPart">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Online Reporting" />
                <p>24/7 online access to a full suite of reporting, helping you track merchants and activity.</p>
              </div>
            </div>
          </div>
        </div>
      </S.MainContent>
      <S.MiddleContent>
        <div className="content">
          <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Host Merchant Services Payment Processing Advantages:" />
          <div className="row">
            <div className="col-lg-6">
              <CheckWord letter="Flexible merchant pricing" />
            </div>
            <div className="col-lg-6">
              <CheckWord letter="American Express OptBlue Program" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <CheckWord letter="Next day funding" />
            </div>
            <div className="col-lg-6">
              <CheckWord letter="24x7x365 U.S. based customer service" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <CheckWord letter="Fast approvals" />
            </div>
            <div className="col-lg-6">
              <CheckWord letter="Mobile payment solutions" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <CheckWord letter="Accurate commissions" />
            </div>
            <div className="col-lg-6">
              <CheckWord letter="Online reporting" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 checkPart">
              <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Partner portal with full visibility" />
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Real-time data (up to last run batch)" />
              </div>
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Merchant account reporting" />
              </div>
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Filter by boarding partner" />
              </div>
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Cloud-based, accessible" />
              </div>
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Easily create support tickets" />
              </div>
              <div style={{marginTop:'15px'}}>
                <CheckWord letter="Daily, weekly, monthly, and custom reports" />
              </div>
            </div>
            <div className="col-lg-6 ComImg">
              <img src={Images.IOSAgent6} />
            </div>
          </div>
        </div>
      </S.MiddleContent>
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

export default ISOAgent;