import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import LineChart from "src/components/LineChart";
import { COIN_TYPES, CRYPTO_ACTIONS, DURATIONS } from "src/constants";
import moment from "moment";
import { getCoinAbbr, getCoinType, getFormatTime } from "src/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import CoinTypes from "src/components/CoinTypes";
import { loadTransactions } from "src/actions/payment.action";
import NumberFormat from 'react-number-format';

const Portfolio = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dur, setDur] = useState(DURATIONS[3]);
  const changeDuration = (duration) => {
    setDur(duration);

    let unitName  = '';
    let unitGap = 0;
    let amount = 60;
    let format = ''
    // Hour -> 60 Data
    // Day -> 144 data
    // Week -> 188 Data
    // Month -> 240 Data
    // Year -> 365 Data
    switch (duration.id) {
      case 'hour':
        amount = 60;
        unitGap = 1;
        unitName = 'minutes';
        format = 'LT'
        break;
      case 'day':
        amount = 144;
        unitGap = 10;
        unitName = 'minutes';
        format = 'LT';
        break;
      case 'week':
        amount = 188;
        unitGap = 1;
        unitName = 'hour';
        format = 'lll';
        break;
      case 'month':
        amount = 240;
        unitGap = 3;
        unitName = 'hour';
        format = 'lll';
        break;
      case 'year':
        amount = 365;
        unitGap = 1;
        unitName = 'days'
        format = 'll';
        break;
      default:
        amount = 60;
        unitGap = 1;
        unitName = 'weeks'
        format = 'll';
    }
    let current = moment();
    let dataArr = [];
    for (let i = 0 ; i < amount; i++) {
      let label = current.subtract(unitGap, unitName).format(format);
      let value = Math.ceil(Math.random() * 400);
      dataArr.push({
        x: label,
        y: value
      });
    }
    dataArr.reverse();
    setBalance(dataArr);
  }

  const [balance, setBalance] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  const [sum, setSum] = useState(1);

  useEffect(() => {
    changeDuration(DURATIONS[3]);
    setLoading(true);
    dispatch(loadTransactions())
  }, []);

  useEffect(() => {
    if(user.asset) {
      const assetArr = [];
      let price = 0;
      ['cash', ...COIN_TYPES].forEach((e) => {
        let rate = 1;
        if (user.setting && user.setting[e] && user.setting[e]['current_price']) {
          rate = user.setting[e]['current_price'];
        }
        let asset = {
          type: e,
          amount: user.asset[e],
          price: user.asset[e] * rate
        }
        price += user.asset[e] * rate;
        assetArr.push(asset);
      });
      setSum(price || 1);
      setAssets(assetArr);
    }
    console.log(user.setting);
  }, [user.asset, user.setting]);

  useEffect(() => {
    let transactionArr = user.transactions.slice(user.transactions.length - 6);
    setTransactions(transactionArr.reverse())
  }, [user.transactions])


  return (
    <Page>
      <div className="row">
        <div className="col-7">
          <ChartWrapper className="rounded">
          <div className="d-flex my-3 mx-4">
            <div className="">
              <h6 className="text-secondary mb-2">Portfolio balance</h6>
              <h4><NumberFormat value={user.asset ? (user.asset.cash || 0).toFixed(2) : '00.00'} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
            </div>
            <div className="ml-auto">
              {
                DURATIONS.map((duration, index) => (
                  <a key={index} onClick={() => changeDuration(duration)} className={(duration.id === dur.id ? 'active' : '') + ' mx-2 dur-label'}>{duration.label}</a>
                ))
              }
            </div>
          </div>
          <ChartWrapperInner className={dur.id}>
            <LineChart data={[
              {
                id: 'balance',
                data: balance
              }
            ]} margin={margin}></LineChart>
          </ChartWrapperInner>
        </ChartWrapper>
        <AssetsGroup className="bg-white pt-3 px-3 pb-4 rounded border">
          <div className="title mb-4 f-8">Your assets</div>
          <table className="w-100">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Balance</th>
                <th className="text-right">Allocation</th>
              </tr>
            </thead>
            <tbody>
              {
                assets.map((asset, index) => (
                  <tr key={index}>
                    <td>
                    <div className="d-flex align-items-center">
                    <img className="coin-icon sm mr-3" alt={asset.type} src={Images[asset.type]} />
                    {getCoinType(asset.type)}
                    </div>
                    </td>
                    <td>
                      <NumberFormat value={asset.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                      <span className="text-secondary ml-3">
                      <NumberFormat value={asset.amount.toFixed(2)} displayType={'text'} thousandSeparator={true} /> {getCoinAbbr(asset.type)}
                      </span>
                    </td>
                    <td className="text-right">
                      {(asset.price / sum * 100).toFixed(2)} %
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </AssetsGroup>
        </div>
        <div className="col-5">
            <CryptoActions className="bg-white rounded border">
              <h3 className="px-3 mb-3">Do more with crypto - COMMING SOON</h3>
              {
                CRYPTO_ACTIONS.map((action, index) => (
                  <div className="d-flex p-3 border-top" key={index}>
                    <img src={action.icon} alt="action" className="action-icon"/>
                    <div>
                      <div className="">{action.title}</div>
                      <div className="">{action.description}</div>
                    </div>
                  </div>
                ))
              }
            </CryptoActions>
            <Transactions className="bg-white rounded border">
              <h3 className="px-3 mb-3">Recent transactions</h3>
              {
                transactions.map((item, index) => (
                  <div className="d-flex p-3 border-top" key={index}>
                    <img src={item.type === 'receive' ? Images.coin_receive : Images.coin_borrow} alt="action" className="action-icon"/>
                    <div>
                      <div className="">
                        <strong>
                          <span>
                            {item.type === 'buy' && 'Bought'}
                            {item.type === 'sell' && 'Sold'}
                            {item.type === 'convert' && 'Convert'}
                            {item.type === 'send' && 'Sent'}
                          </span> <span>{getCoinType(item.asset)}</span>
                        </strong>
                      </div>
                      <div className="">
                      <NumberFormat value={item.asset_value ? item.asset_value.toFixed(4) : 0} displayType={'text'} thousandSeparator={true} />
                         {getCoinAbbr(item.asset)} ({item.price ? <NumberFormat value={item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix='$' /> : '---'}) on {moment(item.created_at + '').utcOffset(-8).format('M/DD/YYYY - hh:mm a')} PST
                      </div>
                    </div>
                  </div>
                ))
              }
            </Transactions>
        </div>
      </div>
    </Page>
  )
}

const Page = styled.div`
  .auth-icon {
    width: 40px;
    height: 40px;
  }
`


const ChartWrapper = styled.div`
  background-color: white;
  border: 1px solid gainsboro;
  margin-top: 2rem;
  margin-bottom: 3rem;

  .dur-label {
    cursor: pointer;
  }
  .dur-label.active {
    color: #2d49bb;
    font-weight: bold;
  }
`

const ChartWrapperInner = styled.div`
  height: 25vh;

  &.hour {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(24n + 1) {display: block;}
    }
  }
  &.day {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(24n + 1) {display: block;}
    }
  }
  &.week {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(36n + 1) {display: block;}
    }
  }
  &.month {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(45n + 1) {display: block;}
    }
  }
  &.year {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(70n + 1) {display: block;}
    }
  }
  &.all {
    svg > g > g:first-child {
      g { display: none;}
      g:nth-child(18n + 1) {display: block;}
    }
  }
`

const margin = {
  top: 20,
  bottom: 30,
  left: 0,
  right: 0
}

const AssetsGroup = styled.div`
  th {
    font-weight: 400;
  }

  td {
    min-height: 50px;
    height: 50px;
    img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
  }
`
const CryptoActions = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding-top: 1rem;

  img.action-icon {
    width: 36px;
    height: 36px;
    object-fit: contain;
    margin-right: 10px;
  }
`
const Transactions = styled.div`
  padding-top: 1rem;

  img.action-icon {
    width: 36px;
    height: 36px;
    object-fit: contain;
    margin-right: 10px;
  }
`

export default Portfolio;
