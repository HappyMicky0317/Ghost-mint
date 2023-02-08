import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import WhiteBtn from 'src/components/WhiteBtn';
import Spanletter from 'src/components/Spanletter';
import RowExplain1 from 'src/components/RowExplain1';
import CheckWord from 'src/components/CheckWord';


const BonsaiPoint = (props) => {
  return (
    <S.Bg>
        <TopImg img="BonsaiPoint1" letter="Bonsai Point of Sale" />
        <S.MainContent>
            <div className="topNav">
                <div className="main">
                  <Spanletter fontSize="24" fontColor="#ffffff" fontWeight="700" textAlign="left" letter="Lower costs of operation, improved sales, and higher customer satisfaction will help make your business a success." />
                </div>
            </div>
            <div className="POSSystem">
              <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Cutting Edge POS Systems" />
              <div className="row">
                  <div className="col-lg-6">
                      <div style={{marginTop:'70px'}}>
                        <CheckWord letter="Lifetime warranty on all hardware" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="EMV, contactless (NFC), and magstripe Equipped" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Features Bonsai Point-of-Sale operating system" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Includes Bonsai Restaurant Analytics app" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Cloud-based POS system- access from anywhere" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Smart software easily customized to your needs" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Intuitive updated interface" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Optimized sales analytics dashboard" />
                      </div>
                      <div className="indivs">
                        <CheckWord letter="Free software updates" />
                      </div>
                      <div className="indivs" style={{marginBottom:'70px'}}>
                        <CheckWord letter="Wholesale price for receipt paper" />
                      </div>
                  </div>
                  <div className="col-lg-6" style={{display:'flex'}}>
                      <img src={Images.BonsaiPoint2} />
                  </div>
              </div>
            </div>
            <div className="midContent row">
              <div className="col-lg-3">
                <RowExplain1 img="BonsaiPoint3" header="Bonsai Point of Sale Workstations" letter="The robust configuration of the Bonsai Workstation is a super powered touchscreen restaurant or retail point of sale. EMV, NFC, and Magstripe payment ready!" btn="WORKSTATION DETAIL 7 PRICING" btnSize="16" />
              </div>
              <div className="col-lg-3" >
                <RowExplain1 img="BonsaiPoint4" header="Bonsai Sales Tools" letter="The Bonsai POS system was designed with speed and efficiency in mind. Whether you are a waitress, store manager, or anything in between Bonsai was designed to help you do your job faster and easier. From super responsive order entry to real-time sales and payroll analytics, Bonsai does it all." btn="TABLE DETAILS & PRICING" btnSize="18" />
              </div>
              <div className="col-lg-3" >
                <RowExplain1 img="BonsaiPoint5" header="Bonsai Management Tools" letter="From payroll to inventory to sales numbers, Bonsai delivers the information you need to make decisions. Put the power of realtime restaurant analytics in your hand. Enhance your ability to run and manage your restaurant with sales, specials, and rush forecasting data." btn="MOBILE ANALYTICS DETAILS" btnSize="18" />
              </div>
              <div className="col-lg-3" >
                <RowExplain1 img="BonsaiPoint6" header="Pricing and Packages" letter="Build the perfect point of sale system for your business. Start with a full workstation and add on what you need. From express (order entry) stations to network print stations and wireless order/inventory tablets." btn="PRICING & PACKAGES" btnSize="18" />
              </div>
            </div>
            <div className="features">
              <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="center" letter="Features" />
              <div className="content row">
                  <div className="col-lg-4">
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/006-pos.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Hardware as a Service" />
                      </div>
                    </div>
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Full service installation and training" />
                      </div>
                    </div>
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/web-browser.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Inventory management and control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/001-customer-service.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="24x7x365 Support" />
                      </div>
                    </div>
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/mobile.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Mobile and stationary solutions" />
                      </div>
                    </div>
                    <div className="indis">
                      <div className="avatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/shopping-basket.svg" />
                      </div>
                      <div className="avatarLabel">
                        <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Receipt paper at cost" />
                      </div>
                    </div>
                  </div>
                <div className="col-lg-4">
                  <div className="indis">
                    <div className="avatar">
                      <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/008-responsive.svg" />
                    </div>
                    <div className="avatarLabel">
                      <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Retail - in person and online" />
                    </div>
                  </div>
                  <div className="indis">
                    <div className="avatar">
                      <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/hotel.svg" />
                    </div>
                    <div className="avatarLabel">
                      <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Salons, professional services, and contractors" />
                    </div>
                  </div>
                  <div className="indis">
                    <div className="avatar">
                      <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/003-credit.svg" />
                    </div>
                    <div className="avatarLabel">
                      <Spanletter fontSize="16" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Integrated, secure credit card processing" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="content row">
                <div className="col-lg-9">
                  <Spanletter fontSize="30" fontColor="#fff" fontWeight="900" textAlign="left" letter="Schedule a Free Live Demo!" />
                </div>
                <div className="col-lg-3 whiteBtn" style={{paddingRight:'30px'}}>
                  <WhiteBtn letter="SCHEDULE DEMO" />
                </div>
              </div>
            </div>
            <div className="endContent">
              <img src={Images.BonsaiPoint7} />
            </div>
        </S.MainContent>
    </S.Bg>
  );
};

export default BonsaiPoint;