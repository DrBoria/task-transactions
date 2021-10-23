import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

import Alerts from 'components/Alerts';

import { hideMessage } from 'models/ui';

const AlertsSection: FC<any> = () => {
  const dispatch = useDispatch();

  const { messages } = useSelector((state: RootState) => state.ui);

  return <Alerts messages={messages} hideMessage={(message) => dispatch(hideMessage(message))} />;
};

export default AlertsSection;
