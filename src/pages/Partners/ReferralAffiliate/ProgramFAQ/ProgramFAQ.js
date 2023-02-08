import React  from "react";
import $ from 'jquery';
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import Spanletter from 'src/components/Spanletter';

class ProgramFAQ extends React.Component{

  constructor() {
    super();
  }
  componentDidMount() {
    $('#Content1').slideDown();
    $('#BtnPart1').css('background-color','#bfbfbf');
    $("#BtnPart1").css('border-radius','10px 10px 0 0');

    var len = $("#SlideContent").children(".header").length;
    $("#SlideContent").children("div").click(function(){
      var selected_id = this.id
      var order = selected_id.slice(-1);
      $("#Content" + order).slideToggle();
      $("#BtnPart" + order).css('background-color','#bfbfbf');
      $("#BtnPart" + order).css('border-radius','10px 10px 0 0');
      for(var i = 1; i <= len ; i ++){
        if(i == order){
          continue;
        }
        $("#Content" + i).slideUp();
        $("#BtnPart" + i).css('background-color','#dddddd');
        $("#BtnPart" + i).css('border-radius','10px 10px 10px 10px');
      }
    })
  }

  render() {
    return(
      <S.Bg>
          <TopImg img="ProgramFAQ" letter="HMS Partnership FAQ" />
          <S.MainContent>
            <div id="SlideContent">
              <div id="BtnPart1" className="header " >
                  <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="How do I refer a lead?" />
              </div>
              <div id="Content1" className="Container ">
                  <p>Simply fill out<a> this form!</a></p>
                  <div className="indivs">
                    <p>Include your name and email address in the comments for the proper crediting of incentives.</p>
                  </div>
              </div>
              <div id="BtnPart2" className="header" >
                  <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="How do I answer questions about rate?" />
              </div>
              <div id="Content2" className="Container">
                  <p>Rate is complicated, so it is best to suggest that we do a written proposal where we can explain how credit card processing works and exactly what fees will be charged.  If the merchant has a current processor, it is ideal if they provide their two most recent statements for a free analysis. To provide those statements:</p>
                  <div className="indivs" >
                    <p>Email statements to: </p>
                    <p><strong>sales@hostmerchantservices.com</strong></p>
                  </div>
                  <div className="indivs" >
                    <p>Or fax statements to: </p>
                    <p><strong>(888) 535-7463</strong></p>
                  </div>
                  <div className="indivs" >
                    <p>We guarantee we will beat their current rate with an existing provider or pay them $50 for their time. Rates start as low as 1.05% and go up to 3.0% depending on the customer card type.</p>
                  </div>
                  <div className="indivs" >
                    <p><strong>Our pricing model explained:</strong></p>
                  </div>
                  <div className="indivs" >
                    <p>Interchange Plus pricing is exclusively how we quote at Host Merchant Services. Interchange Plus, also known as Cost Plus, pricing gives the customer a fixed rate over published Interchange Fees. This pricing format is normally quoted as a discount rate (percentage fee) along with a per item or authorization fee. The great thing about Interchange Plus pricing is that you always know exactly what you are paying to your processor to services your account. Think of Interchange, and all the associated fees, as an unavoidable cost. No matter who you process with, you have to pay these fees. They may be labeled differently or wrapped up in a confusing pricing tier, but one way or the other, you are paying Interchange fees. By understanding the markup you pay over Interchange, you know exactly what you pay to your processor and exactly what is going to the card associations. That allows you to make a decision on whether or not the markup seems reasonable for the service you get and choose your processing partner accordingly. We have further resources on pricing available.</p>
                  </div>
                  <div className="indivs" >
                    <ul>
                      <li><p>&nbsp;&nbsp;&nbsp;A two-part blog series compared Interchange Plus Pricing to Tiered Pricing.</p></li>
                      <li><p>&nbsp;&nbsp;&nbsp;<a>Part 1 can be found here.</a></p></li>
                      <li><p>&nbsp;&nbsp;&nbsp;<a>Part 2 can be found here.</a></p></li>
                      <li><p>&nbsp;&nbsp;&nbsp;And <a>this article </a>fully explains Merchant Services and pricing plans.</p></li>
                    </ul>
                  </div>
              </div>
              <div id="BtnPart3" className="header" >
                <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="What countries can we process for?" />
              </div>
              <div id="Content3" className="Container">
                <p>Currently, we can only process directly for customers in the US with a US bank account. However, we have referral partners to handle merchants worldwide.</p>
              </div>
              <div id="BtnPart4" className="header" >
                <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="What types of merchants do we accept?" />
              </div>
              <div id="Content4" className="Container">
                <p>Any US-based business or individual with a US bank account. We have solutions for retail, e-commerce, business-to-business, and just about anything you can think of. We integrate with most shopping carts, payment gateways, POS systems, and credit card terminals.</p>
              </div>
              <div id="BtnPart5" className="header" >
                <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="Can my customer use their existing equipment, software, or gateway?" />
              </div>
              <div id="Content5" className="Container">
                <p>Any US-based business or individual with a US bank account. We have solutions for retail, e-commerce, business-to-business, and just about anything you can think of. We integrate with most shopping carts, payment gateways, POS systems, and credit card terminals.</p>
              </div>
              <div id="BtnPart6" className="header" >
                <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="Can my customer use their existing equipment, software, or gateway?" />
              </div>
              <div id="Content6" className="Container">
                <p>Yes, in most cases. Sometimes version upgrades or replacements are required for PCI compliance, which we can assist with and subsidize for customers.</p>
              </div>
              <div id="BtnPart7" className="header" >
                <Spanletter fontColor="#3a3a3a" fontWeight="700" fontSize="18" textAlign="left" letter="What about PCI Compliance?" />
              </div>
              <div id="Content7" className="Container">
                <p>Secure transactions are important for merchants and a key element of the customer service HMS provides. Host Merchant Services offers its customers and potential customers a PCI Compliance Incentive, which includes a free security scan, analysis and report. Our customers are auto-enrolled in our PCI Compliance program. There is a fee for  PCI Compliance. The cost is $49.99 annually.</p>
                <div className="indivs" >
                  <p>Also, we have these resources available as well:</p>
                </div>
                <div className="indivs" >
                  <ul>
                    <li><p>&nbsp;&nbsp;&nbsp;<a>You can find a PCI Compliance FAQ right here.</a></p></li>
                    <li><p>&nbsp;&nbsp;&nbsp;<a>And a step-by-step guide on becoming compliant right here.</a></p></li>
                  </ul>
                </div>
              </div>
            </div>
          </S.MainContent>
      </S.Bg>
    )
  }

}

export default ProgramFAQ;