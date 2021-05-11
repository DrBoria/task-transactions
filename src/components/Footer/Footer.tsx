import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import styles from './Footer.module.scss';

type FooterProps = {
  title: string;
};

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <Grid container item className={styles.footer} justify="center">
      <Grid item xs>
        <h4 className={styles.title}>{title}</h4>
      </Grid>
    </Grid>
  );
};

export default Footer;
