import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';

import Spanletter from '../../components/Spanletter';


class HowToBuyPage extends React.Component{

  constructor() {
    super();
  }
  render() {
    return(
      <S.Bg>
          <TopImg img="Contact1" letter="Contact HMS" />
          <S.Container>
            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="About HMS" />
            <div className="indivs">
              <p>Host Merchant Services is about bringing trust to the payment industry.<strong>  We are a registered Independent Sales Organization (ISO) with Visa U.S.A. and MasterCard International with bank sponsorship provided by Wells Fargo Bank, Walnut Creek, CA.</strong></p>
            </div>
            <div className="indivs">
              <p>Payment processing is confusing.  The big processors make it difficult to understand exactly what your rate is and what fees are associated with accepting credit cards.  We deliver personal service and clarity.  Our people care about customer service and will take the time to explain how everything works.  We believe that when you get your statement every month, you should understand every item, and it should match what you were promised in the sales process.  If you have a question, there is a live person at Host Merchant Services ready to assist you.  If you have a problem, we will make it right, guaranteed.  It sounds simple, but so many payment processing companies just don’t get it.  You might have used them before.  Some of our customers tell us they have been through five or more merchant services company.  Our promise is that this will be the last time you ever have to switch.  Great service, great rates, great people.  That is what you can expect from us – nothing less.</p>
            </div>
            <div className="indivs">
              <p>Based in Newark, Delaware, our team has extensive experience in the payment processing industry.  We have worked for the big processors and banks, we know this business inside and out.  Now we’re here to help you.</p>
            </div>
            <div className="row inform">
              <div className="col-lg-6 col-md-6">
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="35" textAlign="left" letter="Contact Information" />
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="ADDRESS" />
                </div>
                <div className="indivs">
                  <Spanletter fontColor="#6d6d6d" fontWeight="400" fontSize="18" textAlign="left" letter="250 Corporate Blvd Suite L Newark, Delaware 19702" />
                </div>
                <div className="indivs">
                  <Spanletter fontColor="#6d6d6d" fontWeight="400" fontSize="18" textAlign="left" letter="10661 Airport-Pulling Road North, Suite 13, Naples, FL 34109" />
                </div>
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="PHONE" />
                  <p><a><strong>1-877-517-4678</strong></a></p>
                </div>
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="EMAIL" />
                  <p>sales@hostmerchantservices.com</p>
                </div>
                <div className="indivs">
                  <Spanletter fontColor="#e91818" fontWeight="900" fontSize="18" textAlign="left" letter="HOURS" />
                  <p>Monday – Friday 8 AM – 6 PM</p>
                  <img src={Images.Contact2} />
                </div>
              </div>
              <form className="col-lg-6 col-md-6 SendUS" >
                  <div>
                    <Spanletter fontColor="#e91818" fontWeight="900" fontSize="35" textAlign="left" letter="Send Us A Message" />
                    <div className="indivs row">
                        <div className="col-lg-6 col-md-6 inputform" style={{display:'grid'}}>
                          <label>Name*</label>
                          <input type="text"  />
                          <p>First</p>
                        </div>
                        <div className="col-lg-6 col-md-6 inputform" style={{display:'grid'}}>
                          <label>&nbsp;</label>
                          <input type="text" />
                          <p>Last</p>
                        </div>
                    </div>
                    <div className="indivs">
                        <label>Email*</label>
                        <input type="text"  />
                    </div>
                    <div className="indivs">
                      <label>Phone</label>
                      <input type="text"  />
                    </div>
                    <div className="indivs">
                      <label>Phone Extension</label>
                      <input type="text"  />
                      <p>0 of 25 max characters</p>
                    </div>
                    <div className="indivs">
                      <label>Message*</label>
                      <textarea type="text" />
                    </div>
                    <input id="submit" type="submit" value="Submit" />
                  </div>
              </form>
            </div>
          </S.Container>
      </S.Bg>
    )
  }

}

export default HowToBuyPage;