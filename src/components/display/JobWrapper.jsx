import React from 'react';
import JobItem from './JobItem';

const JobWrapper = (props) => {
  const { jobInfo } = props;

  return (
    <div className="display-section">
      <h3 className="display-section__header">Practical Experience</h3>
      {jobInfo.map((job) => {
        const { jobIndex } = job;
        return <JobItem jobInfo={job} key={jobIndex} />;
      })}
    </div>
  );
};

export default JobWrapper;
