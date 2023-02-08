import React  from "react";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import SubmitForm from 'src/components/SubmitForm';
import ColExplain1 from 'src/components/ColExplain1';

const CloverPOS = (props) => {
  return (
    <S.Bg>
        <TopImg img="PaymentTopImg" letter="Clover POS Systems" />
        <S.MainContent>
            <div>
              <p>The Clover POS ecosystem has anything and everything you need in a POS system. Whether you’re looking for a complete restaurant or retail system or mobile functionality for on the go payments, get what you need and add on at any time! We know there are a lot of choices, so we offer complimentary express service – call <a>(877) 517-4678 Opt 1</a> to ask a payment systems specialist about your point of sale choices.</p>
            </div>
            <div className="EMVMachine" style={{marginTop:'30px'}}>
                <div>
                    <ColExplain1 img="CloverPOS1" header="Clover Station POS" letter="The clover station is one of the greatest desktop POS stations ever created. Besides its ease of use and seamless design and interface, the clover POS software comes with the cover app store. You can add on functionality as you see fit!!! This versatile station comes with a tablet interface and a printer. Optionally add register drawers, barcode scanners, and customer-facing displays. Get what you need, add on later!" />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CloverPOS2" header="Clover Mini POS" letter="The mini is a great add-on or stand-alone POS interface! Touting all the functionality of the larger Clover station, the Clover mini POS has a sleek form factor and small footprint. Perfect for use on a tight counter, as an order entry station in a restaurant, or as a customer-facing display add-on to the Clover Station POS." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CloverPOS3" header="Clover Flex POS" letter="Modern payments fast and simple and in the palm of your hand. Connect to the same great based POS as with the Clover Station and Clover Flex except in a wireless, super portable Clover Flex device! Accepts all payments that the larger stations do and has a built-in receipt printer. Whether you run a farmers market stand or want to accept payments at the restaurant table, this unit is perfect!" />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CloverPOS4" header="Clover GO POS" letter="GO mobile! With the Clover GO, your phone becomes a complete POS. It connects with Bluetooth making it super easy. The GO reader is easily connected to your phone straight from the Clover POS app. This is the leader in mobile swipers." />
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

export default CloverPOS;