import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';

const BrenchProtection = (props) => {
  return (
    <S.Bg>
      <TopImg img="BrenchProtection" letter="Data Breach Protection" />
      <S.MainContent>
        <div className="indivs">
          <Spanletter fontSize="42" fontColor="#e91818" fontWeight="900" textAlign="left" letter="Host Merchant Services Data Breach Protection Through TrustWave" />
          <p>We at Host Merchant Services respect that some of our customers would like to decline the addition of this added feature to your account.  If you are an existing Host Merchant Services customer and you would like to decline $100,000 breach coverage for your account please complete the below form.</p>
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

export default BrenchProtection;