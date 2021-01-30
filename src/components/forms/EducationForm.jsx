import React, { useState, useEffect } from 'react';
import { Spring, config } from 'react-spring/renderprops';

const EducationForm = (props) => {
  const {
    eduInfo,
    handleUpdate,
    displayPrevForm,
    displayNextForm,
  } = props;
  const [myEduInfo, setMyEduInfo] = useState(eduInfo);
  const [currentEduIndex, setCurrentEduIndex] = useState(0);
  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [eduStartDay, setEduStartDay] = useState('');
  const [eduEndDay, setEduEndDay] = useState('');

  const handleBack = () => {
    if (currentEduIndex === 0) {
      displayPrevForm();
    }
    if (currentEduIndex !== 0) {
      setCurrentEduIndex(currentEduIndex - 1);
    }
  };

  const makeEduItem = () => ({
    schoolName,
    studyTitle,
    eduStartDay,
    eduEndDay,
  });

  const saveNewInfo = () => {
    const eduItem = makeEduItem();
    setMyEduInfo(myEduInfo.concat(eduItem));
  };

  const editInfo = () => {
    const newEduItem = makeEduItem();
    setMyEduInfo(myEduInfo.map((eduItem, eduIndex) => {
      if (eduIndex === currentEduIndex) {
        return newEduItem;
      }
      return eduItem;
    }));
  };

  const handleSave = () => {
    if (myEduInfo[currentEduIndex]) {
      editInfo();
    } else {
      saveNewInfo();
    }
    setCurrentEduIndex(currentEduIndex + 1);
  };

  const handleNext = () => {
    displayNextForm();
  };

  useEffect(() => {
    if (myEduInfo[currentEduIndex] === undefined) {
      setSchoolName('');
      setStudyTitle('');
      setEduStartDay('');
      setEduEndDay('');
    } else {
      setSchoolName(myEduInfo[currentEduIndex].schoolName);
      setStudyTitle(myEduInfo[currentEduIndex].studyTitle);
      setEduStartDay(myEduInfo[currentEduIndex].eduStartDay);
      setEduEndDay(myEduInfo[currentEduIndex].eduEndDay);
    }
  }, [currentEduIndex]);

  useEffect(() => {
    handleUpdate({ myEduInfo });
  }, [myEduInfo]);

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={config.slow}
    >
      {(springProps) => (
        <form className="form" style={springProps}>
          <div className="form__header">Education</div>
          <div className="form__inputs">
            <div className="form__field">
              <label className="form__label" htmlFor="school-name-input">School Name:</label>
              <input
                type="text"
                id="school-name-input"
                name="school-name"
                value={schoolName}
                onChange={(event) => setSchoolName(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="study-input">Study Field:</label>
              <input
                className="form__input"
                type="text"
                id="study-input"
                name="studyTitle"
                value={studyTitle}
                onChange={((event) => setStudyTitle(event.target.value))}
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="start-input">Start Day:</label>
              <input
                className="form__input"
                type="date"
                id="start-input"
                name="eduStartDay"
                value={eduStartDay}
                onChange={((event) => setEduStartDay(event.target.value))}
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="name-input">End Day:</label>
              <input
                className="form__input"
                type="date"
                id="end-input"
                name="eduEndDay"
                value={eduEndDay}
                onChange={((event) => setEduEndDay(event.target.value))}
              />
            </div>
            <div className="form__btns">
              <button type="button" onClick={handleBack} className="form__back">Previous</button>
              <button type="button" onClick={handleSave} className="form__more">Save</button>
              <button type="button" onClick={handleNext} className="form__continue">Continue</button>
            </div>
          </div>
        </form>
      )}
    </Spring>
  );
};

export default EducationForm;
