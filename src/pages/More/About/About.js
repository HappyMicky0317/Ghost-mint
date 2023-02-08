import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import WhiteBtn from 'src/components/WhiteBtn';
import Spanletter from 'src/components/Spanletter';

class About extends React.Component{

  constructor() {
    super();
  }
  render() {
    return(
      <S.Bg>
          <TopImg img="About1" letter="About Us" />
          <S.Container>
            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="center" letter="Your All-In-One Payment Processor" />
            <div className="indivs">
              <p>Host Merchant Services is about bringing trust to the payment industry.<strong>  We are a registered Independent Sales Organization (ISO) with Visa U.S.A. and MasterCard International with bank sponsorship provided by Wells Fargo Bank, Walnut Creek, CA.</strong></p>
            </div>
            <div className="indivs">
              <p>Payment processing is confusing.  The big processors make it difficult to understand exactly what your rate is and what fees are associated with accepting credit cards.  We deliver personal service and clarity.  Our people care about customer service and will take the time to explain how everything works.  We believe that when you get your statement every month, you should understand every item, and it should match what you were promised in the sales process.  If you have a question, there is a live person at Host Merchant Services ready to assist you.  If you have a problem, we will make it right, guaranteed.  It sounds simple, but so many payment processing companies just don’t get it.  You might have used them before.  Some of our customers tell us they have been through five or more merchant services company.  Our promise is that this will be the last time you ever have to switch.  Great service, great rates, great people.  That is what you can expect from us – nothing less.</p>
            </div>
            <div className="indivs">
              <p>Based in Newark, Delaware, our team has extensive experience in the payment processing industry.  We have worked for the big processors and banks, we know this business inside and out.  Now we’re here to help you.</p>
            </div>
            <div className="AboutCEO row">
              <div className="col-lg-4">
                <img src={Images.About2} />
              </div>
              <div className="col-lg-8">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Our CEO" />
                <div className="indivs">
                  <p>Lou Honick is the CEO of Host Merchant Services. Prior to founding Host Merchant Services in 2010, Lou was the founder of HostMySite.com and received numerous awards including SBA Young Entrepreneur of the Year, Inc Magazine 30 under 30, and multiple listings on the Inc 500. As a serial entrepreneur, all of his companies have operated on a singular devotion to outstanding customer service and support. Lou is a respected expert on the topics of customer service, payments and fintech, Internet technology, and entrepreneurship.</p>
                </div>
              </div>
            </div>
            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="center" letter="Testimonials" />
            <div className="Testimonials row">
              <div className="col-lg-6">
                <h1>"</h1>
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="20" textAlign="left" letter="Host Merchant Services truly has some of the most extraordinary customer service in merchant services...or any industry!" />
                </div>
                <div className="indivs">
                  <p>– Ryan G., Restaurant Owner</p>
                </div>
              </div>
              <div className="col-lg-6 right">
                <h1>"</h1>
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="20" textAlign="left" letter="No matter when I call, a real person answers right away. I was shocked at how much they lowered my bill too!" />
                </div>
                <div className="indivs">
                  <p>– Joey S., Gym Owner</p>
                </div>
              </div>
            </div>
          </S.Container>
          <S.bottomPart>
            <div className="content row">
              <div className="col-lg-8">
                <Spanletter fontColor="#fff" fontWeight="900" fontSize="42" textAlign="left" letter="Get Started Now" />
                <div className="indivs">
                  <Spanletter fontColor="#fff" fontWeight="700" fontSize="24" textAlign="left" letter="Start saving now! Get a free, no-obligation quote, request a call, or start your application!" />
                </div>
              </div>
              <div className="col-lg-4" style={{display:'flex'}}>
                <div style={{margin:'auto'}}>
                  <div style={{width:'200px',margin:'auto'}}>
                  <WhiteBtn letter="GET STARTED" />
                  </div>
                  <div className="indivs">
                    <Spanletter fontColor="#fff" fontWeight="400" fontSize="16" textAlign="center" letter="Or Call us! 877-517-HOST (4678)" />
                  </div>
                </div>
              </div>
            </div>
          </S.bottomPart>
      </S.Bg>
    )
  }

}

export default About;