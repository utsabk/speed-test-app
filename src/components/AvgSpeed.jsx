import React from 'react';
import { useSelector } from 'react-redux';

import { average } from '../utils';
import SpeedResult from './SpeedResult';

const AvgSpeed = () => {
  const speed = useSelector((state) => state);
  const uploadSpeedAvg = average(speed.upload.speedList);
  const downloadSpeedAvg = average(speed.download.speedList);
  return (
    <>
      <SpeedResult icon="file-download" type="Download" speed={downloadSpeedAvg} />
      <SpeedResult icon="file-upload" type="Upload" speed={uploadSpeedAvg} />
    </>
  );
};

export default AvgSpeed;
