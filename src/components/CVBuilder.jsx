import React, { useEffect, useState } from 'react';
import GeneralForm from './forms/GeneralForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';

const CVBuilder = (props) => {
  const { resumeInfo, updateResume, toggleBuild } = props;
  const { generalInfo, eduInfo, jobInfo } = resumeInfo;
  const [activeForm, setActiveForm] = useState(0);

  const displayNextForm = () => setActiveForm(activeForm + 1);
  const displayPrevForm = () => setActiveForm(activeForm - 1);

  useEffect(() => {
    if (activeForm === 3) toggleBuild();
  }, [activeForm]);

  const handleUpdate = (updatedInfo) => {
    const {
      myGeneralInfo = generalInfo,
      myEduInfo = eduInfo,
      myJobInfo = jobInfo,
    } = updatedInfo;
    const newResume = {
      generalInfo: myGeneralInfo,
      eduInfo: myEduInfo,
      jobInfo: myJobInfo,
    };
    updateResume(newResume);
  };

  const displayForm = () => {
    if (activeForm === 0) {
      return (
        <GeneralForm
          generalInfo={generalInfo}
          handleUpdate={handleUpdate}
          displayPrevForm={displayPrevForm}
          displayNextForm={displayNextForm}
        />
      );
    }
    if (activeForm === 1) {
      return (
        <EducationForm
          eduInfo={eduInfo}
          handleUpdate={handleUpdate}
          displayPrevForm={displayPrevForm}
          displayNextForm={displayNextForm}
        />
      );
    }
    return (
      <ExperienceForm
        jobInfo={jobInfo}
        handleUpdate={handleUpdate}
        displayPrevForm={displayPrevForm}
        displayNextForm={displayNextForm}
      />
    );
  };

  return (
    <div className="cv__builder">
      {displayForm()}

      {/* <GeneralForm
        generalInfo={generalInfo}
        handleUpdate={handleUpdate}
        activeForm={activeForm}
        displayPrevForm={displayPrevForm}
        displayNextForm={displayNextForm}
      />
      <EducationForm
        eduInfo={eduInfo}
        handleUpdate={handleUpdate}
        activeForm={activeForm}
        displayPrevForm={displayPrevForm}
        displayNextForm={displayNextForm}
      />
      <ExperienceForm
        jobInfo={jobInfo}
        handleUpdate={handleUpdate}
        activeForm={activeForm}
        displayPrevForm={displayPrevForm}
        displayNextForm={displayNextForm}
      /> */}
    </div>
  );
};

export default CVBuilder;
