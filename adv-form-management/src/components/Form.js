import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
};

const initialUser = [];
const initialDisabled = true;

const Form = () => {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    axios
      .post(URL, formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const URL = 'https://reqres.in/api/users';

  return (
    <form className="form-container" onSubmit={submit}>
      <div className="div-inputs">
        <h1>New User</h1>
        <label>
          {' '}
          Name
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={onChange}
          ></input>
        </label>

        <label>
          {' '}
          password
          <input
            name="password"
            type="text"
            values={formValues.password}
            onChange={onChange}
          ></input>
        </label>

        <label>
          {' '}
          email
          <input
            name="email"
            type="email"
            values={formValues.email}
            onChange={onChange}
          ></input>
        </label>
      </div>

      <br />

      <div className="form-checkbox">
        <label>
          {' '}
          I agree to the Lambda school Terms of Service and private policy
          <input
            type="checkbox"
            name="terms"
            checked={formValues.terms}
            onChange={onChange}
          ></input>
        </label>
      </div>

      <br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
