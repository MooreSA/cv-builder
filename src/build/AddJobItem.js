import React, { useState } from 'react';

const AddJobItem = (props) => {
  const { addJobInfo } = props;

  const [companyName, setCompanyName] = useState();
  const [posTitle, setPosTitle] = useState();
  const [tasks, setTasks] = useState();
  const [jobStartDay, setJobStartDay] = useState();
  const [jobEndDay, setJobEndDay] = useState();

  const passJobInfo = () => addJobInfo({
    companyName, posTitle, tasks, jobStartDay, jobEndDay,
  });

  return (
    <form className="build-section">
      <h3 className="build-section__header">Experience</h3>
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
      <button className="btn build-section__submit" onClick={passJobInfo} type="button">Add Experience</button>
    </form>
  );
};

export default AddJobItem;
