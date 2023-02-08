import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import facebookIcon from 'src/assets/img/Facebook-Icon.svg';
import twitterIcon from 'src/assets/img/Twitter-Icon.svg';
import linkedinIcon from 'src/assets/img/Linkedin-Icon.svg';
import emailIcon from 'src/assets/img/Email-Icon.svg';
import phoneIcon from 'src/assets/img/Phone-Icon.svg';
import * as S from './styled';

class Footer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <S.Footer>
        <div className="section list-section">
          <div className="list-container">
            <div className="footer-link row">
              <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
                <div>
                  <p className="default-font-style">PRODUCTS & SERVICES</p>
                </div>
                <ul>
                  <li><a href="">Payment Processing</a></li>
                  <li><a href="">Bonsai Point of Sale</a></li>
                  <li><a href="">EMV Credit Card Machines</a></li>
                  <li><a href="">Merchant Cash Advance</a></li>
                  <li><a href="">Gift & Loyalty Cards</a></li>
                </ul>
              </div>
              <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
                <div>
                  <p className="default-font-style">PARTNER PROGRAM</p>
                </div>
                <ul>
                  <li><a href="">ISO/Agent Program</a></li>
                  <li><a href="">Referral Partners</a></li>
                  <li><a href="">Referral Partner Application</a></li>
                  <li><a href="">Referral Partnership FAQ </a></li>
                  <li><a href="">Referral Partner Permissions </a></li>
                </ul>
              </div>
              <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
                <div>
                  <p className="default-font-style">CONTACT US</p>
                </div>
                <ul>
                  <li><a href="">We're open 24/7/365</a></li>
                  <li>
                    <div className="d-flex phone-box">
                      <div>
                        <span>
                            <img src={phoneIcon} className="phone_icon_image" alt="f"/>
                        </span>
                      </div>
                      <div>
                        <a href=""> (877) 517-4678</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex email-box">
                      <div>
                        <img src={emailIcon} className="email_icon_image" alt="f"/>
                      </div>
                      <div>
                        <a href="">Send us a message</a>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex social-link-box">
                    <div className="social-link-div">
                      <a href="">
                        <img src={facebookIcon} className="social_icon_image" alt="f"/>
                      </a>
                    </div>
                    <div className="social-link-div">
                      <a href="">
                        <img src={twitterIcon} className="social_icon_image" alt="f"/>
                      </a>
                    </div>
                    <div className="social-link-div">
                      <a href="">
                        <img src={linkedinIcon} className="social_icon_image" alt="f"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-3 col-md-6 col-sm-12 mb-4">
                <div>
                  <p className="default-font-style">ABOUT US</p>
                </div>
                <ul>
                  <li><a href="">Customer Login</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Executive Team</a></li>
                  <li><a href="">Testimonials</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="bottom-section">
              <div className="">© 2021 Host Merchant Services. All Rights Reserved. Host Merchant Services is a
                registered
                ISO of Wells Fargo Bank, N.A., Concord, CA. High-risk merchant services provided through Electronic
                Merchant Systems (EMS).
                <Link to="*"> <span className="text-deco">Privacy Policy.</span></Link>
                <Link to="*"> <span className="text-deco">Terms of Service.</span></Link>
              </div>
            </div>
          </div>
        </div>
      </S.Footer>
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
)(Footer);