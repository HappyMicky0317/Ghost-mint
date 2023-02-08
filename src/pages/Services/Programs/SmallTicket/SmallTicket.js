import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';
import CheckWord from 'src/components/CheckWord';

const SmallTicket = (props) => {
  return (
    <S.Bg>
      <TopImg img="SmallTicket1" letter="Small Ticket Program" />
      <S.MainContent>
        <div className="indivs">
          <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Small Ticket Processing" />
          <p>Small Ticket Programs may be the best way for merchants to save money on fees when accepting<a><strong> credit or debit cards</strong></a> for smaller transactions. Host Merchant Services is committed to bringing its clients the lowest fees in the industry. Our Small Ticket Program is a feature that helps us do just that for those merchants who process transactions at $15 or less.</p>
        </div>
        <div className="indivs">
          <p>Many merchants have seen debit savings thanks to the <a><strong>Durbin Amendment</strong></a>, which caps the Interchange Fees that Visa and MasterCard charge for<a><strong> debit cards</strong></a> at $0.24 and 5 <a><strong>basis points</strong></a>. Smaller merchants do not see the savings when running transactions under $15, since the 24-cent per item fee and the 5 basis points amount to 2.1% of the total ticket before any additional fees are incorporated.</p>
        </div>
        <div className="indivs">
          <p>The <a><strong>Small Ticket Program</strong></a> however, allows qualifying merchants to pay a per-item fee of only 5 cents while paying an interchange rate of 1.6% for Visa. MasterCard has set its small-ticket rate at 4 cents and 1.55%. This program saves merchants money on lower transaction amounts since the per-item fee is less of a burden on them in terms of overall effective rate.</p>
        </div>
        <div className="indivs">
          <p>The<a><strong> Interchange</strong></a> category for small tickets is available for merchants who are on Interchange Plus pricing, and who qualify under the Visa and MasterCard business types listed below.  Merchants enrolled in flat-rate pricing or any type of <a><strong>three-tiered</strong></a> pricing will not be able to utilize these savings, which is just another way Interchange Plus pricing allows merchants to maximize their savings.</p>
        </div>
        <div className="indivs">
          <p>While some processing companies hide added percentage points in the difference that exists between small ticket and large ticket processing, <a><strong>Host Merchant Services</strong></a> gives the savings directly to you. Our Small Ticket Program offers a better Interchange category and a lower per item fee, saving you more money in processing fees for all purchases $15 or less.</p>
        </div>
        <div style={{marginTop:'100px'}}>
          <div className="indivs">
            <p>Visa opened up the types of businesses that qualify for Small Ticket Processing in November 2010. Now each of these industries qualify:</p>
          </div>
          <div className="checkbox">
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Local Commuter Transport" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Book Stores" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Limos & Taxis" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="News Dealers, Newsstands" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Bus Lines" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Dry Cleaners" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Bridge & Road Fees/Tolls" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Quick Copy, Reproduction & Blueprint" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Grocery Stores/Supermarkets" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Parking Lots & Garages" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Convenience Stores" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Car Washes" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Service Stations" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Motion Picture Theater" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Fast Food Restaurant" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Video Tape Rental Stores" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Drug Stores" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Post Stamps/Government Only" />
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop:'100px'}}>
          <div className="indivs">
            <p>MasterCard also expanded the qualifications for the Small Ticket Processing beginning in April 2012.  The following business types now qualify:</p>
          </div>
          <div className="checkbox">
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Transportation" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Dry Cleaners, Laundry Services" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Limousines & Taxi" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Quick Copy, Reproduction & Blueprint" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Bus Lines" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Parking Lots & Garages" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Bridge & Road Fees/Tolls" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Car Washes" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Misc. Food Stores/ Convenience" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Motion Picture Theaters" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Restaurants" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Video Rental" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="Fast Food Restaurants" />
              </div>
              <div className="col-lg-6">
                <CheckWord letter="Postal Services-Government Only" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CheckWord letter="News Dealers and Newsstands" />
              </div>
            </div>
          </div>
        </div>
        <div className="indivs">
          <p>If you qualify under any one of these categories, contact<a><strong> Host Merchant Services</strong></a> for your small ticket savings right away. Host Merchant Services promises: we deliver personal service and clarity and as always, we want to keep merchants informed of any potential savings.</p>
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

export default SmallTicket;