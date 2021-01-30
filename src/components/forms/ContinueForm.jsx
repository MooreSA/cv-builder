import React from 'react';

const ContinueForm = (props) => {
  const {
    eduForm,
    jobForm,
    active,
  } = props;
  let classForm = 'form';
  let moreText;
  let nextText;

  if (active) {
    classForm += ' form--shown';
  } else classForm += ' form--hidden';

  if (eduForm) {
    moreText = 'Add more Education';
    nextText = 'Move to Experience';
  } else if (jobForm) {
    moreText = 'Add more Experienece';
    nextText = 'Complete Resume';
  }
  return (
    <div className={classForm}>
      <button className="form__button" type="button">{moreText}</button>
      <button className="form__button" type="button">{nextText}</button>
    </div>
  );
};

export default ContinueForm;
