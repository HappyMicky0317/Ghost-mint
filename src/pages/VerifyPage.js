import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import Images from "src/theme/Images";
import * as S from 'src/theme/Styled';
import { Link } from "react-router-dom";
import { resendVerify, verify } from "src/actions/user.action";
import { Status } from "src/constants";

const VerifyPage = (props) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting ] = useState(false);
  const [resending, setResending] = useState(false);
  const onSubmit = async () => {
    if (email && code) {
      setSubmitting(true);
      await dispatch(verify(email, code));
    }
  }

  const resend = async () => {
    if (email) {
      setResending(true);
      await dispatch(resendVerify(email));
    }
  }

  useEffect(() => {
    if (props.history.location.search) {
      let searchParams = new URLSearchParams(props.history.location.search);
      if (searchParams.get('email')) {
        setEmail(searchParams.get('email'));
      } else {
        props.history.push('/login');  
      }
    } else {
      props.history.push('/login');
    }
  }, []);

  useEffect(() => {
    if (submitting) {
      if (user.verifyStatus === Status.SUCCESS) {
        setSubmitting(false);
        props.history.push('/login')
      } else if (user.verifyStatus === Status.FAILURE) {
        setSubmitting(false);
        alert(user.verifyError);
      }
    }
  }, [user.verifyStatus]);


  useEffect(() => {
    if (resending) {
      if (user.resendVerifyStatus === Status.SUCCESS) {
        alert('We have sent the code successfully. Please check your email Inbox or Spam folder.');
      } else if (user.resendVerifyStatus === Status.FAILURE) {
        setSubmitting(false);
        alert(user.resendVerifyError);
      }
    }
  }, [user.resendVerifyStatus]);



  return (
    <>
      <S.Page>
        <Logo src={Images.Logo} />
        <LoginForm className="card py-4 px-4 mt-3 mb-0">
          <h4 className="font-weight-bold text-center">Verify your email</h4>
          <p className="text-center">
            An email with verification code has been sent. Please check your email inbox or Spam Folder.
          </p>
          <h5 className="font-weight-bold text-center my-4">verification code</h5>
          <div className="form-group">
            <input type="text" className="form-control text-center" value={code} onChange={e => setCode(e.target.value)} /> 
          </div>
          <button className={"btn btn-primary " + (submitting ? 'disabled' : '')} onClick={onSubmit}>
            {
              submitting ? 'Verifying' : 'Verify'
            }
          </button>
          <div className="d-flex align-items-center">
            <hr className="flex-grow-1"></hr>
            <span className="mx-3">OR</span>
            <hr className="flex-grow-1"></hr>
          </div>
          <p className="disclaim mb-2">Didn't recieve message or issues with the code?</p>
          <a className="new-action c-pointer" onClick={resend}>Email me a new code</a>
        </LoginForm>
      </S.Page>
    </>
  )
}

const LoginForm = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;

  .disclaim {
    font-size: 11px;
    text-align: center;
  }

  .new-action {
    color: #ff8d0d;
    font-size: 16px;
    text-align: center;
  }
`
const Logo = styled.img`
  height: 60px;
  width: auto;
`

export default VerifyPage;
