import React from 'react';
import GeneralDisplay from './display/GeneralDisplay';
import EduWrapper from './display/EduWrapper';
import JobWrapper from './display/JobWrapper';

const CvDisplay = (props) => {
  const { resumeInfo } = props;

  const { generalInfo, eduInfo, jobInfo } = resumeInfo;

  return (
    <div className="content">
      <GeneralDisplay generalInfo={generalInfo} />
      <EduWrapper eduInfo={eduInfo} />
      <JobWrapper jobInfo={jobInfo} />
    </div>
  );
};

export default CvDisplay;
