import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const FreePaymentProcessing = (props) => {
  return (
    <S.Bg>
        <TopImg img="FreePaymentProcessing1" letter="Free Payment Processing" />
        <S.MainContent>
            <div>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Free Payment Processing Program for Merchants" />
                <div>
                    <p>Yes, it’s true! You can now offset your entire payment processing bill and collect 100% of your revenue. The merchant account we use to do this is called a <strong>No-Cost account, also known as “the cash discount program”.</strong> This program works by automatically adding the cost of each transaction to that transaction. In this way, merchants do not have to pay anything and get completely free payment processing!</p>
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Is the no-cost account really free?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="Yes! Our no-cost free payment processing accounts are completely free for merchants processing $5,000/month or more. Merchants processing less than $5,000/month can still use the program at a flat cost of $20/month!" />
                </div>
            </div>
            <div className="middleImg">

            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Who Qualifies for Free Payment Processing?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="Any merchant that does not require “Tip adjust” can use the No-cost payment processing account. Tip adjust is where the card is run and the cardholder fills in a tip on the receipt to be adjusted to the authorized amount later – same as most sit down restaurants. Beyond that, all merchants can utilize this program! We find that our free payment processing account works especially well for service-based industries such as HVAC, electrical, landscaping, property management, auto repair and maintenance, etc." />
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="When will I get paid when using the free payment processing account?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="The No-Cost (free) payment processing account comes with “next day funding” standard. When you batch out the payment processing terminal at the end of the business day that money will be deposited the next business day. Transaction fees will not be present in the deposits meaning each deposit is 100% revenue for you and you will not have to pay out at the end of the month." />
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="How does the free payment processing account work?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="The no-cost account will automatically add a convenience fee on to the transaction. When a customer pays with cash or checks they are “discounted” that convenience fee. This is why many processors refer to this program as the “Cash Discount” program. In this way, the cardholder pays for the cost of their transaction rather than the merchant." />
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Is the no-cost merchant account the same as surcharging?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="No, our free payment processing account is not the same as surcharging.  With surcharging you are applying a convenience fee to just card transactions thus disincentivizing the use of cards.  With the no-cost program (cash discount program), a service fee is added to all transactions but then discounted for cash and check payments thus incentivizing the use of cash. Over the last two years, this program has grown substantially in popularity." />
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="How do I get started with free payment processing?" />
                <div style={{marginTop:'20px'}}>
                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="You can get started with your free payment processing account in less than 30 seconds! Simply fill out the form below that says “I want free processing!” and we’ll reach out to you to answer any questions you might have and to get you started. Approvals are as quick as 24hours or even faster in many cases!" />
                </div>
            </div>
            <div style={{marginTop:'150px'}}>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="center" letter="What else do I get with the free payment processing account?" />
                </div>
                <div className="CentralCapabilities">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/001-customer-service.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="White-Glove Service" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="We pride ourselves in delivering a level of service that is above and beyond. That’s why phone calls are always answered by a real person in 3-4 rings, and you will never wait in a hold queue. And that's just the start…" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/005-point-of-service.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Free Equipment Program" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="98% of our merchants qualify for free credit card terminals or processing equipment. Don’t worry about leasing a new machine. We have a new one for you!" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Fast-Processing.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Fast Approval" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="Most auto shops get approved and processing in less than 2 business days! Need we say more?" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Quck-Payments.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Next Day Funding" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="No more waiting for deposits. You get next day funding so you can run your business without all of the unnecessary speed bumps." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/documents.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="No Term Agreements" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="Our contracts run month-to-month with no term agreement or cancellation fee. Our merchants stay with us because they love us, not because they have to." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/008-responsive.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Online Account Login" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="Included 24/7 online access to a full suite makes it easy to track your merchant account." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'30px'}}>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/004-favourite.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="Satisfaction Guaranteed" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="We want our merchants to be happier with us than with any other company, and they are. Our 98% merchant retention rate is purely organic." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6 row">
                            <div className='col-lg-2  col-md-2 CapabilitiesImg' >
                                <img style={{width:'40px'}} src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Apple-Pay.svg" />
                            </div>
                            <div className='col-lg-10  col-md-10 CapabilitiesSpan' style={{marginTop:'3px',paddingLeft:'0px'}} >
                                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="16" textAlign="left" letter="EMV Acceptance" />
                                <div style={{marginTop:'3px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="left" letter="We supply modern credit card machines with all the bells and whistles you expect. EMV, Apple Pay, Google Pay, and contactless payments are all supported." />
                                </div>
                            </div>
                        </div>
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

export default FreePaymentProcessing;