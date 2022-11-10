import React, {useState, useEffect} from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import {Logo, FormRow} from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues((prev) => {
      return {...prev, [e.target.name]: e.target.value};
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("fill out all fields");
      return;
    }
  };

  const toggleMember = () => {
    setValues((prev) => {
      return {...prev, isMember: !prev.isMember};
    });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already have an account?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
