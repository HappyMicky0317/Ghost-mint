import React, { useState, useEffect, useRef } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { COIN_TYPES } from "src/constants";
import Images from "src/theme/Images";
import { getCoinType } from "src/utils/functions";
import styled from "styled-components";
const CoinTypes = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(prevState => !prevState);

  return (
    <>
      <Dropdown isOpen={open} toggle={toggle} className="flex-grow-1">
        <ActiveCoin>
          <img src={Images[props.value]} alt="coin"/>
          <strong>
            {getCoinType(props.value)}
          </strong>
          <img src={Images.chevronLeft} alt="more" className="ml-auto more-icon"/>
        </ActiveCoin>
        <DropdownMenu>
          {
            COIN_TYPES.map((type, index) => (
              <CoinItem onClick={() => props.onChange(type)} key={index}>
                <img src={Images[type]} alt="coin"/>
                {getCoinType(type)}
              </CoinItem>
            ))
          }
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

const ActiveCoin = styled(DropdownToggle)`
  background: transparent!important;
  color: black!important;
  padding: 0px;
  box-shadow: none!important;
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 100%;

  img {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }

  strong {
    font-weight: 600;
  }

  img.more-icon {
    width: 20px;
    height: 20px;
  }
`

const CoinItem = styled(DropdownItem)`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`

export default CoinTypes;
