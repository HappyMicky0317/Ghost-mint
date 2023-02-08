import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const VirtualTerminals = (props) => {
  return (
    <S.Bg>
        <TopImg img="VirtualTerminals1" letter="Virtual Terminals" />
        <S.MainContent>
            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Transaction Express – Virtual Terminal" />
            <div style={{marginTop:'50px'}}>
                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="Host Merchant Services is proud to present Transaction Express, a web-based centralized payment processing system that offers merchants comprehensive, flexible, and user-friendly processing solutions. This system allows you to perform transactions 24 hours a day from any worldwide location with all of the functionality of an electronic countertop terminal. Transaction Express features fully PCI compliant 256-bit secure encrypted traffic as well as data tokenization to ensure the highest level of security during the transfer. For merchants that perform e-commerce on their websites, Transaction Express can supply a link to a custom branded secure online payment page that supports one-time and recurring payments." />
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Transaction Central Capabilities" />
                </div>
                <div className="CentralCapabilities">
                    <div className="row">
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Make-Payroll.svg" />
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="ACH Services" />
                            </div>
                        </div>
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/shopping-basket.svg"/>
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Check Imaging" />
                            </div>
                        </div>
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Recurring-Payments.svg"/>
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Recurring Payments" />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'40px'}}>
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Wireless.svg" />
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Wireless Processing" />
                            </div>
                        </div>
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Fast-Processing.svg"/>
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Batch Processing" />
                            </div>
                        </div>
                        <div className="col-lg-4 row">
                            <div className='col-lg-3 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/hotel.svg"/>
                            </div>
                            <div className='col-lg-9 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Multi Location Networking" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'50px'}}>
                <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="About Virtual Terminals" />
                <div style={{marginTop:'30px'}}>
                    <p>A virtual terminal is an online payment system that allows a merchant to process credit cards and ACH transactions without the card being present. This type of processing is used by businesses that accept credit card payments over the phone, by mail, or online. Virtual terminals (also referred to as online payment gateways) should be selected carefully to ensure the security of the data transfer.</p>
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

export default VirtualTerminals;