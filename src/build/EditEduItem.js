import React, { useState } from 'react';

const EditEduItem = (props) => {
  const { eduItem, editEduInfo, deleteEduInfo } = props;
  const { eduIndex = 0 } = eduItem;
  const [schoolName, setSchoolName] = useState(eduItem.schoolName);
  const [studyTitle, setStudyTitle] = useState(eduItem.studyTitle);
  const [eduStartDay, setEduStartDay] = useState(eduItem.eduStartDay);
  const [eduEndDay, setEduEndDay] = useState(eduItem.eduEndDay);

  const passEduInfo = () => (editEduInfo({
    schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
  }));

  const removeEduItem = () => (deleteEduInfo(eduIndex));

  return (
    <form className="build-section">
      <h3 className="build-section__header">Education - {parseInt(eduIndex, 10) + 1}</h3>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="school-input">School Name:</label>
        <input
          className="build-section__input"
          type="text"
          id="school-input"
          name="schoolName"
          value={schoolName}
          onChange={(event) => setSchoolName(event.target.value)}
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
          onChange={(event) => setStudyTitle(event.target.value)}
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
          onChange={(event) => setEduStartDay(event.target.value)}
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
          onChange={(event) => setEduEndDay(event.target.value)}
        />
      </div>
      <div className="build-section__btns">
        <button className="btn build-section__edit" type="button" onClick={passEduInfo}>Edit School Info</button>
        <button className="btn btn__remove" type="button" onClick={removeEduItem}>Remove School Info</button>
      </div>
    </form>
  );
};

export default EditEduItem;
