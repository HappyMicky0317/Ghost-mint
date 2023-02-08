import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Images from "src/theme/Images";
import Colors from "src/theme/Colors";
import * as S from 'src/theme/Styled';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editProfile } from "src/actions/user.action";
import { Status } from "src/constants";

const Profile = (props) => {
  const { register, handleSubmit, errors, setValue} = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const imageFile = useRef();
  const [profile, setProfile] = useState({});
  const [profile_picture, setProfilePicture] = useState();
  const [submitting, setSubmitting] = useState(false);
  const pickerInput = useRef();
  useEffect(() => {
    if (user.profile) {
      setProfile(user.profile);
      setValue('firstname', user.profile.firstname);
      setValue('lastname', user.profile.lastname);
      setValue('email', user.profile.email);
    }
  }, [user.profile])

  const _onFileInputHandler = (event) => {
    const file = event.target.files[0];
    imageFile.current = file;
    const url = URL.createObjectURL(file);
    setProfilePicture(url);
  }
  const onSubmit = (data) => {
    let formData = new FormData();
    if (profile_picture) {
      formData.append('avatar', imageFile.current);
    }
    formData.append('data', JSON.stringify(data));
    setSubmitting(true);
    dispatch(editProfile(formData))
  }
  const openBrowser = () => {
    pickerInput.current.click();
  }

  useEffect(() => {
    if (submitting) {
      if (user.editProfileStatus === Status.SUCCESS) {
        setSubmitting(false);
      } else if (user.editProfileStatus === Status.FAILURE) {
        setSubmitting(false);
        alert(user.editProfileError);
      }
    }
  }, [user.editProfileStatus]);


  return (
    <Page className="pt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">

          <input
            ref={pickerInput}
            type="file"
            style={{
              display: 'none'
            }}
            onChange={(e) => { _onFileInputHandler(e); }}
          />
          <Avatar
            src={profile_picture ? profile_picture : profile.picture_profile}
            onClick={openBrowser}
          />
        </div>
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
            <button type="submit" className="mt-4 btn rounded-pill py-2 btn-primary w-100">
              {
                submitting ? 'Updating' : 'Update Profile'
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
const Avatar = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  border-radius: 100px;
  overflow: hidden;
  margin: auto;
  background: white;
`


export default Profile;
