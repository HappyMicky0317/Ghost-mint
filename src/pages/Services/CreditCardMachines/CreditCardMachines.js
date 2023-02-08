import React  from "react";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import RedBtn from 'src/components/RedBtn';
import WhiteBtn from 'src/components/WhiteBtn';
import Spanletter from 'src/components/Spanletter';
import ColExplain1 from 'src/components/ColExplain1';

const CreditCardMachines = (props) => {
  return (
    <S.Bg>
        <TopImg img="PaymentTopImg" letter="Credit Card Machines" />
        <S.MainContent>
            <div>
                <p>Host Merchant Services handles payment processing for all different business types throughout the United States and Canada. Whether it’s processing for a restaurant that requires a point of sale system, eCommerce business with an online shopping cart, or a business on the go we have you covered! Your personal payment expert is waiting and ready to speak with you about all of the options available and to help you find the highest value processing with the lowest cost. Check out some of our options below or just give us a call at <a>(877) 517-4678.</a> </p>
            </div>
            <div>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="42" textAlign="left" letter="The Best Credit Card Machines for Payment Processing" />
                <div style={{marginTop:'20px'}}>
                    <p>There are many credit card processing terminals from desktop terminals to mobile swipers. Each has their own strengths. Selecting a terminal that has features your business needs is essential to getting the most out of your payment processing. The sections below will help you pick the right machine for your business.</p>
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-4" style={{height:'66px'}} ><RedBtn letter="TRADITIONAL" /></div>
                <div className="col-lg-4" style={{height:'66px'}} ><RedBtn letter="MOBILE & WIRELESS" /></div>
                <div className="col-lg-4" style={{height:'66px'}} ><RedBtn letter="PIN DEBITS PIN PADS" /></div>
            </div>
            <div className="EMVMachine" style={{marginTop:'30px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="40" textAlign="center" letter="Traditional Desktop EMV Credit Card Machines" />
                <div style={{marginTop:'30px'}}>
                    <p>Countertop credit card swipers give the ability to process all card payment options within your business. These units are connected via ethernet or phone line and have the ability to add on pin pads required for pin debit transactions.</p>
                </div>
                <div>
                    <ColExplain1 img="CreditCardMachines1" header="PAX A920" letter="The PAX A920 is the most beautiful touch-screen credit card terminal on the market. It comes with the speed and processing power of a high-end smartphone but in a cutting edge credit card machine. A few features: High def touch screen, high capacity 5250mAH Battery, built-in thermal printer, and connects to the PAXSTORE!" />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines2" header="PAX A80" letter="With a stunning 4″ HD touchscreen display, built-in camera, fast thermal printer and optional battery pack. The Pax A80 is the workhorse of the industry. Perfect for countertops or mobile use!
Stay connected with multiple options including 3G, WiFi, Dial, or Ethernet." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines3" header="VeriFone VX520" letter="Process any debit or credit card with speed on this high tech, easy-to-use terminal featuring both swipe and EMV chip processing. Lightning-fast processor and ethernet connection supercharge processing speed. Increase customer satisfaction with the fast and simple payment experience delivered by the VeriFone VX520." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines4" header="Ingenico iCT250" letter="Get high security and modern color display all in a lightweight form factor. Choose to connect through an ethernet port or phone line. Process using swipe or EMV chip. Large backlit keys make for an accurate and enjoyable user experience with the Ingenico iCT250. Connect a pin pad for processing pin debit transactions." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines5" header="Ingenico iCT220" letter="This unit boasts high security and lightweight form factor. Choose to connect through ethernet port or phone line. Process with swipe or EMV chip. Large backlit keys make for an accurate and enjoyable user experience with the Ingenico iCT220. Connect a pin pad for processing pin debit transactions." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines6" header="Dejavoo Z8" letter="With multiple connection options, the Z8 boasts a simple plug and play style. With a backlit LCD screen, built-in printer, and function keys it’s perfect for any small to mid-sized business.

Start accepting EMV chip cards and NFC (contactless payments) with ease." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines7" header="Dejavoo Z9" letter="The perfect solution for a sit-down restaurant or an electrician on the move. The Incredibly versatile Z9 has got you covered. No WiFi connection available? use the 3G GPRS network. Or connect via Wifi and save on data usage." />
                </div>
            </div>
            <div className="EMVMachine" style={{marginTop:'130px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="40" textAlign="center" letter="Mobile and Wireless Credit Card Machines" />
                <div style={{marginTop:'30px'}}>
                    <p>Take these machines on the go and do business anywhere with a wireless connection. Don’t let anything hold you back! Take to the streets! Built-in printers make it easy to process on the go. Connect through GPRS, Bluetooth, wifi, and/or mobile data.</p>
                </div>
                <div>
                    <ColExplain1 img="CreditCardMachines8" header="Ingenico iWL250 / iWL255 " letter="Process any debit or credit cards on the go with on this fast mobile credit card machine. Designed to for 3G connectivity this mobile swiper is highly reliable. process both swipe and EMV chip. Increase customer satisfaction with the fast and simple payment experience delivered on the go by the Ingenico iWL250 / iWL255." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines9" header="SwipeSimple Mobile EMV Processing" letter="Enjoy a complete mobile processing solution that includes POS, EMV mobile swiper, NFC acceptance for Apple Pay and Android Pay, and much more!" />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines10" header="Vital C3 Card Reader" letter="Cost-effective card reader for on the go mag-stripe and EMV payments. Connect via Bluetooth to your mobile phone or tablet for quick, easy, and secure processing." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines11" header="Vital C4 Card Reader" letter="Flexible and convenient Bluetooth card reader. Accepts EMV, mag-stripe and NFC/contactless payments from most digital wallets. Easy and quick set up process, perfect for mobile vendors." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines12" header="Rambler 3.0 Mobile Swiper" letter="This highly versatile and durable mobile swiper works with any smartphone or tablet. Easy to use. Simply plug it into the headphone jack of your mobile device and open the ProcessNow app! Have the power to accept payment anywhere." />
                </div>
            </div>
            <div className="EMVMachine" style={{marginTop:'130px'}}>
                <Spanletter fontColor="#e91818" fontWeight="900" fontSize="40" textAlign="center" letter="PIN Pads" />
                <div style={{marginTop:'30px'}}>
                    <p>These customer-facing pin pads allow the customer to swipe their own card as well as provide their PIN that is required for PIN debit transactions. Add a higher level of customer satisfaction and open your business to processing PIN debit transactions with these low-cost add-on PIN pads.</p>
                </div>
                <div>
                    <ColExplain1 img="CreditCardMachines13" header="VeriFone VX805" letter="The VeriFone VX805 is a state of the art and easy to use PIN pad that integrates with the VeriFone VX520 or your point of sale system enabling you to accept debit card transactions." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines14" header="Ingenico iPP310" letter="The Ingenico iPP310 Pin pad integrates with the Ingenico iCT220 and iCT250 or your point of sale system and allows the customer to run their own card and input their PIN for debit card transactions." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines15" header="Ingenico iPP320" letter="For customers and merchants, iPP320 is quick and easy to use, streamlines payment, and improves overall customer experience. Accept magstripe, Chip & PIN, and mobile/NFC, is EMV and PCI PTS V3 certified." />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines16" header="PAX S300" letter="Lightweight, stylish design with a large 3.5″ color LCD touch screen and loudspeaker. The PAX S300 offers high levels of security including PCI PTS 3.x and SRED. A perfect solution for retail stores and restaurants!" />
                </div>
                <div style={{marginTop:'30px'}}>
                    <ColExplain1 img="CreditCardMachines17" header="Dejavoo Z3" letter="The Dejavoo Z3 PIN pad payment device will accept EMV and has built-in NFC Contactless reader. Interface with iOS, Androids, PC POS systems a perfect solution for e-commerce." />
                </div>
            </div>
        </S.MainContent>
        <S.endContent>
            <div className="content">
                <div className="row">
                    <div className="col-lg-8">
                        <Spanletter fontColor="#fff" fontWeight="900" fontSize="30" textAlign="left" letter="Get Your FREE Merchant Services Account Review and Quote!" />
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <WhiteBtn letter="GET STARTED" />
                            </div>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <Spanletter fontColor="#fff" fontWeight="400" fontSize="18" textAlign="center" letter="Or Call us! 877-517-HOST (4678)" />
                        </div>
                    </div>
                </div>
            </div>
        </S.endContent>
    </S.Bg>
  );
};

export default CreditCardMachines;