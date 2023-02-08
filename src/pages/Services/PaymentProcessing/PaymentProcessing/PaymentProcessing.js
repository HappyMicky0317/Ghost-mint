import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Images from "src/theme/Images";
import Header from "src/pages/Header";
import * as S from "./styled";
import SubmitForm from 'src/components/SubmitForm';
import TopImg from 'src/components/TopImg'

const PaymentProcessing = (props) => {
  return (
    <S.Bg>
        <Header />
        {/* <TopImg letter="Payment Processing" img="PaymentTopImg" />
        <S.ConvertContainer className="px-3">
            <p>Host Merchant Services handles payment processing for all different business types throughout the United States and Canada. Whether it’s processing for a restaurant that requires a point of sale system, eCommerce business with an online shopping cart, or a business on the go we have you covered! Your personal payment expert is waiting and ready to speak with you about all of the options available and to help you find the highest value processing with the lowest cost. Check out some of our options below or just give us a call at <a><u>(877) 517-4678.</u></a> </p>
        </S.ConvertContainer>
        <S.MerchantAccounts className=" px-2">
            <h1>
                Types of Merchant Accounts
            </h1>
            <div className="wallets">
                <div className="wallet">
                    <img className="wallet-icon" src={Images.PlusAccount} alt=""/>
                    <div className="text-block">
                        <p className="Account-title">Interchange Plus Account</p>
                        <p className="Account-explain">Less expensive than flat rate or tiered pricing</p>
                        <p>Interchange Plus is a great low-cost processing account. We pass through the interchange fees charged by the card brands (Visa, MasterCard…) and add a set tiny markup for our services. This account is always less expensive than flat-rate and tiered accounts and is easy to understand.</p>
                    </div>
                    <div className="wallet-id">
                        <span>WHAT IS "INTERCHANGE PLUS" PRICING</span>
                    </div>
                </div>
                <div className="wallet">
                    <img className="wallet-icon" src={Images.DiscountAccount} alt="" />
                    <div className="text-block">
                        <p className="Account-title">Cash Discount Account</p>
                        <p className="Account-explain">Process credit and debit without paying a bill</p>
                        <p>Cash discount, also know as no-cost, is a special type of processing account that is great for many businesses but not all. This account takes the processing fee and passes it to the cardholder - adding a small fee to each transaction. The business gets free processing using this system.</p>
                    </div>
                    <div className="wallet-id">
                        <span>WHAT IS A "CASH DISCOUNT"</span>
                    </div>
                </div>
            </div>
        </S.MerchantAccounts> */}
        {/* <S.Benefits>
            <span>Benefits Of HMS</span>
            <div>
                <span>Great Pricing, No Contracts</span>
                <p>With easy to understand pricing you'll know you’re getting the best rates. This account is so transparent you will even know exactly what we are making off of every transaction! There's no obligation to our merchant accounts – no contracts, no hidden fees, close anytime without penalty. You’ll stay a customer of ours because of our fantastic service and low pricing, not because you have to! Pricing for our accounts vary according to business type – check out our pricing page for average rates our customers pay. For an official processing quote, get in touch with us and we’ll create custom pricing as low as possible for your business.</p>
                <a>Go to pricing page</a>
            </div>
            <div>
                <span>Quick Funding</span>
                <p>We know how important it is for you to receive your funds quickly. We offer next-day funding for our accounts but some accounts will qualify for same-day funding! Imagine getting your deposit the same day or the next day. No more waiting for your revenue. Get it fast with HMS. Check out the next day funding page below for details. If you want to find out about same day funding, give us a call – we’ll have to ask a couple of questions to see if you would qualify.</p>
                <a>Next day funding details</a>
            </div>
            <div>
                <span>Payment Processing Customized To Your Business</span>
                <p>All businesses are not the same and neither should your processing. We customize the payment processing account to the needs of the business. That means you only pay for what you need. We have many options and setups tuned to processing style, equipment needs, funding needs, and much more. We walk through each aspect to find out what you need and what you don’t. Below are some of the most popular business types with details about our solutions for each.</p>
                <a>Speak with a specialist now</a>
            </div>
        </S.Benefits>
        <S.PaymentProcessing className="px-sm-3 px-2">
            <h1>
                Mobile Payment Processing
            </h1>
            <div className="wallets">
                <div className="wallet">
                    <img className="wallet-icon" src={Images.PaymentProcessingApple} alt=""/>
                    <div className="text-block">
                        <p className="Account-title">Accept Mobile Payments with your Apple or Android Device</p>
                        <p>Turn your iPhone or Android smartphone into a profitable payment processing terminal – <strong>for free!</strong> Take your business directly to your customers, wherever they are, with <strong>HMSPay.</strong></p>
                    </div>
                </div>
                <div className="wallet">
                    <img className="wallet-icon" style={{width:'75%'}} src={Images.PaymentProcessingOption} alt="" />
                    <div className="text-block">
                        <p className="Account-title">Tablet Payment Options</p>
                        <p>Use your iPad, Android, or Windows Tablet to instantly create a full featured credit card processing terminal with our FREE app, HMSPay.  If you need a tablet, we can provide a solution that includes 4G/LTE wireless..</p>
                    </div>
                </div>
                <div className="wallet">
                    <img className="wallet-icon" src={Images.PaymentProcessingSolution} alt="" />
                    <div className="text-block">
                        <p className="Account-title">Or Select Our All-In-One Wireless Terminal Solutions</p>
                        <p>Our rechargeable wireless terminals do it all, including credit card processing, EMV processing, debit card acceptance, and receipt printing – over 4G/LTE.</p>
                    </div>
                </div>
            </div>
            <div className="wallet-id">
                <span>BROWSE MOBILE PROCESSING EQUIPMENT</span>
            </div>
        </S.PaymentProcessing> */}
        {/* <S.PaymentProcessingSolution>
            <h1>E-Commerce Payment Processing Solutions</h1>
            <div>
                <div className="content">
                    <div>
                        <div className="symbol">
                            <img data-lazyloaded="1" width="20"
                                 src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 data-src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 alt="009-check-mark" className="litespeed-loaded" data-was-processed="true" />
                        </div>
                        <div>
                            <h4>Payment Gateways</h4>
                            <p>We offer multiple Payment Gateway options including Transaction Express and Authorize.NET. With support for over 100 payment gateways – yours is on the list!</p>
                        </div>
                    </div>
                    <div>
                        <div className="symbol">
                            <img data-lazyloaded="1" width="20"
                                 src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 data-src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 alt="009-check-mark" className="litespeed-loaded" data-was-processed="true" />
                        </div>
                        <div>
                            <h4>Virtual Terminal</h4>
                            <p>sOur TXP web-based centralized payment processing system turns your PC or Mac into a full-featured point of sale with recurring billing, tokenization, and PCI Compliance.</p>
                        </div>
                    </div>
                    <div>
                        <div className="symbol">
                            <img data-lazyloaded="1" width="20"
                                 src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 data-src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                                 alt="009-check-mark" className="litespeed-loaded" data-was-processed="true" />
                        </div>
                        <div>
                            <h4>Online Shopping Carts</h4>
                            <p>We’ll help you find the online shopping cart software that works most efficiently with your payment processing setup. And we’ll help keep your shopping cart working smoothly.</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <div>
                        <img src={Images.PaymentProcessingSolution2}/>
                    </div>
                </div>
            </div>
            <p style={{marginTop:'70px'}}>We can assist you in implementing a complete <span>e-commerce solution</span> including security and <span>PCI compliance</span>. Our solutions support all major payment gateways and a virtual terminal is included for all e-commerce merchants.</p>

        </S.PaymentProcessingSolution> */}
        {/* <S.endContent>
            <div style={{backgroundColor:'rgba(0,0,0,0.6)',padding:'70px 0'}}>
                <div>
                    <div className="left">
                        <img src={Images.LogoWhite} />
                        <span>Experience A Higher Level Of Service</span>
                    </div>
                    <div className="right">
                        <SubmitForm />
                    </div>
                </div>
            </div>
        </S.endContent> */}
    </S.Bg>
  );
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentProcessing);