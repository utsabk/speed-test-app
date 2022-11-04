import React from 'react';
import { useSelector } from 'react-redux';

import Speedometer from './SpeedometerGauge';

const UploadGauge = () => {
  const uploadSpeed = useSelector((state) => state.upload);

  const networkSpeed = uploadSpeed.speed || 0;

  return <Speedometer speed={networkSpeed} />;
};

export default UploadGauge;
