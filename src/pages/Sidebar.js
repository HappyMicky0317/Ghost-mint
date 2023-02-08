import React from "react";
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Images from "src/theme/Images";
import Colors from "src/theme/Colors";

const routes = [

  {
    icon: Images.chartIcon,
    activeIcon: Images.activeChartIcon,
    label: 'Portfolio',
    path: '/app/portfolio'
  },
  {
    icon: Images.historyIcon,
    activeIcon: Images.activeHistoryIcon,
    label: 'History',
    path: '/app/history'
  },
  {
    icon: Images.priceIcon,
    activeIcon: Images.activePriceIcon,
    label: 'Prices',
    path: '/app/prices'
  },
  {
    icon: Images.notificationIcon,
    activeIcon: Images.activeNotificationIcon,
    label: 'Notifications',
    path: '/app/notifications'
  }
]
const Sidebar = (props) => {
  return (
    <Content>
      <Logo as={Link} to="/app/home">
        <img src={Images.Logo} alt="logo" />
      </Logo>
      {
        routes.map((route, index) => (
          <NavLink to={route.path} key={index} className="menu-item">
            <div className="icon rounded-circle text-center mr-3"><img src={route.icon} alt={route.label} /></div>
            <label className="mb-0">{route.label}</label>
          </NavLink>
        ))
      }
    </Content>
  );
}

const Content = styled.div`
  width: 260px;
  background: white;
  padding: 50px 30px;

  .menu-item {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;

    .icon {
      width: 30px;
      height: 30px;
      background-color: #eee;
      text-align: center;
      padding: 6px 6px;
    }

    img {
      width: 18px;
      height: 18px;
    }
    label {
      font-size: 20px;
      font-weight: bold;
    }

    &.active {
      label {
        color: ${Colors.secondary}
      }
    }
  }
`

const Logo = styled.a`
  text-align: center;
  display: block;
  margin-bottom: 3rem;

  img {
    height: 70px;
    width: auto;
  }
`

export default Sidebar;