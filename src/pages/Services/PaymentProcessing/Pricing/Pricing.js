import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import RedBtn from 'src/components/RedBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const Pricing = (props) => {
  return (
    <S.Bg>
        <S.TopImage>
            <div>
                <h1>Pricing</h1>
                <p>Get The Lowest Rates With Interchange-plus</p>
            </div>
        </S.TopImage>
        <S.TransactionPricing className="px-3">
            <span>Per Transaction Pricing</span>
            <p>Interchange + the low rates shown below</p>
            <a>What is "Interchange Plus" pricing?</a>
            <div className="row">
                {/*Retail Storefront*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <Spanletter fontColor="#ffffff" fontWeight="900" fontSize="22" textAlign="center" letter="Retail Storefront" />
                            <div style={{marginTop:'15px'}}>
                                <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="15" textAlign="center" letter="Face to face transactions" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="borderLine">
                                <div>
                                    <Spanletter fontColor="#686868" fontWeight="900" fontSize="40" textAlign="center" letter="0.25%" />
                                </div>
                                <div style={{marginTop:'15px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="center" letter="and $0.10 / transaction" />
                                </div>
                            </div>
                        </div>
                        <div className="third">
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="24x7x365 US based customer service" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Non-PCI compliance fee" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Term commitment" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Hidden fees" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Transparent, easy to read bills" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Next-day funding" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Online reporting" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Lifetime rates" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Visa, MasterCard, American Express, Discover Apple Pay, Android Pay, and PayPal" />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <RedBtn letter="GET STARTED" />
                        </div>
                    </div>
                </div>
                {/*Restaurant*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <Spanletter fontColor="#ffffff" fontWeight="900" fontSize="22" textAlign="center" letter="Restaurant" />
                            <div style={{marginTop:'15px'}}>
                                <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="15" textAlign="center" letter="What's your special?" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="borderLine">
                                <div>
                                    <Spanletter fontColor="#686868" fontWeight="900" fontSize="40" textAlign="center" letter="0.20%" />
                                </div>
                                <div style={{marginTop:'15px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="center" letter="and $0.09 / transaction" />
                                </div>
                            </div>
                        </div>
                        <div className="third">
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="24x7x365 US based customer service" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Non-PCI compliance fee" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Term commitment" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Hidden fees" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Transparent, easy to read bills" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Next-day funding" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Online reporting" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Lifetime rates" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Visa, MasterCard, American Express, Discover Apple Pay, Android Pay, and PayPal" />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <RedBtn letter="GET STARTED" />
                        </div>
                    </div>
                </div>
                {/*E-commerce*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <Spanletter fontColor="#ffffff" fontWeight="900" fontSize="22" textAlign="center" letter="E-Commerce" />
                            <div style={{marginTop:'15px'}}>
                                <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="15" textAlign="center" letter="Make sales on your website" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="borderLine">
                                <div>
                                    <Spanletter fontColor="#686868" fontWeight="900" fontSize="40" textAlign="center" letter="0.35%" />
                                </div>
                                <div style={{marginTop:'15px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="15" textAlign="center" letter="and $0.10 / transaction" />
                                </div>
                            </div>
                        </div>
                        <div className="third">
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="24x7x365 US based customer service" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Non-PCI compliance fee" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Term commitment" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div className="textDecoration" style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Hidden fees" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Transparent, easy to read bills" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Next-day funding" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Online reporting" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Lifetime rates" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="16" textAlign="left" letter="Visa, MasterCard, American Express, Discover Apple Pay, Android Pay, and PayPal" />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px'}}>
                            <RedBtn letter="GET STARTED" />
                        </div>
                    </div>
                </div>
            </div>
        </S.TransactionPricing>
        <S.ActualCost>
            <span>What is the actual cost per transaction?</span>
            <p>Take a look at example sales below</p>
            <div className="row">
                {/*Retail*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <div>
                                <Spanletter fontColor="#686868" fontWeight="900" fontSize="22" textAlign="center" letter="Retail" />
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <p>Estimated cost for a <span>$100 sale</span> on a variety of cards</p>
                            </div>
                        </div>
                        <div className="second">
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS Reg</p>
                                <p style={{float:'right'}}>$0.77</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS</p>
                                <p style={{float:'right'}}>$1.45</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa CPS Retail</p>
                                <p style={{float:'right'}}>$2.11</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Debit Reg</p>
                                <p style={{float:'right'}}>	$0.76</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Consumer</p>
                                <p style={{float:'right'}}>$2.17</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Restaurant*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <div>
                                <Spanletter fontColor="#686868" fontWeight="900" fontSize="22" textAlign="center" letter="Restaurant" />
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <p>Estimated cost for a <span>$25 sale</span> on a variety of cards</p>
                            </div>
                        </div>
                        <div className="second">
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS Reg</p>
                                <p style={{float:'right'}}>$0.43</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS</p>
                                <p style={{float:'right'}}>	$0.54</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa CPS Retail</p>
                                <p style={{float:'right'}}>	$0.67</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Debit Reg</p>
                                <p style={{float:'right'}}>	$0.42</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Consumer</p>
                                <p style={{float:'right'}}>$0.69</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*E-commerce*/}
                <div className="col-lg-4 col-md-6">
                    <div className="shadowBox">
                        <div className="top">
                            <div>
                                <Spanletter fontColor="#686868" fontWeight="900" fontSize="22" textAlign="center" letter="E-Commerce" />
                            </div>
                            <div style={{marginTop:'15px'}}>
                                <p>Estimated cost for a <span>$100 sale</span> on a variety of cards(card not present)</p>
                            </div>
                        </div>
                        <div className="second">
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS Reg</p>
                                <p style={{float:'right'}}>	$0.87</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa Debit CPS</p>
                                <p style={{float:'right'}}>		$2.40</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>Visa CPS Retail</p>
                                <p style={{float:'right'}}>	$2.50</p>
                            </div>
                            <div className="detail dark" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Debit Reg</p>
                                <p style={{float:'right'}}>	$0.86</p>
                            </div>
                            <div className="detail" style={{display:'flow-root',paddingRight:'20px'}}>
                                <p style={{float:'left'}}>MasterCard Consumer</p>
                                <p style={{float:'right'}}>$2.58</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </S.ActualCost>
        <S.AboutFee>
            <div>
                <div>
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="center" letter="What About Other Fees?" />
                </div>
                <div>
                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="18" textAlign="center" letter="We don't hide anything. You know exactly what your costs are and what they're for." />
                </div>
                <div className="tableDiv">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Interchange Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Passed through at cost</p>
                        </div>
                    </div>
                    <div className="row dark">
                        <div className="col-lg-6">
                            <p>Address Verification Fe</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Closure Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="row dark">
                        <div className="col-lg-6">
                            <p>Pin Debit Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>PCI Compliance</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="row dark">
                        <div className="col-lg-6">
                            <p>Batch Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$0.20 / Batch</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Voice Authorization</p>
                        </div>
                        <div className="col-lg-6">
                            <p>		$0.75</p>
                        </div>
                    </div>
                    <div className="row dark">
                        <div className="col-lg-6">
                            <p>Gateway Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>	$5.00 / month (optional)</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Monthly Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>	$14.99/month</p>
                        </div>
                    </div>
                    <div className="row dark">
                        <div className="col-lg-6">
                            <p>Annual 1099 reporting Fee</p>
                        </div>
                        <div className="col-lg-6">
                            <p>$24.00/year</p>
                        </div>
                    </div>
                </div>
            </div>
        </S.AboutFee>
        <S.SavingsGuarantee>
            <div className="row">
                <div className="col-lg-6 left">
                    <div>
                        <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Savings Guarantee" />
                        <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="If we can't save you money on payment processing we will give you $50! Either way you get extra cash!" />
                        <div style={{width:'190px'}}>
                            <RedBtn letter="GET STARTED" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 imageDiv">
                </div>
            </div>

        </S.SavingsGuarantee>
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

export default Pricing;