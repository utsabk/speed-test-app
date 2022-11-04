import React from 'react';
import { useSelector } from 'react-redux';

import { average } from '../utils';
import SpeedResult from './SpeedResult';

const DownloadSpeedAvg = () => {
  const downloadSpeed = useSelector((state) => state.download);
  const downloadSpeedAvg = average(downloadSpeed.speedList);

  return <SpeedResult icon="file-download" type="Download" speed={downloadSpeedAvg} />;
};

export default DownloadSpeedAvg;
