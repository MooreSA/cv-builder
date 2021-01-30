/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import CVBuilder from './components/CVBuilder';
import CvDisplay from './components/CvDisplay';
import Footer from './components/Footer';

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

  const updateResume = (newResume) => {
    setResumeInfo(newResume);
  };

  const toggleBuild = () => setBuildMode(!buildMode);

  const displayContent = () => {
    if (buildMode) {
      return (
        <CVBuilder
          resumeInfo={resumeInfo}
          updateResume={updateResume}
          toggleBuild={toggleBuild}
        />
      );
    }
    return (<CvDisplay resumeInfo={resumeInfo} />);
  };

  return (
    <div className="page">
      <Header />
      {displayContent()}
      <Footer />
    </div>
  );
};

export default App;
