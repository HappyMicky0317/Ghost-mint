import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const FundingTimes = (props) => {
  return (
    <S.Bg>
        <TopImg img="FundingTimes1" letter="Next Day Funding Times" />
        <S.NextDayFunding>
            <div className="content">
                <Spanletter fontColor="#ffffff" fontWeight="900" fontSize="42" textAlign="center" letter="Next Day Funding" />
                <div>
                    <Spanletter fontColor="#ffffff" fontWeight="400" fontSize="18" textAlign="center" letter="It’s important that you get paid quickly. We are happy to offer next day funding that gets you paid the next business day.Know when to expect deposits using the information below." />
                </div>
            </div>
        </S.NextDayFunding>

        <S.MainContent>
            <div className="inner">
                <div className="row">
                    <div className="col-lg-7 left">
                        <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="Batch Time" />
                        <div>
                            <Spanletter fontColor="#e91818" fontWeight="900" fontSize="30" textAlign="left" letter="Deadlines" />
                        </div>
                        <div className="explain">
                            <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="To get next day funding you must perform the batch settlement from your credit card machine by the deadline. If the batch settlement is sent before the deadline you will get the deposit the next business day unless it is a batch settlement on Sunday in which case you will get that deposit on the following Tuesday. Host Merchant Services can automate your batch settlements to happen at the same time everyday automatically so you never miss a deadline. If your batch settlement is sent in after the deadline it is treated as a batch settlement performed the following day." />
                        </div>
                        <div className="explain">
                          <Spanletter fontColor="#3a3a3a" fontWeight="400" fontSize="18" textAlign="left" letter="The diagram (right) shows the batch settlement deadline for different timezones." />
                        </div>
                        <div className="explain">
                          <Spanletter fontColor="#3a3a3a" fontWeight="900" fontSize="18" textAlign="left" letter="*Standard batch settlement deadlines shown*" />
                          <Spanletter fontColor="#3a3a3a" fontWeight="900" fontSize="18" textAlign="left" letter="*Options available for batch deadlines as late as 11pm EST*" />
                        </div>
                    </div>
                    <div className="col-lg-5 imageDiv">
                        <img src={Images.FundingTimes2} />
                    </div>
                </div>
                <div className="bottom">
                    <Spanletter fontColor="#db1915" fontWeight="900" fontSize="42" textAlign="center" letter="Batch and Funding Days" />
                    <div style={{marginTop:'25px'}}>
                        <Spanletter fontColor="#db1918" fontWeight="900" fontSize="30" textAlign="left" letter="What day do I get the deposit?" />
                    </div>
                    <div style={{marginTop:'25px'}}>
                      <Spanletter fontColor="#000000" fontWeight="400" fontSize="18" textAlign="left" letter="Next day funding deposits the funds collected the following business day if the batch settlement was performed before the deadline. The only day that does not follow this pattern is Sunday. Any batch settlements performed on a Sunday will be deposited on the following Tuesday. The infographic below shows the day of the week the batch is performed and the day it will be deposited." />
                    </div>
                    <div style={{marginTop:'25px'}}>
                        <img src={Images.FundingTimes3} />
                    </div>
                </div>
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

export default FundingTimes;