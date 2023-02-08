import React from 'react';
import * as S from './styled';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 60) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 2);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 2);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 6;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid white }';
      document.body.appendChild(css);
    };
    return (
      <S.Bg>
        <div className="header-image">
          <div className="amazing-font-box">
            <p>Merchant Services <span style={{ color: 'rgb(233,24,24)' }}>You'll Love</span></p>
            <p>Built with Reliabilty</p>
            {/*<p>Built with*/}
            {/*  <span*/}
            {/*    className="txt-rotate"*/}
            {/*    data-period="1000"*/}
            {/*    data-rotate='[ " Reliability", " Low Cost", " Great Service", " Scalability"]'></span>*/}
            {/*</p>*/}
            <div className="button-box row">
              <div className="button-div row">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                  <div className="red-button">
                    WHY CHOOSE HMS?
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                  <div className="outline-button">
                    REQUEST A QUOTE
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="card-processing row">
          <div className="row">
            <div className="giant-red-font col-md-12">Credit Card Processing Done Right</div>
            <div className="content-red-font">Get the payment processing solution that fits your business</div>
            <div className="content-font">We provide merchant services payment systems for all businesses. Get a credit
              card processing system customized for mobile payments, point of sale, e-commerce credit card processing,
              EMV terminals, and more. We will greatly reduce your merchant services fees while substantially improving
              the customer service you receive. Browse a credit card processing type below or submit any
            </div>
          </div>
          <div className="row col-md-12">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="learn-card">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/Retail-payment-processing.jpg"
                     alt="grey" className="learn-card-img"/>
                <div className="card-content">
                  <div className="learn-card-title">
                    Retail Processing
                  </div>
                  <div className="content-font">
                    Simple, low-cost, in-person credit/debit card processing with or without a POS.
                  </div>
                </div>
                <div className="red-button learn-button">Learn More
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="learn-card">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/Restaurant-Merchant.jpg"
                     className="learn-card-img"/>
                <div className="card-content">
                  <div className="learn-card-title">
                    Retail Processing
                  </div>
                  <div className="content-font">
                    Simple, low-cost, in-person credit/debit card processing with or without a POS.
                  </div>
                </div>
                <div className="red-button learn-button">Learn More
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="learn-card">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/eCommerce-Merchants.jpg"
                     className="learn-card-img"/>
                <div className="card-content">
                  <div className="learn-card-title">
                    Retail Processing
                  </div>
                  <div className="content-font">
                    Simple, low-cost, in-person credit/debit card processing with or without a POS.
                  </div>
                </div>
                <div className="red-button learn-button">Learn More
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className=" learn-card">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/Mobile-Credit-Card-Processing.jpg"
                  className="learn-card-img"/>
                <div className="card-content">
                  <div className="learn-card-title">
                    Retail Processing
                  </div>
                  <div className="content-font">
                    Simple, low-cost, in-person credit/debit card processing with or without a POS.
                  </div>
                </div>
                <div className="red-button learn-button">Learn More
                </div>
              </div>
            </div>

          </div>
          <div className="content-font footer-content">
            Don't see your industry? From medical and construction to veterinary and automotive, we have a merchant
            services solution for all of your credit card processing needs. Click on Merchants in the Menu to find your
            industry, or contact us to find out about credit card processing terminals, point of sale, mobile payments,
            and solutions for every business type!
          </div>
        </div>
        <div className="review">
          <div className="row review-content">
            <div className="col-md-8 white-mid-font col-sm-12">
              Get Your FREE Merchant Services Account Review and Quote!
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="tel-part">
                <div className="white-button">
                  GET STARTED
                </div>
                <div className="tel-content">
                  Or Call us! 877-517-HOST (4678)
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="card-processing row">
          <div className="giant-red-font col-md-12">Merchant Services Made For You</div>
          <div className="content-font">We provide merchants of all types with payment processing and point of sale
            systems. We use straightforward pricing, no contracts or obligations, and fantastic customer service making
            us last merchant services company you will ever want.
          </div>
          <div className="row col-md-12 include-star">
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/004-favourite.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  No Term Commitment
                </div>
                <div className="card-content-font">
                  Our excellent customer service and low rates retain customers, not contracts. Cancel anytime but we
                  bet you won't want to.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/001-customer-service.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  24x7x365 Customer Service
                </div>
                <div className="card-content-font">
                  We are always here for you with access to industry-leading customer service 24 hours a day – 7 days a
                  week – 365 days a year.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/003-credit.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10  col-sm-12 pl-4">
                <div className="default-font-style">
                  Payment Processing
                </div>
                <div className="card-content-font">
                  Accept all credit and debit cards at your business with the lowest transaction rates on the market
                  with your Host Merchant account.
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12 mt-5">
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/009-check-mark.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  No Up-Front or Hidden Fees
                </div>
                <div className="card-content-font">
                  No setup fees and no hidden charges. Just the lowest merchant services rates available.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/007-padlock.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  Lifetime Rates
                </div>
                <div className="card-content-font">
                  Experience the freedom of locked-in credit card processing rates that won't increase over time.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/006-pos.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  Point Of Sale
                </div>
                <div className="card-content-font">
                  We offer the latest POS systems including Clover POS, Vital POS, SwipeSimple, and more. From retail to
                  restaurants and everything in-between.
                </div>
              </div>
            </div>
          </div>
          <div className="row col-md-12 mt-5 mb-5">
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/005-point-of-service.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  Free Equipment Program
                </div>
                <div className="card-content-font">
                  Qualify for a free EMV compliant mobile swiper or terminal with a merchant account.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 row">
              <div className="col-lg-2 col-sm-12">
                <div className="p-1">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/002-cloud.svg"
                       className="icon-style"/>
                </div>
              </div>
              <div className="col-lg-10 col-sm-12 pl-4">
                <div className="default-font-style">
                  Business Tools
                </div>
                <div className="card-content-font">
                  Get more for your business with Host Merchant Business Solutions – from websites and email to customer
                  analytics and more.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="black-part pt-lg-5 ">
          <div className="row content-black-part">
            <div className="giant-red-font col-md-12 text-center pb-lg-5">Founded On Fantastic Service</div>
            <div className="col-md-6 black-content-font col-sm-12">
              <div>
                Host Merchant Services was founded in 2008 and was structured around a strong backbone of customer
                service. 11 years and thousands of happy merchants later, customer service is still our number one
                priority. In fact, our merchant support team is 4x larger than our sales team! We don’t believe in hold
                queues either, so you’ll never have to wait in line. When you’re with Host you’ll get first-class
                treatment!

              </div>
              <div className="h-50 mb-1">
                <div className="red-phone-button mt-lg-3">
                  Test Us! (877) 517-4678
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/Great-Customer-Support-4.png"
                   className="receiver-img"/>
            </div>
          </div>
        </div>
        <div className="card-processing row">
            <div className="giant-red-font col-md-12">Top-Rated Merchant Services</div>
            <div className="content-red-font">What Our Clients Are Saying</div>
        </div>
          <div className="row">
            <div className="content-font">
              Our merchants love us and it shows. We are top-rated in the Better Business Bureau, Consumer Affairs, and
              Card Payment Options.
              Our #1 priority is merchant satisfaction!
              Find out why we are the top rated credit card processor in the world!
            </div>
          </div>

          <div className="row top-rate-box col-md-12">
            <div className="col-md-10 top-rate">
              <div>
                <div className="logo-img">
                  <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/RxGym.jpg"/>
                </div>
                <div className="logo-expl content-font">
                  <p>“Host Merchant Services has been an <strong>excellent partner</strong> for enabling credit card
                    processing&nbsp;services in our gym software. They are a great fit because, in addition to providing
                    technical support for our software integration, they match our focus of <strong>providing excellent
                      customer service</strong> and cost savings for the gyms that use our software.”<br/>
                    – Mike Spencer,&nbsp;RX Gym Software</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-12 athlete-img">

            </div>
            <div className="row col-md-12 h-25 logos pt-lg-5">
              <div className="col-md-4 col-sm-12">
                <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/bbb-logo-A-Plus.png"
                     alt="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/bbb-logo-A-Plus.png"/>
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/ca-review-badge-01-768x655-1.png"
                  alt="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/bbb-logo-A-Plus.png"/>

              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/Screen-Shot-2017-05-08-at-2.16.55-PM-768x306-1.png"
                  alt="https://www.hostmerchantservices.com/wp-content/uploads/2020/04/Screen-Shot-2017-05-08-at-2.16.55-PM-768x306-1.png"/>
              </div>
              <div className="h-50 w-100 align-content-center">
                <div className="red-phone-button">
                  See What Our Clients Say
                </div>
              </div>
            </div>
          </div>

        <div className="w-100 iso-program">
          <div className="calling row pr-0">
            <div className="row col-lg-6 col-md-12">
              <div className="content-red-font">Independent Sales Agent / ISO Program</div>
              <div className="giant-red-font col-md-12">Your One-Stop Shop</div>
              <div className="content-font content-lineheight">If you are a merchant services sales agent or an
                independent sales organization (ISO), we want you and your merchants to join our family.
                We provide a service that’s easy to sell with high growth potential.
                Let us take care of the merchants so you can focus on growing your business.
                Our independent sales and merchant services agent program helps you close more business with the tools
                you need to succeed.
              </div>
              <div className="red-phone-button mb-4">
                View The ISO Program
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/218125.png"
                   className="call-woman"/>
            </div>
          </div>
        </div>
        <div className="black-part pt-lg-5 ">
          <div className="row content-black-part">
            <div className="giant-red-font col-md-12 text-center pb-lg-5">Integrate Payment Processing Into Your
              Software
            </div>
            <div className="col-md-6 black-content-font col-sm-12">
              <div>
                You’ve created an app but need to integrate payment processing. You’ve come to the right place! We offer
                custom direct integrations with an easy-to-use API and a broad range of terminal solutions.
                We specialize in helping developers and SaaS providers integrate payments seamlessly into their
                software.
              </div>
              <div className="h-50 mb-1">
                <div className="red-phone-button mt-lg-3">
                  GET STARTED NOW
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/06/untitled-project.png"
                   className="receiver-img"/>
            </div>
          </div>

        </div>
        <div className="card-processing row m-s-c2">
          <div className="giant-red-font col-md-12">Merchant Services And Credit Card Processing News</div>
          <div className="row col-md-12">

            <div className="col-lg-4 col-sm-12 ">
              <div className="learn-card">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2021/05/sakon-nakhon-thailand-august-1-2017-paypal-the-largest-operator-of-electronic-money-it-was-founded-in-1998-paypal-most-popular-101788564-1024x682.jpg"
                  alt="grey" className="learn-card-img"/>
                <div className="card-content" style={{ height: '310px' }}>
                  <div className="news-font-style">
                    PayPal Launches New Merchant Fraud Protection Tool
                  </div>
                  <div className="content-font content-lineheight">
                    Digital threats are becoming common, and there are concerns on how well businesses can stay
                    protected from these issues. The global
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div className="learn-card">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2021/05/stack-of-credit-cards-and-doll-2162005-1-1024x681.jpg"
                  alt="grey" className="learn-card-img"/>
                <div className="card-content" style={{ height: '310px' }}>
                  <div className="news-font-style">
                    Is Not Accepting Credit Cards Hurting Your Bottom Line?
                  </div>
                  <div className="content-font content-lineheight">
                    You might be worried about accepting credit cards at your business. You could have concerns
                    surrounding how much it costs t
                  </div>
                </div>


              </div>
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <div className="learn-card">
                <img
                  src="https://www.hostmerchantservices.com/wp-content/uploads/2021/05/man-paying-with-smartphone-at-gas-station-124516558-1024x684.jpg"
                  alt="grey" className="learn-card-img"/>
                <div className="card-content" style={{ height: '310px' }}>
                  <div className="news-font-style">
                    Less Than Half of Major Fuel Merchants Meet Extended EMV Deadline
                  </div>
                  <div className="content-font content-lineheight">
                    Simple, low-cost, in-person credit/debit card processing with or without a POS.
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="h-50 w-100 mb-5 align-content-center">
            <div className="red-phone-button mt-5">
              VIEW THE LATEST INSIGHTS
            </div>
          </div>

        </div>
        <div className="red-board">
          <div className="card-processing">
            <div className="giant-white-font">
              Let's Get Started
            </div>
            <div className="red-board-content-font mb-4">
              Not sure where to start?
              Call us or click Get Started below and our merchant services experts will guide you to the perfect
              solution that meets your needs.
            </div>
            <div>
              <div className="white-button">
                GET STARTED
              </div>
            </div>
          </div>
        </div>
      </S.Bg>
    );
  }
}

export default Landing;