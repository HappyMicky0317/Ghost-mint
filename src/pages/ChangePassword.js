import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import Colors from "src/theme/Colors";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as S from 'src/theme/Styled';
import { Status } from "src/constants";
import { changePassword } from "src/actions/user.action";

const ChangePassword = (props) => {
  const user = useSelector(state => state.user);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    const old_password = data.currentPassword;
    const new_password = data.password;
    const confirm_password = data.confirmPassword;
    console.log(new_password, confirm_password);
    if (new_password !== confirm_password) {
      setIsError(true);
      return;
    }
    setSubmitting(true);
    dispatch(changePassword({old_password, new_password}));
  }

  useEffect(() => {
    if (submitting) {
      if (user.changePasswordStatus === Status.SUCCESS) {
        setSubmitting(false);
        props.history.push('/app/account');
      } else if (user.changePasswordStatus === Status.FAILURE) {
        setSubmitting(false);
        alert(user.changePasswordError);
      }
    }
  }, [user.changePasswordStatus]);

  return (
    <Page className="pt-4">
      
      <form onSubmit={handleSubmit(onSubmit)}>
            
      <div className="form-group">
            <label>Current Password</label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                name="currentPassword"
                ref={register({
                  required: {
                    value: true,
                    message: 'Please input the password'
                  },
                  minLength: {
                    value: 8,
                    message: 'Please input the correct password'
                  }
                })}
              />
              {
                errors.currentPassword && (<S.Error>{errors.currentPassword.message}</S.Error>)
              }
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
                onChange={() => setIsError(false)}
              />
              {
                errors.confirmPassword ? (<S.Error>{errors.confirmPassword.message}</S.Error>) : (isError && (<S.Error>Mismatched password.</S.Error>))
              }
            </div>
            <button type="submit" className="mt-4 btn rounded-pill py-2 btn-primary w-100">
              {
                submitting === true ? 'Changing' : 'Change Password'
              }
            </button>
          </form>
    </Page>
  )
}

const Page = styled.div`
  max-width: 400px;
  margin: auto;
`
export default ChangePassword;
