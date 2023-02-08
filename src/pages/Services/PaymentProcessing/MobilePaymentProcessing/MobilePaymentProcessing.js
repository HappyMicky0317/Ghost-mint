import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const MobilePaymentProcessing = (props) => {
  return (
    <S.Bg>
        <TopImg img="MobilePaymentProcessing1" letter="Mobile Credit Card Processing" />
        <S.MainContent>
            <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="Mobile payment processing systems allow merchants to accept debit and credit cards without having to be connected to a wire. Most systems integrate with smartphones and tablets but there are also more traditional credit card machines that work on cell service. The biggest benefit of processing through smart devices is the robust interface and point of sale management system that is included. Overall mobile processing is great for businesses on the go. There are many mobile credit card processing systems and a solution for every need. We’ll help you figure out which is best for your business." />
            <div style={{marginTop:'50px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Who Uses Mobile Payment Processing?" />
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="Mobile processing is great for many different business types! Below is al short list of some of the most popular businesses that love mobile processing:" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Food Trucks" />
                            </div>
                        </div>
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Farmers Market" />
                            </div>
                        </div>
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="HVAC / Air Conditioning" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Restaurants" />
                            </div>
                        </div>
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Cafes and coffee shops" />
                            </div>
                        </div>
                        <div style={{display:'flex',marginTop:'25px'}}>
                            <div style={{width:'19px',display:'flex'}}>
                                <img style={{margin:'auto'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                            </div>
                            <div style={{marginLeft:'10px'}}>
                                <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Locksmith and towing services" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <p>These are just a few of the businesses that use mobile processing. Small businesses of all types find mobile systems to be more cost-effective than purchasing a full POS system. A tablet stand will turn your mobile processing solution into a desktop system. Call us to find out how valuable a mobile system can be for your business! <a>(877) 517-HOST(4678)</a></p>
                </div>
                <div className="CardMachines" style={{marginTop:'50px'}}>
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Mobile Credit Card Machines" />
                    <div className="row">
                       <div className="col-lg-3 img1">
                       </div>
                        <div className="col-lg-9">
                            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Vital" />
                            <div style={{marginTop:'20px'}}>
                                <a>Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 img2">
                        </div>
                        <div className="col-lg-9">
                            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="SwipeSimple" />
                            <div style={{marginTop:'20px'}}>
                                <a>Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 img3">
                        </div>
                        <div className="col-lg-9">
                            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="PAX A920" />
                            <div style={{marginTop:'20px'}}>
                                <a>Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 img4">
                        </div>
                        <div className="col-lg-9">
                            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="PAX A80" />
                            <div style={{marginTop:'20px'}}>
                                <a>Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'150px'}}>
                <Spanletter fontColor="#db1915" fontWeight="900" fontSize="42" textAlign="left" letter="Our eCommerce Advantage" />
                <div style={{marginTop:'30px'}}>
                    <p>Square processing is great for many businesses, especially those processing under $2,000 per month. After that point, Square can be much more expensive as the volume processes per month increase. While square doesn’t have a monthly fee, they do have a flat-rate pricing plan that ends up costing a lot of money as the business grows. To help you visualize – every card run has a different rate. Debit cards are 0.05% which is very low. On the other hand, business credit cards are very expensive up to 2.9%. Square charges you a flat rate equal to that of expensive credit cards – for every transaction! The chart below shows the difference between our pricing model – “interchange plus”, and Square’s very expensive “flat rate” pricing model. The infographic below will help you to understand why it is so much more expensive.</p>
                </div>
                <img style={{marginTop:'30px',borderRadius:'10px'}} src={Images.MobilePaymentProcessing6} />
            </div>
        </S.MainContent>
        <S.endContent>
            <div style={{backgroundColor:'rgba(0,0,0,0.6)',padding:'70px 0'}}>
                <div className="row">
                    <div className="left col-lg-5">
                        <img src={Images.LogoWhite} />
                        <span>Free Consultations!</span>
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

export default MobilePaymentProcessing;