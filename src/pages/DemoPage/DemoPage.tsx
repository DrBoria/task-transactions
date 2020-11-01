/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

import Button from 'components/Button';

import { loginAdmin } from 'features/admin';

import styles from './Demo.module.scss';


const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  const { success, loading, error } = useSelector((state: RootState) => state.admin);

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
      <div className={styles.form}>
        <h1>This is demo page</h1>
        <Button onClick={adminStudent} >Demo Button</Button>

        {success && 'Logged in'}
        {loading && 'loading...'}
        {error && 'Error'}
      </div>
    </>
  );
};
export default TeacherSubmit;
