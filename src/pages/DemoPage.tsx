import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

import Header from 'sections/Header';
import Intro from 'sections/Intro';

import { demoLogin } from 'models/demo';

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

  const { loading } = useSelector((state: RootState) => state.ui);

  const demoAction = () => {
    dispatcher(
      demoLogin({
        email: 'demo-email@gmail.com',
        password: 'demopass',
      }),
    );
  };

  return (
    <>
      <Header menu={menuFields} />
      <Intro submit={demoAction} />

      {loading && 'loading...'}
    </>
  );
};
export default TeacherSubmit;
