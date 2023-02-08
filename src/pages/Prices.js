import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import Colors from "src/theme/Colors";
import { useSelector } from "react-redux";
import NumberFormat from 'react-number-format';

const Prices = (props) => {
  const user = useSelector(state => state.user);
  const [prices, setPrices] = useState([]);
  const list = [
    {
      type: 'bitcoin',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'ethereum',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'ripple',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'litecoin',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'bitcoin-cash',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'chainlink',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: false
    },
    {
      type: 'stellar',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: true
    },
    {
      type: 'usd-coin',
      price: '22663.23',
      change: '-4.89',
      cap: 419.7,
      favorite: false
    }
  ]

  const getType = (type) => {
    switch (type) {
      case 'bitcoin':
        return 'Bitcoin';
      case 'ethereum':
        return 'Ethereum';
      case 'ripple':
        return 'XRP';
      case 'litecoin':
        return 'Litecoin';
      case 'bitcoin-cash':
        return 'Bitcoin Cash';
      case 'chainlink':
        return 'Chainlink';
      case 'stellar':
        return 'Stellar Lumens';
      case 'usd-coin':
        return 'USD Coin';
      default:
        return 'Coin'
    }
  }
  const getTypeSum = (type) => {
    switch (type) {
      case 'bitcoin':
        return 'BTC';
      case 'ethereum':
        return 'ETH';
      case 'ripple':
        return 'XRP';
      case 'litecoin':
        return 'LTC';
      case 'bitcoin-cash':
        return 'BCH';
      case 'chainlink':
        return 'LINK';
      case 'stellar':
        return 'XLM';
      case 'usd-coin':
        return 'USDC';
      default:
        return 'COIN'
    }
  }

  useEffect(() => {
    if (user.setting) {
      let settingsArr = Object.values(user.setting);
      setPrices(settingsArr);
    }
  }, [user.setting])

  return (
    <Page className="pt-4">
      <div className="d-flex">
        <div>

        </div>
        <div className="ml-auto">

        </div>
        <div className="">

        </div>
        <div className="">

        </div>
      </div>
      <PriceList className="rounded">
        <div className="d-flex price-item header">
          <div className="index">#</div>
          <div className="name-wrapper">Name</div>
          <div className="price">Price</div>
          <div className="change">Change</div>
          <div className="cap">Market cap</div>
          <div className="trade">Trade</div>
          <div className="watch">Watch</div>
        </div>
        {
          prices.map((item, index) => (
            <div className="d-flex price-item" key={index}>
              <div className="index">
                {index + 1}
              </div>
              <div className="name-wrapper d-flex">
                <img className="coin-icon sm mr-3" alt={item.id} src={Images[item.id]} />
                <div className="name">{getType(item.id)}</div>
                <div className="name-sum">{getTypeSum(item.id)}</div>
              </div>
              <div className="price ml-auto">
                <NumberFormat value={item.current_price ? item.current_price : 0} displayType={'text'} thousandSeparator={true} prefix='$'/>
              </div>
              <div className={"change " + (item.price_change_percentage_24h > 0 ? 'increase' : 'decrease')}>
                {item.price_change_percentage_24h}%
              </div>
              <div className="cap">
                <NumberFormat value={item.market_cap ? item.market_cap : 0} displayType={'text'} thousandSeparator={true} prefix='$'/>
              </div>
              <div className="trade">
              </div>
              <div className="watch">
              </div>
            </div>
          ))
        }
      </PriceList>
    </Page>
  )
}

const Page = styled.div`
  
`
const PriceList = styled.div`
  width: 100%;
  background: white;
  overflow: hidden;

  .price-item {
    border-bottom: 1px solid gainsboro;
    & > div {
      padding: 16px 8px;
    }

    .index {
      width: 50px;
      text-align: center;
    }

    .name-wrapper {
      flex: 1;
      margin-left: 24px;
      align-items: center;

      .name {

      }
      .name-sum {
        color: #aaa;
        margin-left: 10px;
      }
    }
    .price {
      width: 100px;
    }
    .change {
      width: 100px;
      &.increase {
        color: ${Colors.green};
      }
      &.decrease {
        color: ${Colors.red};
      }
    }
    .cap {
      width: 100px;
    }
    .trade {
      width: 150px;
    }
    .watch {
      width: 80px;
    }

    &.header {
      & > div {
        font-size: 13px;
        color: #aaa;
      }
    }

    .coin-icon {
      width: 32px;
      height: 32px;
    }
  }
`
export default Prices;
