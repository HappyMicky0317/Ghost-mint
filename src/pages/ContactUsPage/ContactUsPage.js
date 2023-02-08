import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Images from "src/theme/Images";
import * as S from "./styled";

const ContactUsPage = (props) => {
  return (
    <>
        <S.CardContainer>
            <h1>Contact Us</h1>
            <h3>Nomismata Capital is one of the easiest and most trusted places to buy Crypto securely</h3>
            <img src={Images.ContactIcon} alt="question"/>
        </S.CardContainer>
        <S.ContentsContainer className="px-3">
            <h1>Send us a message</h1>
            <form className="contact-form" action="contact">
                <div className="contact-item">
                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" id="full-name" name="full-name" required/>
                </div>
                <div className="contact-item">
                    <label htmlFor="email-address">Email Address:</label>
                    <input type="email" id="email-address" name="email-address" required/>
                </div>
                <div className="contact-item">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>
                <div className="contact-item">
                    <label htmlFor="your-message">Your Message:</label>
                    <textarea type="text" id="your-message" name="your-message"></textarea>
                </div>
                <div className="contact-item">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </S.ContentsContainer>
        <S.ContactUs>
            <div className="item">
                <img src={Images.EmailIcon} alt="email"/>
                <h1>Email</h1>
                <p>support@nomismata.com</p>
            </div>
            <div className="item">
                <img src={Images.CallIcon} alt="email"/>
                <h1>Call Us</h1>
                <p>8989898989</p>
            </div>
            <div className="item">
                <img src={Images.LocationIcon} alt="email"/>
                <h1>Registred Address</h1>
                <p>This is test address</p>
            </div>
            <div className="item">
                <img src={Images.WebIcon} alt="email"/>
                <h1>Web</h1>
                <p>domain.com</p>
            </div>
        </S.ContactUs>
    </>
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
)(ContactUsPage);