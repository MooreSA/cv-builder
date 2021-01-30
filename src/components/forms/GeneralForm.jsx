import React, { useState } from 'react';
import { Spring, config } from 'react-spring/renderprops';

const GeneralForm = (props) => {
  const {
    generalInfo,
    handleUpdate,
    displayNextForm,
  } = props;
  const [name, setName] = useState(generalInfo.name);
  const [email, setEmail] = useState(generalInfo.email);
  const [phone, setPhone] = useState(generalInfo.phone);

  const handleSubmit = () => {
    // Todo - validation
    handleUpdate({ myGeneralInfo: { name, email, phone } });
    displayNextForm();
  };

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={config.slow}
    >
      {(springProps) => (
        <form className="form" style={springProps}>
          <div className="form__header">Personal Infomation</div>
          <div className="form__inputs">
            <div className="form__field">
              <label className="form__label" htmlFor="name-input">Name:</label>
              <input
                type="text"
                id="name-input"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="email-input">Email:</label>
              <input
                type="email"
                id="email-input"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="tel-input">Phone:</label>
              <input
                type="tel"
                id="phone-input"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="form__input"
              />
            </div>
            <div className="form__btns">
              <button onClick={handleSubmit} className="form__continue" type="button">Continue</button>
            </div>
          </div>
        </form>
      )}
    </Spring>
  );
};

export default GeneralForm;
