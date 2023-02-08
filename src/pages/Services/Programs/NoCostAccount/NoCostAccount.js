import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const NoCostAccount = (props) => {
  return (
    <S.Bg>
      <TopImg img="ApplyMerchantCash2" letter="Cash Discount Program" />
      <S.MainContent>
        <div className="indivs">
          <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="What is the Cash Discount Program?" />
          <p>The cash discount program is an ingenious way to offset your merchant service fees without increasing your pricing. Most merchants who use the cash discount program pay NOTHING for their credit card processing. Period. You’re probably saying “how does the cash discount program work? It sound’s too good to be true!”. Let us explain.</p>
        </div>
        <div className="indivs">
          <p>First of all, the cash discount program is a new account type that is growing in massive popularity across the country. Though not right for all business types, the cash discount program works extremely well with many business models.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="How does the cash discount program work?" />
            <p>Here’s how the<a> cash discount program</a> works:  The credit card terminal will automatically implement a small customer service fee to all customers while discounting that fee to customers who pay in cash. This is where the program gets its name!  The customer service fee is equal to the cost of processing each transaction, thus eliminating the merchant’s bill.  The account is completely free for merchants processing over $5K/month and only $19.99 for accounts processing under $5K/month.  *Our cash discount program is within the guidelines of Visa, MasterCard, State and processor regulations.</p>
          </div>
          <div className="col-lg-6 imgPart">
            <img src={Images.NoCostAccount1} />
          </div>
        </div>
        <div className="indivs">
          <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Businesses that work well with cash discount" />
          <p>Some business types work better with cash discount than others. Many times it comes down to whether or not the customers would be upset with having a service fee included in their transaction. The business owner would ultimately know best whether this type of payment processing account would work well for them or not. There are, however, certain industries that generally work very well with the cash discount payment processing account. For example, “service-based businesses” generally work very well – automotive shops, HVAC, landscaping, electrical, etc.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Is the cash discount program the same as surcharging?" />
            <p>No, the cash discount program is not the same as surcharging.  They seem extremely similar which can make it confusing for merchants.  Heres the difference between the cash discount program and surcharging:</p>
            <p><a><strong>Surcharging</strong></a> – Charging a customer an extra fee for paying with a credit card. This is, in essence, disincentivizing the customer to use a card.</p>
            <p><a><strong>Cash Discount</strong></a> –  Adds a service fee to “all transactions” but applies a discount equal to the service fee if the customer pays with cash or check. This is, in essence, incentivizing the use of cash.</p>
          </div>
          <div className="col-lg-6 imgPart">
            <img src={Images.NoCostAccount2} />
          </div>
        </div>
        <div className="indivs">
          <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="What about e-commerce businesses?" />
          <p>Site surveys are not only for brick and mortar businesses. Online businesses may also be required to participate in a site survey. Even though there is no physical retail location, there should be enough evidence to prove both the owner and the business. Examples of what constitutes acceptable evidence for an online company may include an office where work is performed (even if that’s within a home-based business), store of inventory, marketing materials, proof of managing the online business, proof of website ownership.</p>
        </div>
      </S.MainContent>
      <S.endContent>
        <div style={{backgroundColor:'rgba(0,0,0,0.6)',padding:'70px 0'}}>
          <div className="row">
            <div className="left col-lg-5">
              <img src={Images.LogoWhite} />
              <span>Experience A Higher Level Of Service</span>
              <div className="redSpan">
                <span>Cash Discount Program</span>
              </div>
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

export default NoCostAccount;