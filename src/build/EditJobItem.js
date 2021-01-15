import React, { useState } from 'react';

const EditJobItem = (props) => {
  const { jobItem, editJobInfo, deleteJobInfo } = props;

  const [companyName, setCompanyName] = useState(jobItem.companyName);
  const [posTitle, setPosTitle] = useState(jobItem.posTitle);
  const [tasks, setTasks] = useState(jobItem.tasks);
  const [jobStartDay, setJobStartDay] = useState(jobItem.jobStartDay);
  const [jobEndDay, setJobEndDay] = useState(jobItem.jobEndDay);

  const passJobInfo = () => (editJobInfo({
    companyName, posTitle, tasks, jobStartDay, jobEndDay,
  }));

  const removeJobItem = () => (deleteJobInfo(jobItem.jobIndex));

  return (
    <form className="build-section">
      <h3 className="build-section__header">Job: {parseInt(jobItem.jobIndex, 10) + 1}</h3>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="company-input">Company Name:</label>
        <input
          className="build-section__input"
          type="text"
          id="company-input"
          name="companyName"
          onChange={((event) => setCompanyName(event.target.value))}
          value={companyName}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="position-input">Position:</label>
        <input
          className="build-section__input"
          type="text"
          id="position-input"
          name="posTitle"
          onChange={((event) => setPosTitle(event.target.value))}
          value={posTitle}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="tasks-input">Tasks:</label>
        <input
          className="build-section__input"
          type="text"
          id="tasks-input"
          name="tasks"
          onChange={((event) => setTasks(event.target.value))}
          value={tasks}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="exp-start-input">Start Day:</label>
        <input
          className="build-section__input"
          type="date"
          id="exp-start-input"
          name="jobStartDay"
          onChange={((event) => setJobStartDay(event.target.value))}
          value={jobStartDay}
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="exp-end-input">End Day:</label>
        <input
          className="build-section__input"
          type="date"
          id="exp-end-input"
          name="jobEndDay"
          onChange={((event) => setJobEndDay(event.target.value))}
          value={jobEndDay}
        />
      </div>
      <div className="build-section__btns">
        <button className="btn" type="button" onClick={passJobInfo}>Edit Job Info</button>
        <button className="btn btn__remove" type="button" onClick={removeJobItem}>Remove Job Info</button>
      </div>
    </form>
  );
};

export default EditJobItem;
