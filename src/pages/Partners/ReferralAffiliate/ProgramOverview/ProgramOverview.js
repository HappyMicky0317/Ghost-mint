import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const ProgramOverview = (props) => {
  return (
    <S.Bg>
      <TopImg img="Pricing1" letter="Referral Program" />
      <S.MainContent>
        <div className="indivs">
          <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Make Extra Money" />
        </div>
        <div className="indivs">
          <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="The Host Merchant Services affiliate/referral program." />
        </div>
        <div className="indivs">
          <p>As a Host Merchant Services customer, you can make money by referring us to other businesses. You get $100 for every account you refer that becomes a customer! Simply fill out the form here to claim the lead. We will reach out to them and upon the referred business signing up with us you will get $100! Easy money! We will either credit your account with us or send you a gift card, whichever you want.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 imgPart">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/08/Referral-Step-1.svg" />
          </div>
          <div className="col-lg-6">
            <div className="leftContent">
              <Spanletter fontColor="#2b2b2b" fontWeight="900" fontSize="24" textAlign="left" letter="Step 1" />
              <Spanletter fontSize="40" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Refer an account" />
              <p>Tell the business owner that they will save money and get better service with HMS. Then, fill out the simple form below to claim the referral.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="leftContent">
              <Spanletter fontColor="#2b2b2b" fontWeight="900" fontSize="24" textAlign="left" letter="Step 2" />
              <Spanletter fontSize="40" fontColor="#e91818" fontWeight="900" textAlign="left" letter="We Reach Out" />
              <p>We will make contact with the referred business and sell them on our services.</p>
            </div>
          </div>
          <div className="col-lg-6 imgPart">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/08/Referral-Step-2.svg" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 imgPart">
            <img src="https://www.hostmerchantservices.com/wp-content/uploads/2020/08/Referral-Step-3.svg" />
          </div>
          <div className="col-lg-6">
            <div className="leftContent">
              <Spanletter fontColor="#2b2b2b" fontWeight="900" fontSize="24" textAlign="left" letter="Step 3" />
              <Spanletter fontSize="40" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Get Paid $100!" />
              <p>Upon referred business signing up with us, you get paid $100!!! The easiest money you’ve ever made!</p>
            </div>
          </div>
        </div>
      </S.MainContent>
      <S.MiddleContent>
        <div style={{backgroundColor:'rgba(121,121,121,0.5)',padding:'70px 0'}}>
          <div className="row">
            <div className="right col-lg-10">
              <SubmitForm />
            </div>
          </div>
        </div>
      </S.MiddleContent>
      <S.EndContent>
        <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="center" letter="Meet Our Partners" />
        <div className="indivs">
          <p>These companies partnered with Host Merchant Services and now offer payment processing as a service to their customers. Now they are able to offer greater services and lower rates than their competitors which grows their business and increases the bottom line. There's no better partner than Host Merchant Services.</p>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview1} />
          </div>
          <div className="col-lg-10">
            <p> SingleHop, Inc., is a full-service hosting provider based in Chicago. The company was founded by Zak Boca and Dan Ushman in 2006 and hosts websites for thousands of customers in more than 100 countries. SingleHop was ranked #58 in the 2010 Inc. 500.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview2} />
          </div>
          <div className="col-lg-10">
            <p>IMSMB has helped thousands of small businesses make their online presence professional. IMSMB combines professional design and marketing expertise with proven approaches to help build and promote the best web sites and web applications.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview3} />
          </div>
          <div className="col-lg-10">
            <p>GearHost is a Microsoft Gold Certified Windows Hosting Partner that specializes in complex hosted managed servers, CloudServers and shared Windows Web Hosting Solutions for ASP.NET, ColdFusion, Exchange Business Email and other technologies.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview4} />
          </div>
          <div className="col-lg-10">
            <p>Edge Web Hosting, a leading provider of mission-critical managed hosting services, is committed to delivering 100% uptime at a predictable monthly cost. And no matter the size of their client’s company, Edge builds a custom-tailored hosting environment based on the customer’s individual needs.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview5} />
          </div>
          <div className="col-lg-10">
            <p>Since 1997, over 100,000 customers have entrusted HostMySite with their web presence for one simple reason: the company’s unmatched quality of service. HostMySite’s team of professional system administrators and engineers have a passion for helping people succeed on the web, and that drives everything else the company does.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview6} />
          </div>
          <div className="col-lg-10">
            <p>VexxHost’s internet hosting services allow you to focus on the growth of your business without having the stress of looking for ways to scale and upgrade your site as your business expands. Being a company that’s all about customer satisfaction, VexxHost always aims to add the personal touch in contact with its clients. The award-winning company always looks for new ways to enhance its web hosting services without raising any prices.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview7} />
          </div>
          <div className="col-lg-10">
            <p>
              ServInt is a pioneering provider of high-reliability, managed cloud hosting services for enterprises worldwide. Founded in Northern Virginia in 1995, ServInt provides a range of IaaS, PaaS, VPS and dedicated server packages to hosting service resellers, web designers, developers and online businesses in more than 130 countries.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview8} />
          </div>
          <div className="col-lg-10">
            <p>Certified Hosting is a domain name registration and web hosting provider focused on bringing our clients the absolute best customer experience in the industry. When it comes to domains and the best web hosting services, we’ve got it all. Unlimited shared hosting, reseller hosting and even your very own dedicated server.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview9} />
          </div>
          <div className="col-lg-10">
            <p>
              IQComputing provides custom website design, graphic design, hosting, and development solutions to the St Louis area as well to clients around the United States with a personal approach that addresses the unique needs of small businesses in diverse industries.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={Images.ProgramOverview10} />
          </div>
          <div className="col-lg-10">
            <p>The Technology Forum of Delaware serves the technology markets throughout the Delaware Valley. Technology Forum Delaware is dedicated to helping the region’s technology business leaders acquire the knowledge, relationships and resources needed to compete and succeed in a global economy.</p>
            <a>Visit Partner Site</a>
          </div>
        </div>
        <div className="AdditionalResources">
          <p>Additional Resources:</p>
          <ul>
            <li><a>&nbsp;&nbsp;&nbsp;Professional Services Partners</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;Web Designer Partnership</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;Web Host Partnership</a></li>
            <li><a>&nbsp;&nbsp;&nbsp;Website Owner Partnership</a></li>
          </ul>
        </div>
      </S.EndContent>
    </S.Bg>
  );
};

export default ProgramOverview;