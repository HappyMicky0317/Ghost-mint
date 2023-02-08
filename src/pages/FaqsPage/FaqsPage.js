import React, {useState} from "react";
import { connect } from "react-redux";
import Images from "src/theme/Images";
import * as S from "./styled";
import {Collapse, Button, CardBody, Card} from 'reactstrap'

const FaqsPage = (props) => {
  const faqs = [
        {
            title: 'How can I buy Bitcoin?',
            description: `You can buy Bitcoin with your personal credit or debit card using any VISA, Mastercard or Maestro card in your name. For purchases in EUR or GBP, you can also buy via bank wire.

            Simply select the amount you’d like to purchase and you will be redirected to a secure card payment page or to our bank wire instructions.`
        },
        {
          title: 'How do I know that the purchase was successful?',
          description: `Your Bitcoin Balance will increase with the amount of Bitcoin you just bought. Alternatively, look in your Transaction History or My Account menu and check that the transaction is marked as “Finished”.
          For card transaction, your balance will usually increase instantly. For wire payments, your balance will increase when your wire hits our bank account and we match the money to your account.`
        },
        {
            title: `I've paid - where's my Bitcoin?`,
            description: `Any Bitcoin you purchase will be stored on your Instacoins account. You should see a balance along the top menu bar or click on My Account from the menu bar for more details. Available Balance is your Balance less any withdrawals which are in process or pending authorisation.`
    },
    {
        title: 'How can I transfer my Bitcoin?',
        description: `Click on Transfer on the left-hand side menu, enter the amount of BTC you’d like to transfer, and enter the correct destination Bitcoin address. Then click on Transfer Now to process the transfer.`
    },
    {
        title: 'Why is my Available Balance 0? I have been charged.',
        description: `"Available Balance" is your Balance less any transfers which are in process or pending authorisation. You likely have one or more pending transfers that you need to authorise or cancel. To authorise or cancel pending transfers, click on Transaction History from the menu bar, and check if you have any transfers which need your authorisation.
        To send your Bitcoin, click on the green Transfer ID. On the next screen, click Authorise to send the Bitcoin to the specified address, or click Cancel if you’d like to send the Bitcoin elsewhere or later. When you cancel a transfer, the corresponding Bitcoin amount is added back to your available balance
        If you have multiple transfers which are pending authorisation and you’re unsure which you should be authorising, feel free to cancel them and instruct a transfer yourself for the correct amount and the correct Bitcoin address. Follow the instructions above to cancel pending transfers and please allow up to 10 minutes for any balances to update.`
    },
    {
        title: 'How long does it take Instacoins to send my Bitcoin?',
        description: `Bitcoin is sent within 10 minutes of a successful transfer.`
    },
    {
        title: 'Does Instacoins offer a Bitcoin wallet?',
        description: `Instacoins is not a wallet service. Feel free to visit <a class="text-primary" href="https://www.blockchain.info/wallet">www.blockchain.info/wallet</a> to obtain a free Bitcoin wallet.
        However, we will act as a custodian for your coins until you are ready to transfer them to an address of your choice.`
    },
    {
        title: 'Are other virtual currencies available for purchase?',
        description: `At this time, Bitcoin is the only cryptocurrency that we offer.`
    },
    {
        title: 'Can I sell Bitcoin on Instacoins?',
        description: `At this time, Instacoins can only be used to buy Bitcoin.`
    },
    {
        title: 'Does Instacoins conduct trades between buyers and sellers?',
        description: `No. Each transaction will be directly between you and Instacoins.`
    },
    {
        title: 'What are the rates for buying Bitcoin from Instacoins?',
        description: `As there is no central exchange controlling the rate, each website that you visit will have its own Bitcoin rate. Our exchange rate will always be displayed prior to completing your card purchase. We will always show the price in EUR, GBP or USD for 1 Bitcoin.
        For bank wires however, please note that we will charge you the prevailing rate when the funds hit our bank account and the money is matched to your account.`
    },
    {
        title: 'Where can I view my past purchases?',
        description: `Clicking on My Account will give you a complete list of all your successful transactions with Instacoins. Alternatively, click on Transaction History to view a complete list of your past activities.`
    },
    {
        title: 'Why do I see a charge on my account, but have not received the coins?',
        description: `Your bank or card company has likely placed a pre-authorization on your account for the purchase amount but has not cleared the payment. A pre-authorization simply saves the transaction for future approval (or decline). This typically expires after 72 hours, meaning the transaction will be declined by your bank and the funds will be released, but banks will have different timelines for this. Speak with your bank or card company if you have questions.`
    },
    {
        title: 'Can you reverse or refund my transaction?',
        description: `If you've been billed and your Bitcoin balance has not changed please get in touch with our team. We will investigate and rectify your balance or issue a refund within 48 hours if due.
        We will allow a transaction to be refunded under limited circumstances. Please visit <a class="text-primary" href="https://www.instacoins.com/refund-policy/">https://www.instacoins.com/refund-policy/</a> for more information.`
    },
    {
        title: 'I have transferred the funds to the wrong Bitcoin address. What now?',
        description: `Entering the correct Bitcoin address is your sole responsibility. If you know the owner of that address you can try and get in touch to see if you can recover the funds.
        Please consult our full Terms of Use for more information.`
    },
    {
        title: 'Why is my purchase not going through?',
        description: `In most cases, your bank is likely blocking the transaction from going through. Speak to one of our agents over live chat to get more information on why this may be happening. Alternatively, send us an email on support@instacoins.com and include all relevant information and/or screenshots.`
    },
    {
        title: 'Do you offer your service in every country?',
        description: `We offer our service in as many countries as possible but reserve the right to not offer services to nationals or residents of countries which have laws in place that restrict cryptocurrency transactions or the use of cryptocurrency in general.`
    },
    {
        title: `Which currencies do you accept?`,
        description: `Feel free to pay with your local currency, but note that pricing will be displayed in EUR, USD or GBP on our website. You will also be billed in one of those currencies – you can choose your billing currency for every transaction.`
    },
    {
        title: `What's the minimum amount I can buy or transfer?`,
        description: `The minimum fiat amount you can buy is EUR 50 / GBP 50 / USD 50
        The minimum crypto amount you can transfer is BTC 0.001`
    },
    {
        title: `What's the maximum amount I can buy or transfer?`,
        description: `Your card limits will depend on the level of due diligence documentation provided. You can purchase up to EUR/USD/GBP 15,000 on a daily basis and up to EUR/USD/GBP 30,000 on a 30-day rolling basis. No single card transaction can exceed EUR/USD/GBP 5,000. In some cases, the maximum single transaction will be limited to EUR/USD/GBP 1,000.
        You can check your card limits by clicking on “Your Limits” on the left-hand side menu.
        There is no maximum for wire transfers, but each case will be judged on its own merit. Larger wires might require additional documentation for the Bitcoin equivalent to be released. There is also no maximum for transferring your crypto.`
    },
    {
        title: 'How many transactions can I make?',
        description: `The maximum number of card transactions will depend on the level of due diligence documentation provided. You can buy Bitcoin up to 5 times on a daily basis and up to 30 times on a 30-day rolling basis.
        Please note that this only applies to successful card transactions. Any transactions which fail will not contribute towards your total, and transfers are also unlimited.`
    },
    {
        title: 'What happens if I exceed my limits?',
        description: `Depending on which limits you are hitting, you may need to wait for a few hours or days to process a new transaction.
        Speak to our support team to have your limits raised if you find the limits are too restrictive for you.`
    },
    {
        title: 'How do I increase my limits?',
        description: `We will require some additional information and/or documentation about you and your account. Speak to our support team to have your account reviewed or for more information.
        After any additional information and/or documentation is collected, an account review will be carried out. Please allow for a maximum of 72 hours for the account to be reviewed.`
    },
    {
        title: 'Can I have more than one account?',
        description: `Our policy is strictly one account per person. Attempts to circumvent this will result in one or all of your accounts being suspended.`
    },
    {
        title: 'How do I add another card?',
        description: `Click on the ‘Register New Card’ link from the menu on the left. Upload your new credit card images in the appropriate slots and click ‘Submit’.
        Please note there is a limit to the number of active concurrent cards that can be used on your account. Limits range from 2 to 4 cards, depending on the level of due diligence documentation provided.`
    },
    {
        title: 'Why must I submit ID and Address proof?',
        description: `As part of our anti-money laundering requirements, each person who uses our services must upload a copy of their valid photo identification and current residential address proof.
        You may be required additional forms of documentation as part of our ongoing anti-money laundering efforts.`
    },
    {
        title: `What forms of identification are acceptable?`,
        description: `A Passport, Driver’s Licence, or National Identity card (both sides) are acceptable forms of photo identification. Other forms may be accepted, provided that they show your photo and are government-issued. The document must show your date of birth and a valid expiry date. Note that even if your ID card does have your address, it cannot be used as both ID and address proof.`
    },
    {
        title: `What's a Selfie ID?`,
        description: `At times we may require you to take a selfie with your ID for identity verification purposes. To take a good Selfie ID, please follow the following steps:
        – Make sure you are in a room with ample light
        – Select the best available photo quality for your device
        – Hold up your ID document close your face
        – Make sure both your face and your ID are clear enough before sending
        It’s important to avoid covering up any information on the ID document, as this will render the Selfie ID invalid.`
    },
    {
        title: `What types of address documents are acceptable?`,
        description: `We primarily accept bank or credit card statements or utility bills (gas, water, electricity, fixed line telephone). We encourage you to blank out sensitive information on financial documents such as the first few digits of your account or digits 7 thru 12 of your credit card number.
        Please note that the submitted document must be in your name and dated within the past three months (90 days).`
    },
    {
        title: `Do you store my bank, credit or debit card details when I make a purchase?`,
        description: `We do not store any sensitive card or bank details within our systems or elsewhere besides the data we need to process your transaction.`
    },
    {
        title: `What steps do you take to secure my data?`,
        description: `We do not store sensitive payment details anywhere on our site or servers. As for your personal details and documents, those are encrypted.`
    },
    {
        title: `Can I change my password?`,
        description: `Of course – click on Password and Security from the menu to access the password area. There, you will need to enter your old password and then the new password of your choosing. Your password has to include a minimum of 8 characters and at least one upper case letter, one number and one special case letter.
        Alternatively, you can click on Forgot Password from the login screen.`
    },
    {
        title: `Do you have two-factor authentication (2FA)?`,
        description: `Yes we do – click on Password and Security from the menu and then click on Enable 2FA. We highly encourage you to enable 2FA for added security.`
    },
    {
        title: `Is Instacoins regulated?`,
        description: `Yes! Instacoins Estonia OU is incorporated in Estonia and is licensed to carry out Virtual Currency Services by the Estonian Financial Intelligence Unit with license number FVT000081.`
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
        <S.CardContainer>
            <h1>Frequently Asked Questions</h1>
            <h3>Nomismata Capital is one of the easiest and most trusted places to buy Crypto securely</h3>
            <img src={Images.QuestionIcon} alt="question"/>
        </S.CardContainer>
        <S.ContentsContainer className="px-3">
            <div className="questions-container">
                {
                    faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                            <div className={'header ' + (currentIndex === index ? 'opened' : 'closed')} onClick={() => setCurrentIndex(index)}>
                                {faq.title}
                            </div>
                            <Collapse isOpen={currentIndex === index}>
                                <div className="description" dangerouslySetInnerHTML={{__html: faq.description}}>
                                </div>
                            </Collapse>
                        </React.Fragment>
                    ))
                }
            </div>
        </S.ContentsContainer>
    </>
  );
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FaqsPage);