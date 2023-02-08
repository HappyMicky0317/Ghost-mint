import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import * as S from "src/theme/Styled";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { TabContent, TabPane } from 'reactstrap';
import Modal from 'react-modal';
import QRCode from "react-qr-code";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Images from "src/theme/Images";
import { logout } from "src/actions/user.action";
import InputNumber from 'react-input-number';
import CoinTypes from "src/components/CoinTypes";
import { buyCoin, convertCoin, loadSetting, sellCoin, sendCoin } from "src/actions/payment.action";
import { Status } from "src/constants";
import BankTypes from "src/components/BankTypes";
import CashTypes from "src/components/CashTypes";
import { getCoinAbbr, getCoinType } from "src/utils/functions";
import Cleave from "cleave.js/react";

const Navbar = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [tab, setTab] = useState('buy');
  const [tab2, setTab2] = useState('send');
  const [step, setStep] = useState(1);
  const [buyPrice, setBuyPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [convPrice, setConvPrice] = useState();
  const [sendPrice, setSendPrice] = useState();
  const [receivePrice, setReceivePrice] = useState(0);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
  const [isPaymentCompleted2, setIsPaymentCompleted2] = useState(false);

  const [buyObjType1, setBuyObjType1] = useState('bitcoin');
  const [buyObjType2, setBuyObjType2] = useState('wells fargo');

  const [sellObjType1, setSellObjType1] = useState('bitcoin');
  const [sellObjType2, setSellObjType2] = useState('cash');

  const [convObjType1, setConvObjType1] = useState('bitcoin');
  const [convObjType2, setConvObjType2] = useState('ethereum');

  const [sendObjType, setSendObjType] = useState('bitcoin');
  const [receiveObjType, setReceiveObjType] = useState('bitcoin');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [buying, setBuying] = useState(false);
  const [selling, setSelling] = useState(false);
  const [converting, setConverting] = useState(false);
  const [sending, setSending] = useState(false);
  const [receiving, setReceiving] = useState(false);
  

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const closeModal = () => {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal2 = () => {
    setIsOpen2(false);
    setStep(1);
  }
  const openModal2 = () => {
    setIsOpen2(true);
  }
  const nextStep = () => {
    setStep(2);
  }

  const buy = async () => {
    if (!user.asset) {
      alert('Something was wrong with your account. Please contact to support team to check your account.')
    }
    if (!buyPrice) {
      alert('Please input the price.');
      return;
    }
    if (user.asset && user.asset.cash < buyPrice) {
      alert('You can buy up to $' + user.asset.cash + '.');
      return;
    }
    setBuying(true);
    dispatch(buyCoin({
      asset: buyObjType1,
      bank: buyObjType2,
      price: buyPrice
    }));
  }
  const sell = () => {
    if (!user.asset || !user.setting || !user.setting[sellObjType1]) {
      alert('Something was wrong with your account. Please contact to support team to check your account.')
    }
    if (!sellPrice) {
      alert('Please input the price.');
      return;
    }
    if (user.asset && user.asset[sellObjType1] * user.setting[sellObjType1]['current_price'] < sellPrice) {
      alert('You can buy up to $' + user.asset[sellObjType1] * user.setting[sellObjType1]['current_price'] + '.');
      return;
    }
    setSelling(true);
    dispatch(sellCoin({
      asset: sellObjType1,
      bank: sellObjType2,
      price: sellPrice
    }));
  }
  const convert = () => {
    if (!user.asset || !user.setting || !user.setting[convObjType1]) {
      alert('Something was wrong with your account. Please contact to support team to check your account.')
    }
    if (!convPrice) {
      alert('Please input the price.');
      return;
    }
    if (user.asset && user.asset[convObjType1] * user.setting[convObjType1]['current_price'] < convPrice) {
      alert('You can buy up to $' + user.asset[convObjType1] * user.setting[convObjType1]['current_price'] + '.');
      return;
    }
    setConverting(true);
    dispatch(convertCoin({
      slug1: convObjType1,
      slug2: convObjType2,
      amount: convPrice
    }));
  }
  const send = () => {
    if (!user.asset || !user.setting || !user.setting[sendObjType]) {
      alert('Something was wrong with your account. Please contact to support team to check your account.')
    }
    if (!sendPrice) {
      alert('Please input the price.');
      return;
    }
    if (user.asset && user.asset[sendObjType] * user.setting[sendObjType]['current_price'] < sendPrice) {
      alert('You can buy up to $' + user.asset[sendObjType] * user.setting[sendObjType]['current_price'] + '.');
      return;
    }
    setSending(true);
    dispatch(sendCoin({
      asset: sendObjType,
      price: sendPrice,
      email: email,
      message: message
    }));
  }
  const receive = () => {

  }

  const closePayment = () => {
    setIsPaymentCompleted(false);
    closeModal();
    history.push('/app/history');
  }

  const closePayment2 = () => {
    setIsPaymentCompleted2(false);
    closeModal2();
    history.push('/app/history');
  }

  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (buying) {
      if (user.buyStatus === Status.SUCCESS) {
        setBuying(false);
        setIsPaymentCompleted(true);
      } else if(user.buyStatus === Status.FAILURE) {
        setBuying(false);
        alert(user.buyError);
      }
    }
  }, [user.buyStatus])
  useEffect(() => {
    if (selling) {
      if (user.sellStatus === Status.SUCCESS) {
        setSelling(false);
        setIsPaymentCompleted(true);
      } else if(user.sellStatus === Status.FAILURE) {
        setSelling(false);
        alert(user.sellError);
      }
    }
  }, [user.sellStatus])
  useEffect(() => {
    if (converting) {
      if (user.convertStatus === Status.SUCCESS) {
        setConverting(false);
        setIsPaymentCompleted(true);
      } else if(user.convertStatus === Status.FAILURE) {
        setConverting(false);
        alert(user.convertError);
      }
    }
  }, [user.convertStatus])
  useEffect(() => {
    if (sending) {
      if (user.sendStatus === Status.SUCCESS) {
        setSending(false);
        setIsPaymentCompleted2(true);
      } else if(user.sendStatus === Status.FAILURE) {
        setSending(false);
        alert(user.sendError);
      }
    }
  }, [user.sendStatus])

  useEffect(() => {
    dispatch(loadSetting());
    setInterval(() => {
      dispatch(loadSetting());
    }, 10000)
  }, [])

  return (
    <>
      <NotificationBar className="d-flex align-items-center justify-content-center">
        <h5 className="text-center text-white mb-0 flex-grow-1">DEMO MODE</h5>
        <button className="ml-auto btn btn-primary rounded" onClick={() => setIsOpenAlert(true)}>GO LIVE</button>
      </NotificationBar>
      <Container className="px-4">
        <div className="">Home</div>
        <div className="d-flex ml-auto">
          <button className="btn btn-primary rounded mx-2" onClick={openModal}>Buy/Sell</button>
          <button className="btn btn-default border-main rounded c-primary mx-2" onClick={openModal2}>Send/Receive</button>
        </div>
        <div className="user-info ml-3">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <ProfileToggle caret>
              <strong>
                Hi {user.profile ? user.profile.firstname + ' ' + user.profile.lastname : ''}
              </strong>
            </ProfileToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to={'/app/account'}>Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={'/app/change-password'}>Change Password</Link>
              </DropdownItem>
              <DropdownItem onClick={onLogout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-tabs">
          <div className={"tab " + (tab === 'buy' ? 'active' : '')} onClick={() => {setTab('buy')}}>Buy</div>
          <div className={"tab " + (tab === 'sell' ? 'active' : '')} onClick={() => {setTab('sell')}}>Sell</div>
          <div className={"tab " + (tab === 'convert' ? 'active' : '')} onClick={() => {setTab('convert')}}>Convert</div>
        </div>
        <MainPanel activeTab={tab}>
          <TabPane tabId="buy" className="tab-panel">
            <div className="input price-input">
              <span className="text-secondary dollar-mark">$</span>
              <Cleave className="value-input" placeholder="0" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                onChange={(e) => setBuyPrice(e.target.rawValue - 0)} value={buyPrice} style={{width: 66 * (buyPrice ? (buyPrice + '').length : 1) + 'px'}} />
              <div className="price-dir-mark">
                <img src={Images.direction} alt="direction"/>
                <span>BTC</span>
              </div>
            </div>
            <div className="desc mb-3 text-secondary">You can buy up to $25,000.00</div>
            <button className="btn btn-primary rounded-pill py-1 px-3 f-3">One time Purchase</button>

            <div className="obj-1 action-obj mt-3">
              <span className="action">Buy</span>
              <CoinTypes value={buyObjType1} onChange={setBuyObjType1}/>
            </div>
            <div className="obj-2 action-obj">
              <span className="action">Pay with</span>
              <BankTypes value={buyObjType2} onChange={setBuyObjType2}/>
            </div>

            <button className={"btn btn-primary action-btn my-2 " + (buying ? 'disabled' : '')} onClick={buy}>
              {
                buying ? 'Buying' : 'Buy ' + getCoinType(buyObjType1)
              }
            </button>
            <div className="d-flex w-100 px-3 mt-auto">
              <span>{getCoinAbbr(buyObjType1)} Balance</span>
              <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
            </div>
          </TabPane>
          <TabPane tabId="sell" className="tab-panel">
            <div className="input price-input">
              <span className="text-secondary dollar-mark">$</span>
              <Cleave className="value-input" placeholder="0" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                onChange={(e) => setSellPrice(e.target.rawValue - 0)} value={sellPrice} style={{width: 66 * (sellPrice ? (sellPrice + '').length : 1) + 'px'}} />
              <div className="price-dir-mark">
                <img src={Images.direction} alt="direction"/>
                <span>BTC</span>
              </div>
            </div>
            <button className="btn btn-primary rounded-pill py-1 px-3 mb-4">Set All</button>

            <div className="obj-1 action-obj mt-3">
              <span className="action">Sell</span>
              <CoinTypes value={sellObjType1} onChange={setSellObjType1}/>
            </div>
            <div className="obj-2 action-obj">
              <span className="action">Deposit to all</span>
              <CashTypes value={sellObjType2} onChange={setSellObjType2}/>
            </div>

            <button className={"btn btn-primary action-btn my-2 " + (selling ? 'disabled' : '')} onClick={sell}>
              {
                selling ? 'Selling' : 'Sell Bitcoin'
              }
            </button>
            <div className="d-flex w-100 px-3 mt-auto">
              <span>{getCoinAbbr(buyObjType1)} Balance</span>
              <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
            </div>
          </TabPane>
          <TabPane tabId="convert" className="tab-panel">
            <div className="input price-input">
              <span className="text-secondary dollar-mark">$</span>
              <Cleave className="value-input" placeholder="0" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                onChange={(e) => setConvPrice(e.target.rawValue - 0)} value={convPrice} style={{width: 66 * (convPrice ? (convPrice + '').length : 1) + 'px'}} />
            </div>
            <button className="btn btn-primary rounded-pill py-1 px-3 mb-4">Convert All</button>
            <div className="obj-1 action-obj mt-3">
              <span className="action">From</span>
              <CoinTypes value={convObjType1} onChange={setConvObjType1}/>
            </div>
            <div className="obj-2 action-obj">
              <span className="action">To</span>
              <CoinTypes value={convObjType2} onChange={setConvObjType2}/>
            </div>

            <button className={"btn btn-primary action-btn my-2 " + (converting ? 'disabled' : '')} onClick={convert}>
              {
                converting ? 'Converting' : 'Convert Coin'
              }
            </button>
            <div className="d-flex w-100 px-3 mt-auto">
              <span>{getCoinAbbr(buyObjType1)} Balance</span>
              <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
            </div>
          </TabPane>
          {
            isPaymentCompleted ? <CongratScreen>
              <h2 className="text-center">
                Congratulations on your purchase!
              </h2>
              <button className="btn btn-primary w-100 mt-auto rounded-0 py-2" onClick={closePayment}>CLOSE</button>
            </CongratScreen> : null
          }
        </MainPanel>
      </Modal>


      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
      >
        <div className="modal-tabs">
          <div className={"tab " + (tab2 === 'send' ? 'active' : '')} onClick={() => {setTab2('send')}}>Send</div>
          <div className={"tab " + (tab2 === 'receive' ? 'active' : '')} onClick={() => {setTab2('receive')}}>Receive</div>
        </div>
        <MainPanel activeTab={tab2}>
          <TabPane tabId="send" className="tab-panel ">
            <div className="input price-input">
              <span className="text-secondary dollar-mark">$</span>
              <Cleave className="value-input" placeholder="0" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                onChange={(e) => setSendPrice(e.target.rawValue - 0)} value={sendPrice} style={{width: 66 * (sendPrice ? (sendPrice + '').length : 1) + 'px'}} />
              <div className="price-dir-mark">
                <img src={Images.direction} alt="direction"/>
                <span>BTC</span>
              </div>
            </div>
            
            <div className="obj-1 action-obj mt-3">
              <span className="action">To</span>
              <div className="">
                <input type="email" placeholder="Enter email or address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="obj-2 action-obj">
              <span className="action">Note</span>
              <div className="">
                <input type="text" placeholder="Optional message"  value={message} onChange={(e) => setMessage(e.target.value)}></input>
              </div>
            </div>
            <div className="obj-3 action-obj">
              <span className="action">Pay with</span>
              <CoinTypes value={sendObjType} onChange={setSendObjType}/>
            </div>

            <button className={"btn btn-primary action-btn my-2 " + (sending ? 'disabled' : '')} onClick={send}>
              {
                sending ? 'Sending' : 'Send All'
              }
            </button>
            <div className="d-flex w-100 px-3 mt-auto">
              <span>{getCoinAbbr(buyObjType1)} Balance</span>
              <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
            </div>
          </TabPane>
          <TabPane tabId="receive" className="tab-panel">
            {
              step === 1 ? (
                <>
                  <div className="mt-auto" style={{width: '400px'}}>
                    <img src={Images.receiveIcon} alt="receive" style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px'}}/>
                    <h5 className="font-weight-bold text-center">Be sure to select the right Cryptocurrency</h5>
                    <p className="text-center" style={{lineHeight: 1.4}}>If you send crypto to the wrong address (eg, Bitcoin to Bitcoin Cash address), your crypto will be lost.</p>
                  </div>
                  <button className="btn btn-primary action-btn mt-2 mb-4" onClick={nextStep}>I Understand</button>
                  <div className="d-flex w-100 px-3">
                    <span>{getCoinAbbr(buyObjType1)} Balance</span>
                    <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
                  </div>
                </>
              ) : null
            }
            {
              step === 2 ? (
                <>
                  <div className="obj-1 action-obj type1 qrcode mt-3">
                    <QRCode value="hey" />
                  </div>
                  <div className="obj-1 action-obj type1">
                    <span className="action">Address</span>
                    <div className="d-flex align-items-center flex-grow-1 pr-3">
                      <span>1F1tAaz5x1HUXrCNLbtMDqc</span>
                      <div className="ml-auto">
                        <CopyToClipboard text="1F1tAaz5x1HUXrCNLbtMDqc"><img src={Images.DuplicateIcon} className="c-pointer" alt=""/></CopyToClipboard>
                      </div>
                    </div>
                  </div>
                  <div className="obj-2 action-obj type1 mb-4">
                    <span className="action">Currency</span>
                    <CoinTypes value={receiveObjType} onChange={setReceiveObjType}/>
                  </div>
                  <div className="d-flex w-100 px-3 mt-auto">
                    <span>{getCoinAbbr(buyObjType1)} Balance</span>
                    <span className="ml-auto">1 {getCoinAbbr(buyObjType1)} = $ {user.setting && user.setting[buyObjType1] ?  user.setting[buyObjType1]['current_price'] : 'Unknown'}</span>
                  </div>
                </>
              ) : null
            }
          </TabPane>
          {
            isPaymentCompleted2 ? <CongratScreen>
              <h2 className="text-center">
                You have sent coins successfully!
              </h2>
              <button className="btn btn-primary w-100 mt-auto rounded-0 py-2" onClick={closePayment2}>CLOSE</button>
            </CongratScreen> : null
          }
        </MainPanel>
      </Modal>
      <Modal
        isOpen={isOpenAlert}
        onRequestClose={() => {setIsOpenAlert(false)}}
        style={alertStyles}
      > 
        <p style={{fontSize: '16px', marginTop: '24px'}} className="text-center">
          Please Contact us at support@nomismatacapital.com when you are ready to make your first purchase
        </p>
        <button className="btn btn-primary w-100 mt-auto rounded-0 py-2" onClick={() => setIsOpenAlert(false)}>CLOSE</button>
      </Modal>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border: 1px solid gainsboro;
  background-color: white;
  padding: 0px 12px;
`

const ProfileToggle = styled(DropdownToggle)`
  background: transparent!important;
  color: black!important;
  padding: 0px;
  box-shadow: none!important;
`
const MainPanel = styled(TabContent)`
  height: 500px;
`

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '4px',
    width: '100%',
    maxWidth: '450px'
  }
};

const alertStyles = {
  content : {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translateX(-50%)',
    padding: '4px',
    width: '100%',
    maxWidth: '360px'
  }
};

const CongratScreen = styled.div`
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
`
const NotificationBar = styled.div`
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -8px;
  padding: 12px;
  background-color: red;
  margin-bottom: 16px;
`

export default Navbar;