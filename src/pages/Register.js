import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import Images from "src/theme/Images";
import * as S from 'src/theme/Styled';
import { Link } from "react-router-dom";
import { signup } from "src/actions/user.action";
import { Status } from "src/constants";

const RegisterPage = (props) => {
  const user = useSelector(state => state.user);
  const { register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setEmail(data.email);
    setSubmitting(true);
    await dispatch(signup(data));
  }

  useEffect(() => {
    if (submitting) {
      if (user.registerStatus === Status.SUCCESS) {
        setSubmitting(false);
        props.history.push('/verify?email=' + email);
      } else if (user.registerStatus === Status.FAILURE) {
        setSubmitting(false);
        alert(user.registerError);
      }
    }
  }, [user.registerStatus]);



  return (
    <>
      <S.Page>
        <Logo src={Images.Logo} />
        <RegisterForm className="card py-4 px-4 mt-3 mb-0">
          <h4 className="text-center">
            Let's start by <br/>
            Creating Your Account
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    ref={register({required: {
                      value: true,
                      message: 'Please input your first name'
                    }})}
                  />
                  {
                    errors.firstname && <S.Error>{errors.firstname.message}</S.Error> 
                  }
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    ref={register({required: {
                      value: true,
                      message: 'Please input your last name'
                    }})}
                  />
                  {
                    errors.lastname && <S.Error>{errors.lastname.message}</S.Error>
                  }
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    ref={register({required: {
                      value: true,
                      message: 'Please input email.'
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Please input valid email.",
                    }
                    })}
                  />
                  {
                    errors.email && <S.Error>{errors.email.message}</S.Error>
                  }
                </div>
              </div>
              <div className="col">

              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={register({
                  required: {
                    value: true,
                    message: 'Please input the password'
                  },
                  minLength: {
                    value: 8,
                    message: 'Please input the valid password'
                  }
                })}
              />
              {
                errors.password && (<S.Error>{errors.password.message}</S.Error>)
              }
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                name="confirmPassword"
                ref={register({
                  required: {
                    value: true,
                    message: 'Please confirm the password'
                  },
                  minLength: {
                    value: 8,
                    message: 'Mismatched password'
                  }
                })}
              />
              {
                errors.confirmPassword && (<S.Error>{errors.confirmPassword.message}</S.Error>)
              }
            </div>
            <button type="submit" className={"mt-4 btn rounded-pill py-2 btn-primary w-100 " + (submitting ? 'disabled' : '')} >
              {
                submitting ? 'Creating...' : 'Create Account'
              }
            </button>
            <div className="text-center mt-2">
            Already have an account? Please <Link to="/login" className="c-primary font-weight-bold">Login here</Link>
            </div>
          </form>
        </RegisterForm>
      </S.Page>
    </>
  )
}

const RegisterForm = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
`
const Logo = styled.img`
  height: 60px;
  width: auto;
`

export default RegisterPage;
