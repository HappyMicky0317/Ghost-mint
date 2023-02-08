import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import ColExplain1 from 'src/components/ColExplain1';

const VitalPOS = (props) => {
  return (
    <S.Bg>
        <TopImg img="VitalPOS1" letter="Vital POS Systems" />
        <S.MainContent>
            <div>
              <p>The Vital POS ecosystem has anything and everything you need in a POS system. Whether you’re looking for a complete restaurant or retail system or mobile functionality for on the go payments, get what you need and add on at any time!</p>
            </div>
            <div className="EMVMachine" style={{marginTop:'30px'}}>
                <div>
                    <ColExplain1 img="VitalPOS2" header="Vital Select E15" letter="Vital Select E15 has all the functionality your merchants need to process payments in-store quickly, securely, and efficiently. This complete countertop solution is perfect for in-store, high traffic counters." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="VitalPOS3" header="Vital Select X8" letter="Vital Select X8 is a powerful solution that combines a printer, barcode scanner and customer display in a user-friendly, all-in-one compact design. This user-friendly POS has the functionality you need in a small footprint that makes it extremely flexible." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines11" header="Vital Mobile C4" letter="Flexible and convenient Bluetooth card reader. Accepts EMV, mag-stripe and NFC/contactless payments from most digital wallets. Easy and quick set up process, perfect for mobile vendors." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines10" header="Vital Mobile C3" letter="Cost-effective card reader for on the go mag-stripe and EMV payments. Connect via Bluetooth to your mobile phone or tablet for quick, easy, and secure processing." />
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

export default VitalPOS;