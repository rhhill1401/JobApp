import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (event) => {
    console.log(event.target);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo /> <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert status="alert-danger" />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
