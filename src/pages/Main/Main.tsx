import React, { FC } from 'react';

import { Grid } from '@material-ui/core';

import Footer from 'components/Footer';
import Header from 'components/Header';

import styles from './Main.module.scss';


type MainProps = {
  children?: React.ReactElement<any>;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <Grid direction="column" xs>
      <Grid item>
        <Header title="Demo Header" />
      </Grid>
      <Grid item className={styles.mainContainer}>
        {children}
      </Grid>
      <Grid item>
        <Footer title="Demo Footer" />
      </Grid>
    </Grid>
  );
};

export default Main;
