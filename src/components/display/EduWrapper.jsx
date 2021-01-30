import React from 'react';
import EduItem from './EduItem';

const EduWrapper = (props) => {
  const { eduInfo } = props;

  return (
    <div className="display-section">
      <h3 className="display-section__header">Education</h3>
      {eduInfo.map((eduItem) => {
        const { eduIndex } = eduItem;
        return <EduItem eduItem={eduItem} key={eduIndex} />;
      })}
    </div>
  );
};

export default EduWrapper;
