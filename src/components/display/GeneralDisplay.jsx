import React from 'react';

const GeneralDisplay = (props) => {
  const { generalInfo } = props;
  const { name, email, phone } = generalInfo;

  return (
    <div className="display-section">
      <h2 className="display-section__header">Personal Information</h2>
      <div className="display-section__info">
        <div className="display-section__detail display-section__detail--emphasis">{name}</div>
        <div className="display-section__detail display-section__detail--small">{email}</div>
        <div className="display-section__detail display-section__detail--small">{phone}</div>
      </div>
    </div>
  );
};

export default GeneralDisplay;
