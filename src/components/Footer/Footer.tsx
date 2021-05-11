import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

type FooterProps = {
  title: string;
};

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <Grid container item justify="center">
      <Grid item xs>
        <h4>{title}</h4>
      </Grid>
    </Grid>
  );
};

export default Footer;
