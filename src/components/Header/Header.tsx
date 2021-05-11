import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Grid item container xs justify="space-between">
      <Grid item xs={9}>
        <h4>{title}</h4>
      </Grid>
    </Grid>
  );
};

export default Header;
