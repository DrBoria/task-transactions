import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import styles from './Header.module.scss';


type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Grid item container xs justify="space-between" className={styles.header}>
      <Grid item xs={9}>
        <h4 className={styles.title}>{title}</h4>
      </Grid>
    </Grid>
  );
};

export default Header;
