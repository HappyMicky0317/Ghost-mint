import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import RedBtn from 'src/components/RedBtn';
import WhiteBtn from 'src/components/WhiteBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';


const ECommerceProcessing = (props) => {
  return (
    <S.Bg>
        <TopImg img="ECommerceProcessing1" letter="E-Commerce" />
        <S.SolutionsAndIntegrations>
            <div className="content">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="E-commerce Payment Solutions and Integrations" />
                <div className="explain">
                  <p><span>Host Merchant Services </span>offers the latest in <a>payment gateway</a> and e-commerce technologies. We can provide online processing to almost all business types. Our service goes further than other companies – we assist you in implementing a complete e-commerce solution including payment gateway integration, security, and<a> PCI compliance.</a> Our solutions support all major online shopping carts as well as all major payment gateways.</p>
                </div>
                <div style={{marginTop:'30px'}}>
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Popular Supported Ecommerce Shopping Carts" />
                </div>
                <div>
                    <div className="shoppingCarts" style={{marginTop:'30px'}}>
                        <div> <img src={Images.ECProcessingShpCarts1} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts2} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts3} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts4} /> </div>
                    </div>
                    <div className="shoppingCarts" style={{marginTop:'10px'}}>
                        <div> <img src={Images.ECProcessingShpCarts5} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts6} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts7} /> </div>
                        <div> <img src={Images.ECProcessingShpCarts8} /> </div>
                    </div>
                </div>
                <div className="prolems">
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="20" textAlign="left" letter="Have a different shopping cart? No problem! We integrate with most systems. Reach out for more details!" />
                </div>
                <div className="row" style={{marginTop:'30px'}}>
                    <div className="col-lg-3 col-md-3">
                        <RedBtn letter="(877) 517-4678" />
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <WhiteBtn letter="CONTACT FROM" />
                    </div>
                </div>
            </div>
        </S.SolutionsAndIntegrations>
        <S.PaymentsMadeEasy>
            <div className="content">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Online Payments Made Easy" />
                <div style={{marginTop:'30px',lineHeight:'33.4px'}}>
                    <Spanletter fontColor="#ffffff" fontWeight="4   00" fontSize="18" textAlign="left" letter="You’re job is running your online store, not integrating payments. That’s where we come in. We will help you as much as is needed to get you up and running. We make it simple and easy to start accepting payments online." />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div style={{width:'20px'}}>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="16" textAlign="left" letter="Easy application" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div style={{width:'20px'}}>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="16" textAlign="left" letter="Quick approval" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div style={{width:'20px'}}>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="16" textAlign="left" letter="Simple integration" />
                                </div>
                            </div>
                            <div style={{display:'flex',marginTop:'25px'}}>
                                <div style={{width:'20px'}}>
                                    <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg" />
                                </div>
                                <div style={{marginLeft:'10px'}}>
                                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="16" textAlign="left" letter="Fantastic service" />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'30px',width:'190px'}} >
                            <RedBtn letter="GET STARTED" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 bankAvatar">
                        <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/07/Merchant-Education-3.svg" />
                    </div>
                </div>
            </div>
        </S.PaymentsMadeEasy>

        <S.EComericeAdvantage>
            <div className="content">
                <Spanletter fontColor="#db1915" fontWeight="900" fontSize="42" textAlign="left" letter="Our eCommerce Advantage" />
                <div style={{marginTop:'30px'}}>
                    <p>We have unparalleled knowledge and experience in the industry. Host Merchant Services CEO Lou Honick spent 11 years running a successful web hosting company and this experience gives his current venture an edge in creating useful online shopping solutions for our clients. Host Merchant Services is able to craft e-commerce solutions that suit a merchant’s exact needs.</p>
                </div>
                <div style={{marginTop:'30px'}}>
                    <p>With HMS products and services we seamlessly transplant our retail services to your online business. We offer the same great savings and high-quality customer service that we are able to offer our <a>retail customers.</a> And we bring you superior expertise in the online environment with our support and customer service.</p>
                </div>
            </div>
        </S.EComericeAdvantage>
        <S.AcceptingCards>
            <div className="content row">
                <div className="col-lg-9">
                    <Spanletter fontColor="#ffffff" fontWeight="900" fontSize="30" textAlign="left" letter="Start Accepting Credit Cards Online Now" />
                </div>
                <div className="col-lg-3">
                    <WhiteBtn letter="GET A FREE QUOTE" />
                </div>
            </div>
        </S.AcceptingCards>
        <S.EComericeSolution>
            <div className="content">
                <div>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="42" textAlign="left" letter="What's Included In Your eCommerce Solution?" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="You get all of these great features with our eCommerce processing:" />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Payment Gateways" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="E-Commerce becomes a snap when you’ve got a Payment Gateway managing your transactions. We offer multiple Payment Gateway options. Choose the one that fits your business — from Transaction Central, HMSExpress or Authorize.net." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Virtual Terminals" />
                    <div style={{marginTop:'30px'}}>
                        <p>HMS provides even more flexibility for your online shopping experience with our virtual terminal Transaction Central. This web-based centralized <a>payment processing</a> system let’s you run everything through its centralized toolset.</p>
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Online Shopping Carts" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="Host Merchant Services provides expertise and support for your website’s online shopping cart. We’ll help you find the one that works best and most efficiently with your payment processing setup. And we’ll help you keep it working smoothly." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Mobile Payment Technologies" />
                    <div style={{marginTop:'30px'}}>
                        <p>HMS keeps you on the cutting edge of Mobile Payment Technology — offering both iPhone and Android solutions for your business. We’ll let your customers connect to your online shopping cart right from their phone and help you <a>process their transactions</a> seamlessly.</p>
                        <div style={{marginTop:'20px'}}>
                            <p>You combine those choices with these standard merchant account features that Host Merchant Services provides its customers:</p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Great Rate" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="We save you money, guaranteed. HMS makes it affordable for you to process transactions online." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Fantastic Service" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="Customer-focused 24×7 support and service. We are there to help when you need us." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="No Hidden Fees" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="No annual fee, no application fee, low PCI fee, no monthly minimums. We strive to keep what you pay transparent and clear to you and do not hide any of the charges when doing business with us." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="Lifetime Rates" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="We offer straightforward “cost-plus” pricing, and your rate to HMS will never increase." />
                    </div>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="30" textAlign="left" letter="No Contracts" />
                    <div style={{marginTop:'30px'}}>
                        <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="We don’t lock you into a term or charge you early termination fees. We want you to stay with us because you are happy with your service." />
                    </div>
                </div>
            </div>
        </S.EComericeSolution>
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

export default ECommerceProcessing;