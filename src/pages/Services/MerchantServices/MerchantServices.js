import React, { useState } from "react";
import { connect } from "react-redux";
import Images from "src/theme/Images";
import * as S from "./styled";
import TopImg from 'src/components/TopImg';
import RedBtn from 'src/components/RedBtn';
import WhiteBtn from 'src/components/WhiteBtn';
import SubmitForm from 'src/components/SubmitForm';
import Spanletter from 'src/components/Spanletter';
import '../../../index.css'

const MerchantServices = (props) => {
    const [state, setState] = React.useState({ price:'' , num:''});
    const toLanding = () => {
        window.location = "https://www.lyinglepreconslive.com/";
    };
  return (
    <S.Bg>
        <S.Header>
            <div style={{display:'inline-block',width:'99%'}}>
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-12">
                    <img className="logo-img" onClick={toLanding} src={Images.logo} />
                    </div>
                    <div className="col-lg-8 col-md-9 col-sm-12" style={{textAlign:'center'}}>
                        <button className="connect-button">Connect Wallet</button>
                    </div>
                </div>
            </div>            
        </S.Header>
            
        <img className="logo" src={Images.logo} />
        <S.MainContent className="row">
        <div className="address-con">
            <span className="wallet-address">0x698fE011702245af75aF03C9d85bA7d4fee450ca</span>
        </div>
            <span className="NFT-logo"></span>
            <div className="cost-con">
                <span className="cost-word">Sol Price : </span>
                <input className="cost-val" type="number" value={state.price} onChange={(ev) => setState({...state, price: ev.target.value})} />
            </div>
            <div className="cost-con">
                <span className="cost-word">Quanity to Mint : </span>
                <input className="cost-val mintNum-val" type="number" value={state.num} onChange={(ev) => setState({...state, num: ev.target.value})} />
            </div>
            <div className="minted-con">
                <span className="mint-word">Number Minted/Remaining  :</span>
                <span className="mint-value">100</span>
                <span className="mint-value">/</span>
                <span className="mint-value">200 </span>
            </div>
            <button className="mint-button">Mint</button>
        </S.MainContent>
        <S.Footer>
            <span className="footer-word footer-preword">All Rights Reserved by&nbsp; </span>
            <span className="footer-word"> Lying LepreCons</span>
        </S.Footer>
    </S.Bg>
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
)(MerchantServices);