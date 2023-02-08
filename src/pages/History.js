import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactions } from "src/actions/payment.action";
import { getCoinAbbr } from "src/utils/functions";
import moment from 'moment';
import NumberFormat from 'react-number-format';

const History = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory([...user.transactions].reverse());
  }, [user.transactions]);

  useEffect(() => {
    setLoading(true);
    dispatch(loadTransactions())
  }, []);

  return (
    <Page className="pt-4">
      <List>
        <table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Purchase Price</th>
              <th>Type</th>
              <th>Asset</th>
              <th>Asset Value</th>
              <th>Conversion Fee</th>
              <th>Receiving Wallet ID</th>
            </tr>
          </thead>
          <tbody>
            {
              history.map((item, index) => (
                <tr key={index}>
                  <td>{moment(item.created_at + '').utcOffset(-8).format('M/DD/YYYY - hh:mm a')} PST</td>
                  <td>{item.price ? <NumberFormat value={item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix='$' /> : '---'}</td>
                  <td>{item.type}</td>
                  <td>{getCoinAbbr(item.asset)}</td>
                  <td><NumberFormat value={item.asset_value ? item.asset_value.toFixed(2) : 0} displayType={'text'} thousandSeparator={true}/></td>
                  <td>${item.fee_value}</td>
                  <td>{item.wallet}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </List>
    </Page>
  )
}

const Page = styled.div`
  
`
const List = styled.div`
  background: white;
  padding: 16px 24px;

  table {
    width: 100%;

    td, th {
      padding: 16px 6px;
    }
    tr {
      border-bottom: 1px solid gainsboro;
    }
  }
`
export default History;
