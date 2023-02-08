import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { getDate } from 'src/utils/functions'
import Images from "src/theme/Images";
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import Colors from "src/theme/Colors";

const Notifications = (props) => {
  const lists = [
    {
      type: 'account_activity',
      content: 'You received Bitcoin from an external account',
      date: new Date(),
      price: '+1.6409 BTC',
      info: '+$37,979.89'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is up +10.12% to $3.47 in the past 24 hours.',
      date: new Date(),
      price: '$3.47',
      percent: '10.12',
      direction: 'up'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is down -11.31% to $3.19 in the past 24 hours.',
      date: new Date(),
      price: '$3.19',
      percent: '-11.31',
      direction: 'down'
    },
    {
      type: 'account_activity',
      content: 'You received Bitcoin from an external account',
      date: new Date(),
      price: '+1.6409 BTC',
      info: '+$37,979.89'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is up +10.12% to $3.47 in the past 24 hours.',
      date: new Date(),
      price: '$3.47',
      percent: '10.12',
      direction: 'up'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is down -11.31% to $3.19 in the past 24 hours.',
      date: new Date(),
      price: '$3.19',
      percent: '-11.31',
      direction: 'down'
    },
    {
      type: 'account_activity',
      content: 'You received Bitcoin from an external account',
      date: new Date(),
      price: '+1.6409 BTC',
      info: '+$37,979.89'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is up +10.12% to $3.47 in the past 24 hours.',
      date: new Date(),
      price: '$3.47',
      percent: '10.12',
      direction: 'up'
    },
    {
      type: 'price_alert',
      content: 'OMG Network is down -11.31% to $3.19 in the past 24 hours.',
      date: new Date(),
      price: '$3.19',
      percent: '-11.31',
      direction: 'down'
    }
  ]

  const getTitle = (type) => {
    switch (type) {
      case 'account_activity':
        return 'Account activity';
      case 'price_alert':
        return 'Price alert';
      default:
        return 'Notification'
    }
  }

  return (
    <Page>
      {
        lists.map((info, index) => (
          <div className="notification d-flex" key={index}>
            <div className="detail mr-3">
              <div className="title">{getTitle(info.type)}</div>
              <div className="content my-2">{info.content}</div>
              <div className="date">{getDate(info.date)}</div>
            </div>
            <div className="info ml-auto">
              <div className="main-info">{info.price}</div>
              {
                info.type === 'account_activity' && (
                  <div className="import-info success">{info.info}</div>
                )
              }
              {
                (info.type === 'price_alert' && info.direction === 'up') ? (
                  <div className="import-info success">{info.percent} %</div>
                ) : null
              }
              {
                (info.type === 'price_alert' && info.direction === 'down') ? (
                  <div className="import-info danger">{info.percent} %</div>
                ) : null
              }
            </div>
          </div>
        ))
      }
    </Page>
  )
}

const Page = styled.div`
  max-width: 600px;
  margin: 50px auto 0px auto;
  background: aliceblue;
  border: 1px solid gainsboro;
  border-radius: 8px;
  overflow: hidden;

  .notification {
    padding: 10px 15px;
    border-bottom: 1px solid gainsboro;

    &:last-child {
      border-bottom: none;
    }

    .title {
      font-size: 16px;
      color: ${Colors.darkBlue};
      font-weight: bold;
    }

    .date {
      font-size: 13px;
      color: ${Colors.darkBlue};
    }

    .main-info {
      margin-top: 20px;
    }

    .success {
      color: ${Colors.green};
    }
    .danger {
      color: ${Colors.red};
    }
  }
`
export default Notifications;
