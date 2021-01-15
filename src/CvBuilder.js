import React, { useState, useEffect } from 'react';
import BuildGeneral from './build/BuildGeneral';
import EditEduItem from './build/EditEduItem';
import AddEduItem from './build/AddEduItem';
import EditJobItem from './build/EditJobItem';
import AddJobItem from './build/AddJobItem';

const CvBuilder = (props) => {
  // destructuing the prop object
  // assigning propResumuInfo to the prop value of the same name
  const { resumeInfo, updateResume } = props;

  const [generalInfo, setGeneralInfo] = useState(resumeInfo.generalInfo);
  const [eduInfo, setEduInfo] = useState(resumeInfo.eduInfo);
  const [jobInfo, setJobInfo] = useState(resumeInfo.jobInfo);

  useEffect(() => {
    updateResume({ generalInfo, eduInfo, jobInfo });
  }, [generalInfo, eduInfo, jobInfo]);

  const setGenInfo = ({ name, email, phone }) => {
    setGeneralInfo({ name, email, phone });
  };

  const addEduInfo = (eduItem) => {
    const eduIndex = eduInfo.length;
    setEduInfo(eduInfo.concat([{ ...eduItem, eduIndex }]));
  };

  const editEduInfo = ({
    schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
  }) => {
    // using map to create a new array instead of mutating
    setEduInfo(eduInfo.map((item) => {
      if (item.eduIndex === eduIndex) {
        return {
          schoolName, studyTitle, eduStartDay, eduEndDay, eduIndex,
        };
      }
      return item;
    }));
  };

  const deleteEduInfo = (eduIndex) => {
    setEduInfo(eduInfo.filter((eduItem) => eduItem.eduIndex !== eduIndex));
  };

  const addJobInfo = (jobItem) => {
    const jobIndex = jobInfo.length;
    setJobInfo(jobInfo.concat([{ ...jobItem, jobIndex }]));
  };

  const editJobInfo = ({
    companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
  }) => {
    setJobInfo(jobInfo.map((item) => {
      if (item.jobIndex === jobIndex) {
        return {
          companyName, posTitle, tasks, jobStartDay, jobEndDay, jobIndex,
        };
      }
      return item;
    }));
  };

  const deleteJobInfo = (jobIndex) => {
    setJobInfo(jobInfo.filter((jobItem) => jobItem.jobIndex !== jobIndex));
  };

  return (
    <div className="content">
      <BuildGeneral setGenInfo={setGenInfo} generalInfo={generalInfo} />
      {resumeInfo.eduInfo.map((eduItem) => {
        const { eduIndex } = eduItem;
        return (
          <EditEduItem
            editEduInfo={editEduInfo}
            deleteEduInfo={deleteEduInfo}
            eduItem={eduItem}
            key={eduIndex}
          />
        );
      })}
      <AddEduItem addEduInfo={addEduInfo} />
      {resumeInfo.jobInfo.map((jobItem) => {
        const { jobIndex } = jobItem;
        return (
          <EditJobItem
            editJobInfo={editJobInfo}
            deleteJobInfo={deleteJobInfo}
            jobItem={jobItem}
            key={jobIndex}
          />
        );
      })}
      <AddJobItem addJobInfo={addJobInfo} />
    </div>
  );
};

export default CvBuilder;
