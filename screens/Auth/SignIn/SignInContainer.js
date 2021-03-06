import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SignInPresenter from './SignInPresenter';
import { userLogin } from '../../../redux/usersSlice';
import utils from '../../../utils';

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('darkdevil94@naver.com' || params?.email);
  const [password, setPassword] = useState('123456' || params?.password);
  const isFormValid = () => {
    if (email === '' || password === '') {
      alert('All fields are required.');
      return false;
    }
    if (!utils.isEmail(email)) {
      alert('Email is invalid');
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };

  return (
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
