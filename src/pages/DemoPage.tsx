import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

import Header from 'sections/Header';
import Intro from 'sections/Intro';

import { loginAdmin } from 'models/admin';

const menuFields = [
  {
    id: '1',
    title: 'title',
    url: 'url',
  },
  {
    id: '2',
    title: 'title',
    url: 'url',
  },
  {
    id: '3',
    title: 'title',
    url: 'url',
  },
  {
    id: '4',
    title: 'title',
    url: 'url',
  },
];

const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  const { success, loading, error } = useSelector((state: RootState) => state.ui);

  const adminStudent = () => {
    dispatcher(
      loginAdmin({
        email: 'demo-email@gmail.com',
        password: 'demopass',
      }),
    );
  };

  return (
    <>
      <Header menu={menuFields} />
      <Intro submit={adminStudent} />

      {success && 'Logged in'}
      {loading && 'loading...'}
      {error && 'Error'}
    </>
  );
};
export default TeacherSubmit;
