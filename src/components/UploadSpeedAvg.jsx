import React from 'react';
import { useSelector } from 'react-redux';

import { average } from '../utils';
import SpeedResult from './SpeedResult';

const UploadSpeedAvg = () => {
  const uploadSpeed = useSelector((state) => state.upload);
  const uploadSpeedAvg = average(uploadSpeed.speedList);

  return <SpeedResult icon="file-upload" type="Upload" speed={uploadSpeedAvg} />;
};

export default UploadSpeedAvg;
