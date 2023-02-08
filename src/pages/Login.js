import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import Images from "src/theme/Images";
import * as S from 'src/theme/Styled';
import { Link } from "react-router-dom";
import { login } from "src/actions/user.action";
import { Status } from "src/constants";

const LoginPage = (props) => {
  const user = useSelector(state => state.user);
  const { register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const [submitting, setSubmitting ] = useState(false);
  const [email, setEmail] = useState('');
  const onSubmit = async (data) => {
    setSubmitting(true);
    const {email, password} = data;
    setEmail(email);
    await dispatch(login(email, password));
  }

  useEffect(() => {
    if (submitting) {
      if (user.loginStatus === Status.SUCCESS) {
        setSubmitting(false);
      } else if (user.loginStatus === Status.FAILURE) {
        setSubmitting(false);
        if (user.loginError === 'Verify_Account') {
          props.history.push('/verify?email=' + email); 
        } else {
          alert(user.loginError);
        }
      }
    }
  }, [user.loginStatus]);

  return (
    <>
      <S.Page>
        <Logo src={Images.Logo} />
        <LoginForm className="card py-4 px-4 mt-3 mb-0">
          <h4 className="font-weight-bold text-center">Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={register({required: true})}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={register({required: true})}
              />
            </div>
            <div className="d-flex">
              <a className="ml-auto">Forgot your password?</a>
            </div>
            <button type="submit" className={"mt-4 btn rounded-pill py-2 btn-primary w-100 " + (submitting ? 'disabled' : '')}>
              {
                submitting ? 'Logging in' : 'Log in'
              }
            </button>
            <Link to='/register' className="mt-2 btn rounded-pill py-2 w-100 border-main c-primary">Create Account</Link>
          </form>
        </LoginForm>
      </S.Page>
    </>
  )
}

const LoginForm = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
`
const Logo = styled.img`
  height: 60px;
  width: auto;
`

export default LoginPage;
