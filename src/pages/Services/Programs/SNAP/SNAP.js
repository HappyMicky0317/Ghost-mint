import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const SNAP = (props) => {
  return (
    <S.Bg>
        <TopImg img="SNAP1" letter="EBT Merchant Services (SNAP)" />
        <S.TopContent>
          <div className="row">
            <div className="col-lg-6">
              <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="What is EBT?" />
              <p>Electronic Benefits Transfer (EBT) is the system that the government uses to provide benefits to low-income households. Funds are transferred onto an EBT card much like a direct deposit into a bank account with a check card. The EBT card can then be used at authorized businesses to purchase food and other commodities that are approved by the government. Approved retailers are able to accept EBT card payments from customers the same as they would debit or credit cards. There is no difference for the merchant as the total purchase amount is transferred into the merchant's bank just like any other electronic payment.</p>
            </div>
            <div className="col-lg-6 imgPart">
              <img src={Images.SNAP2} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 imgPart">
              <img src={Images.SNAP3} />
            </div>
            <div className="col-lg-6">
              <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Can My Business Accept EBT?" />
              <p>Yes! If you are already registered as a SNAP (Supplimental Nutrition Assistance Program) retailer, you are ready to accept EBT payments. If your business is not registered yet, you will need to register to be a SNAP retailer first. After registration you will be given a 7-digit SNAP ID number, also referred to as an “FNS” number. This is your official SNAP retailer identification number with the government. Once you have your FNS number you can contact us to get started accepting payments!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="EBT Hardware" />
              <p>After getting signed up as a SNAP retailer with the government, you are ready to accept EBT payments. So, what exactally do you need? EBT works the same as PIN debit so if you are able to accept PIN debit, you have the hardware you need. PIN debit requires the ability for the customer to enter their PIN to complete a transaction. The use of a PIN programmed terminal or external PIN pad is needed. If you don’t accept pin debit currently, you will need to call your current processor to activate PIN debit on your merchant account.  If you have recieved your terminal from Host Merchant Services, you are already PIN debit activated. All terminals from us are preset to accept PIN. To activate EBT payments, simply call us and supply your FNS number. We will add it to your account and give you the ability to accept EBT within 2-3 business days.</p>
            </div>
            </div>
          <div className="row" style={{marginTop:'20px'}}>
            <div className="col-lg-6" style={{display:'flex'}}>
              <p style={{margin:'auto'}}>If you have an existing terminal from another source it will not work with Host Merchant Services. Terminals need a special programming for each processor. In that case, we will send you out a <strong>free terminal</strong> preprogrammed for Host Merchant Services. Our terminals are completely free with no lease or contracts.</p>
            </div>
            <div className="col-lg-6 imgPart">
              <img src={Images.SNAP4} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 imgPart">
              <img src={Images.SNAP5} />
            </div>
            <div className="col-lg-6">
              <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="How do I accept EBT with Host Merchant Services?" />
              <p>After registering with SNAP and recieving your FNS number you are ready to activate. Call Host Merchant Services and supply your FNS and we will get you processing quickly.</p>
              <p><strong>New customers</strong> will need to signup for a merchant account with us. To start please fill out the form at the bottom of this page and a we will reach out to complete the process OR call us at <a>877.517.4678</a> and we’ll get started immediately.</p>
              <p><strong>Current customers –</strong> Please call us at <a>877.517.4678</a> and provide us your FNS number. We’ll take care of the rest!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" style={{display:'flex'}}>
              <div style={{margin:'auto'}}>
                <Spanletter fontSize="30" fontColor="#e91818" fontWeight="900" textAlign="left" letter="What Does Accepting EBT Cost?" />
                <p>The cost of EBT transactions is very low at $0.10 per transaction. There are no interchange fees or card association fees because it is a government program making EBT the least expensive card to accept as a business.</p>
              </div>
            </div>
            <div className="col-lg-6 imgPart">
              <img src={Images.SNAP6} />
            </div>
          </div>
        </S.TopContent>
      <S.middleContent>
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
      </S.middleContent>
      <S.bottomContent>
        <div className="bold indivs">
          <p>Facts about SNAP and EBT</p>
        </div>
        <div className="bold indivs">
          <p>Who is entitled to SNAP benefits?</p>
        </div>
        <div className="normal indivs">
          <p>SNAP is a program designed to help low-income individuals and families buy the food and goods they need to support good health. SNAP benefits are provided for people who are:</p>
        </div>
        <div className="normal indivs">
          <ul>
            <li>
              <p>&nbsp;&nbsp;&nbsp; Currently unemployed</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;Working for low wages or who can only work part-time because of certain circumstances</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;Receiving welfare or other payments provided by public assistance programs</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp; Disabled, elderly or homeless</p>
            </li>
          </ul>
        </div>
        <div className="normal indivs">
          <p>The amount of benefits provided to each individual household will vary depending on several factors such as how many people are living in the household and how much income is left over each month after certain expenses are deducted.</p>
        </div>
        <div className="bold indivs">
          <p>Electronic Benefits Transfer (EBT)</p>
        </div>
        <div className="normal indivs">
          <p>SNAP benefits are delivered to EBT accounts and the money can be accessed through a card, similar to a debit card. Just like a debit card, there is a magnetic strip and the individual will be provided a four digit PIN number. The card will be passed through a point of sale (POS) system at check out and the individual will enter the PIN number provided to use the funds in the account. It is a simple process that is much more discreet than food stamps. Food vendors can accept this type of payment as long as they are signed up as SNAP retailers with the government.</p>
        </div>
        <div className="bold indivs">
          <p>Types of Businesses that Can Accept SNAP Benefits</p>
        </div>
        <div className="normal indivs">
          <p>SNAP benefits can only be used to buy food or plants and seeds that will be grown for consumption. Retailers must be approved by the government and must be registered as a Supplemental Nutrition Assistance Program retailer to accept EBT payments.</p>
        </div>
        <div className="normal indivs">
          <p>SNAP benefits may not be used to purchase:</p>
        </div>
        <div className="normal indivs">
          <ul>
            <li>
              <p>&nbsp;&nbsp;&nbsp;  Any non-food item such as pet foods, cosmetics, paper products or toiletries</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;Alcohol or tobacco</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;Vitamins and over the counter or prescription medications</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp; Hot foods</p>
            </li>
          </ul>
        </div>
        <div className="bold indivs">
          <p>Can Farm Stands, Farmers’ Markets and CSAs Accept SNAP Benefits?</p>
        </div>
        <div className="normal indivs">
          <p>Yes! Farm stands, farmer’s markets and CSAs (Consumer Supported Agriculture) can all become authorized SNAP vendors. If you own a farm stand, you will need to apply as an individual retailer. If you own a farmers’ market, you can apply for a single central SNAP retailer license which can be used by all the individual vendors at your market. If you are an individual vendor and your market does not have this, you can also apply individually.</p>
        </div>
        <div className="normal indivs">
        <p>CSAs need to apply individually, but they cannot charge SNAP customers up front as they would non-SNAP customers. Instead, for-profit CSAs must provide SNAP customers their farm share products immediately upon payment. Non-profit CSAs can collect payments from SNAP customers up to 14 days before giving them their farm share products.</p>
        </div>
        <div className="normal indivs">
          <p>Farm stands, farmers’ markets and CSAs can all use a standard debit and credit card machine connected to the EBT system.</p>
        </div>
        <div className="bold indivs">
          <p>Guidelines SNAP Retailers Must Follow</p>
        </div>
        <div className="normal indivs">
          <p>If you are signed up as a SNAP retailer with the government, there are some guidelines you will need to follow. You will receive a list upon approval, but here are some of the most important:</p>
        </div>
        <div className="normal indivs">
          <ul>
            <li>
              <p>&nbsp;&nbsp;&nbsp;  You may only accept SNAP payment for eligible food items</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp; You cannot charge sales tax on any food items bought with an EBT card</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;You cannot give credit and let an individual pay you back with SNAP benefits later — SNAP customers must pay for their goods at the time of sale</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp; You cannot give cash back</p>
            </li>
            <li>
              <p>&nbsp;&nbsp;&nbsp;  You must treat SNAP customers the same as all other customers</p>
            </li>
          </ul>
        </div>
        <div className="normal indivs">
          <p>If you have not yet become a EBT retailer, you should really consider it! It can boost your business and separate you from your competitors. It will open a whole new flood of customers and can help you grow outside your normal customer base. </p>
        </div>
        <div className="normal indivs">
          <p>Additional Resources:</p>
        </div>
        <div className="normal indivs">
          <ul>
            <li>
              <a>&nbsp;&nbsp;&nbsp;  What is an FNS Number</a>
            </li>
          </ul>
        </div>
      </S.bottomContent>
    </S.Bg>
  );
};

export default SNAP;