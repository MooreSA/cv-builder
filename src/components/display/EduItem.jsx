import React from 'react';

const EduItem = (props) => {
  const { eduItem } = props;
  const {
    schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
  } = eduItem;
  return (
    <div className="display-section__info" id={`edu-${eduIndex}`}>
      <div className="display-section__detail">{schoolName}</div>
      <div className="display-section__detail">{studyTitle}</div>
      <div className="display-section__detail display-section__detail--small">{`${eduStartDay} - ${eduEndDay}`}</div>
    </div>
  );
};

export default EduItem;
