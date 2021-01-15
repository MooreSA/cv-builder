import React, { useState } from 'react';

const BuildGeneral = (props) => {
  const { generalInfo, setGenInfo } = props;
  const [name, setName] = useState(generalInfo.name);
  const [email, setEmail] = useState(generalInfo.email);
  const [phone, setPhone] = useState(generalInfo.phone);

  const passGenInfo = () => setGenInfo({ name, email, phone });

  return (
    <form className="build-section">
      <h3 className="build-section__header">Personal</h3>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="build-section__input"
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="email-input">Email:</label>
        <input
          type="email"
          id="email-input"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="build-section__input"
        />
      </div>
      <div className="build-section__field">
        <label className="build-section__label" htmlFor="phone-input">Phone Number:</label>
        <input
          type="tel"
          id="phone-input"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="build-section__input"
        />
      </div>
      <button
        className="btn build-section__submit"
        type="button"
        onClick={passGenInfo}
      >
        Add Personal Info
      </button>
    </form>
  );
};

export default BuildGeneral;
