import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'src/assets/myImages/logo.png';
import discord from 'src/assets/myImages/connectDiscord.png';
import facebookIcon from 'src/assets/img/Facebook-Icon.svg';
import twitterIcon from 'src/assets/img/Twitter-Icon.svg';
import linkedinIcon from 'src/assets/img/Linkedin-Icon.svg';
import leftArrowIcon from 'src/assets/img/Red-Left-Arrow-Icon.svg';
import closeIcon from 'src/assets/img/Close-Icon.svg';
import menuIcon from 'src/assets/img/Menu-Icon.svg';


import $ from 'jquery';
import * as S from './styled';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    $('.slide-item').slideUp();
    $('.click-sub2').click(function() {
      $(this).next('.sub2').slideToggle();
      $('.sub3').slideUp();
      $('.sub4').slideUp();
    });

    $('.click-sub3').click(function() {
      $(this).next('.sub3').slideToggle();
      $('.sub2').slideUp();
      $('.sub4').slideUp();
    });
    $('.click-sub4').click(function() {
      $(this).next('.sub4').slideToggle();
      $('.sub2').slideUp();
      $('.sub3').slideUp();
    });
    $('.click-mini-sub3').click(function() {
      $(this).next('.mini-sub3').slideToggle();

    });
    $('.click-mini-sub21').click(function() {
      $(this).next('.mini-sub21').slideToggle();
    });
    $('.click-mini-sub22').click(function() {
      $(this).next('.mini-sub22').slideToggle();
    });
    $('.click-mini-sub23').click(function() {
      $(this).next('.mini-sub23').slideToggle();
    });
    $('.click-mini-sub24').click(function() {
      $(this).next('.mini-sub24').slideToggle();
    });
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }


  render() {
    const show = (this.state.menu) ? 'show' : '';
    return (
      <>
        <S.Header>
          <div className="nav-bar">
            <S.LogoContainer>
                <img className="logo" src={logo} alt="logo"/>
            </S.LogoContainer>
            <S.Linkbottom>
              <div className="d-flex align-items-center row">
                <ul className="nav-items-group row col-lg-9">
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      About
                    </span>
                    </Link>
                  </li>
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      Lore
                    </span>
                    </Link>
                  </li>
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      Features
                    </span>
                    </Link>
                  </li>
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      Roadmap
                    </span>
                    </Link>
                  </li>
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      Team
                    </span>
                    </Link>
                  </li>
                  <li className="default-nav-item col-lg-2">
                    <Link to={'/'}>
                    <span className="default-font-style1">
                      FAQ
                    </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </S.Linkbottom>
                <div className="red-button col-lg-3">
                  <div className="diff-nav-item">
                    <div className="flex-div">
                      {/*<Link to={'/'}>*/}
                        <div className="flex-div ">
                          <img className="logo" src={discord} alt="logo"/>
                        </div>
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
            <S.Humburger>
              <div className="menu-div" onClick={this.toggleMenu}>
                <div>
                  <img src={menuIcon} className="menu-icon" alt="menu"/>
                </div>
              </div>

            </S.Humburger>
            <S.NavbarMenu className="navbar-menu">
              <div className={'collapse navbar-collapse ' + show}>
                <div onClick={this.toggleMenu}>
                  <img src={closeIcon} className="close-icon" alt="closeIcon"/>
                </div>
                <div>
                  <ul className="default-font-style">
                      <li>
                        <Link to='/'>
                          HOME
                        </Link>
                      </li>
                    <li className="click-sub2">
                      SERVICES
                      <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                    </li>
                    <ul className="slide-item sub2">
                      <li>
                        <Link to='merchant'>
                          Merchant Services
                        </Link>
                      </li>
                      <li className="click-mini-sub21">
                        Payment Processing
                        <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                      </li>
                      <ul className="slide-item mini-sub21">
                        <li>
                          <Link to="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to="/next-day">
                            Next Day Funding Times
                          </Link>
                        </li>
                        <li>
                          <Link to="/ecommerce-processing">
                            Ecommerce Processing
                          </Link>
                        </li>
                        <li>
                          <Link to="/mobile-payment">
                            Mobile Payment Processing
                          </Link>
                        </li>
                        <li>
                          <Link to="/virtual-terminal">
                            Virtual Terminals
                          </Link>
                        </li>
                        <li>
                          <Link to="/free-payment">
                            Free Payment Processing
                          </Link>
                        </li>
                      </ul>
                      <li>
                        <Link to="/creditcard-machines">
                          Credit Card Mechines
                        </Link>
                      </li>
                      <li className="click-mini-sub22">
                        Point Of Sale Systems
                        <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                      </li>
                      <ul className="slide-item mini-sub22">
                        <li>
                          <Link to="/clover">
                            Clover POS Systems
                          </Link>
                        </li>
                        <li>
                          <Link to="/vital">
                            Vital POS Systems
                          </Link>
                        </li>
                        <li>
                          <Link to="/bonsai">
                            Bonsai Point of Sale
                          </Link>
                        </li>
                      </ul>
                      <li>
                        <Link to="/gift-loyalty">
                          Gift and Loyalty Cards
                        </Link>
                      </li>
                      <li className="click-mini-sub23">
                        Merchant Cash Advance
                        <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                      </li>
                      <ul className="slide-item mini-sub23">
                        <li>
                          <Link to="applyfor-cash">
                            Apply For A Merchant Cash Advance
                          </Link>
                        </li>
                      </ul>
                      <li className="click-mini-sub24">
                        Programs
                        <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                      </li>
                      <ul className="slide-item mini-sub24">
                        <li>
                          <Link to="/ebt-service">
                            EBT Merchant Services (SNAP)
                          </Link>
                        </li>
                        <li>
                          <Link to="/no-cost">
                            No-Cost Account (Cash Discount Program)
                          </Link>
                        </li>
                        <li>
                          <Link to="/small-ticket">
                            Small Ticket Program
                          </Link>
                        </li>
                        <li>
                          <Link to="/data-breach">
                            Data Breach Protection
                          </Link>
                        </li>
                      </ul>
                    </ul>
                    <li className="click-sub3">
                      PARTNERS
                      <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                    </li>
                    <ul className="slide-item sub3">
                      <li>
                        <Link to="/iso-agent">
                          ISO/Agent Program
                        </Link>
                      </li>
                      <li className="click-mini-sub3">
                        Referral/Affiliate Program
                        <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                      </li>
                      <ul className="mini-sub3">
                        <li>
                          <Link to="/referral-overview">
                            Referral/Affiliate Program Overview
                          </Link>

                        </li>
                        <li>
                          <Link to="/referral-faq">
                            Referral Program FAQ
                          </Link>

                        </li>
                      </ul>
                      <li>
                        <Link to="/brand-permission">
                          Brand Usage Permissions
                        </Link>
                      </li>
                    </ul>

                    <li className="click-sub4">
                      MORE
                      <span>
                          <svg
                            className="down-arrow"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                fill="rgb(102, 102, 102)"
                              />
                            </svg>
                        </span>
                    </li>
                    <ul className="slide-item sub4">
                      <li>
                        <Link to="/about">
                          About
                        </Link>
                        </li>
                      <li>
                        <Link to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </ul>
                  {/* <div className="red-button">
                    <img className="logo" src={discord} alt="logo"/>
                  </div> */}
                </div>
              </div>
            </S.NavbarMenu>
          </div>
        </S.Header>

      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);