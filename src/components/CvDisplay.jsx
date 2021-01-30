import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import GeneralDisplay from './display/GeneralDisplay';
import EduWrapper from './display/EduWrapper';
import JobWrapper from './display/JobWrapper';

const CvDisplay = (props) => {
  const { resumeInfo } = props;

  const { generalInfo, eduInfo, jobInfo } = resumeInfo;

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={config.slow}
    >
      {(springProps) => (
        <div className="cv__display" style={springProps}>
          <GeneralDisplay generalInfo={generalInfo} />
          <EduWrapper eduInfo={eduInfo} />
          <JobWrapper jobInfo={jobInfo} />
        </div>
      )}
    </Spring>
  );
};

export default CvDisplay;
