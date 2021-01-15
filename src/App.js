import React, { useState } from 'react';
import Header from './Header';
import BuildToggle from './BuildToggle';
import CvBuilder from './CvBuilder';
import CvDisplay from './CvDisplay';

const App = () => {
  const [buildMode, setBuildMode] = useState(true);
  const [resumeInfo, setResumeInfo] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    eduInfo: [],
    jobInfo: [],
  });

  const toggleBuildMode = () => {
    setBuildMode(!buildMode);
  };

  const updateResume = (newResume) => {
    setResumeInfo(newResume);
  };

  return (
    <div>
      <Header />
      <BuildToggle toggleBuildMode={toggleBuildMode} buildMode={buildMode} />
      {buildMode
        ? <CvBuilder resumeInfo={resumeInfo} updateResume={updateResume} />
        : <CvDisplay resumeInfo={resumeInfo} />}
    </div>
  );
};

export default App;
