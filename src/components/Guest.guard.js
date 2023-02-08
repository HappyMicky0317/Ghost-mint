import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function GuestGuard({ children }) {
  const user = useSelector((state) => state.user);

  if (user.profile) {
    return <Redirect to="/app" />;
  }

  return children;
}

GuestGuard.propTypes = {
  children: PropTypes.any
};

export default GuestGuard;
