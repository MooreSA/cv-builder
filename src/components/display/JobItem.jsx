import React from 'react';

const JobItem = (props) => {
  const { jobInfo } = props;
  const {
    companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
  } = jobInfo;

  return (
    <div className="display-section__info" id={`job-${jobIndex}`}>
      <div className="display-section__detail display-section__detail-emphasis">{companyName}</div>
      <div className="display-section__detail">{posTitle}</div>
      <div className="display-section__detail display-section__detail--small">{`${jobStartDay} ${jobEndDay}`}</div>
      <div className="display-section__detail">{tasks}</div>
    </div>
  );
};

export default JobItem;
