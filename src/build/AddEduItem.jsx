import React, { useState } from 'react';

const AddEduItem = (props) => {
  const { addEduInfo } = props;
  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [eduStartDay, setEduStartDay] = useState('');
  const [eduEndDay, setEduEndDay] = useState('');

  const passEduInfo = () => (addEduInfo({
    schoolName, studyTitle, eduStartDay, eduEndDay,
  }));

  return (
    <form className="build-section">
      <h3 className="build-section__header">Add Education</h3>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="school-input">School Name:</label>
        <input
          className="build-section__input"
          type="text"
          id="school-input"
          name="schoolName"
          value={schoolName}
          onChange={((event) => setSchoolName(event.target.value))}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="study-input">Study Field:</label>
        <input
          className="build-section__input"
          type="text"
          id="study-input"
          name="studyTitle"
          value={studyTitle}
          onChange={((event) => setStudyTitle(event.target.value))}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="start-input">Start Day:</label>
        <input
          className="build-section__input"
          type="date"
          id="start-input"
          name="eduStartDay"
          value={eduStartDay}
          onChange={((event) => setEduStartDay(event.target.value))}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="name-input">End Day:</label>
        <input
          className="build-section__input"
          type="date"
          id="end-input"
          name="eduEndDay"
          value={eduEndDay}
          onChange={((event) => setEduEndDay(event.target.value))}
        />
      </div>
      <button
        className="btn build-section__submit"
        type="button"
        onClick={passEduInfo}
      >
        Add School Info
      </button>
    </form>
  );
};

export default AddEduItem;
