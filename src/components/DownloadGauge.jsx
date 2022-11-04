import React from 'react';
import { useSelector } from 'react-redux';

import Speedometer from './SpeedometerGauge';

const UploadGauge = () => {
  const downloadSpeed = useSelector((state) => state.download);

  const networkSpeed = downloadSpeed.speed || 0;

  return <Speedometer speed={networkSpeed} />;
};

export default UploadGauge;
