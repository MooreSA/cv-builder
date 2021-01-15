import React from 'react';

const BuildToggle = (props) => {
  const { buildMode, toggleBuildMode } = props;

  return (
    <button className="buildtoggle btn" type="button" onClick={toggleBuildMode}>
      {buildMode ? 'Preview Resume' : 'Build Resume'}
    </button>
  );
};

export default BuildToggle;
