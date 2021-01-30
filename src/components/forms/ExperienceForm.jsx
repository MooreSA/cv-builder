import React, { useState, useEffect } from 'react';
import { Spring, config } from 'react-spring/renderprops';

const ExperienceForm = (props) => {
  const {
    jobInfo,
    handleUpdate,
    displayNextForm,
    displayPrevForm,
  } = props;
  // You need all these states to control the input fields
  // and to pass up the chain
  const [myJobInfo, setMyJobInfo] = useState(jobInfo);
  const [jobIndex, setJobIndex] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [posTitle, setPosTitle] = useState('');
  const [tasks, setTasks] = useState('');
  const [jobStartDay, setJobStartDay] = useState('');
  const [jobEndDay, setJobEndDay] = useState('');

  const handleBack = () => {
    if (jobIndex === 0) {
      displayPrevForm();
      return;
    }
    setJobIndex(jobIndex - 1);
  };

  // So that we don't need to do this when editing or adding them
  const constructJobItem = () => ({
    companyName,
    posTitle,
    tasks,
    jobStartDay,
    jobEndDay,
  });

  // add new job to myJobInfo state
  const appendJobInfo = () => {
    const newJobItem = constructJobItem();
    setMyJobInfo(myJobInfo.concat(newJobItem));
  };

  // edit a job that exists in myJobInfo
  const editJobInfo = () => {
    const newJobItem = constructJobItem();
    setMyJobInfo(myJobInfo.map((jobItem, i) => {
      // this is terrible code
      // forgive me
      if (jobIndex === i) return newJobItem;
      return jobItem;
    }));
  };

  const handleSave = () => {
    // If there is a job at the current index
    if (myJobInfo[jobIndex]) {
      // edit the current existing job
      editJobInfo();
    } else {
      appendJobInfo();
    }
    setJobIndex(jobIndex + 1);
  };

  const handleNext = () => {
    displayNextForm();
  };

  useEffect(() => {
    if (myJobInfo[jobIndex] === undefined) {
      setCompanyName('');
      setPosTitle('');
      setTasks('');
      setJobStartDay('');
      setJobEndDay('');
    } else {
      setCompanyName(myJobInfo[jobIndex].companyName);
      setPosTitle(myJobInfo[jobIndex].posTitle);
      setTasks(myJobInfo[jobIndex].tasks);
      setJobStartDay(myJobInfo[jobIndex].jobStartDay);
      setJobEndDay(myJobInfo[jobIndex].jobEndDay);
    }
  }, [jobIndex]);

  useEffect(() => {
    handleUpdate({ myJobInfo });
  }, [myJobInfo]);

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={config.slow}
    >
      {(springProps) => (
        <form className="form" style={springProps}>
          <div className="form__header">Experience</div>
          <div className="form__inputs">
            <div className="form__field">
              <label className="form__label" htmlFor="job-company-input">Company:</label>
              <input
                type="text"
                id="input"
                name="companyName"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="job-title-input">Position:</label>
              <input
                type="text"
                id="input"
                name="posTitle"
                value={posTitle}
                onChange={(event) => setPosTitle(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="job-tasks-input">Responsibilities: </label>
              <input
                type="text"
                id="input"
                name="tasks"
                value={tasks}
                onChange={(event) => setTasks(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="job-start-input">Start Day:</label>
              <input
                className="form__input"
                type="date"
                id="job-start-input"
                name="jobStartDay"
                value={jobStartDay}
                onChange={((event) => setJobStartDay(event.target.value))}
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="job-end-input">End Day:</label>
              <input
                className="form__input"
                type="date"
                id="job-end-input"
                name="jobEndDay"
                value={jobEndDay}
                onChange={((event) => setJobEndDay(event.target.value))}
              />
            </div>
            <div className="form__btns">
              <button type="button" onClick={handleBack} className="form__back">Previous</button>
              <button type="button" onClick={handleSave} className="form__more">Save</button>
              <button type="button" onClick={handleNext} className="form__continue">Complete Resume</button>
            </div>
          </div>
        </form>
      )}
    </Spring>
  );
};

export default ExperienceForm;
