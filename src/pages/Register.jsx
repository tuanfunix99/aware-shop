import React, { useState, useEffect } from "react";
import "./Register.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/allActions";
import { errorActions } from "../reducers/error";

import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import Errors from "../components/default/Errors";

import { Link, useHistory } from "react-router-dom";

import { valid } from "../utils/validatation";

const Register = () => {

  //variable hooks
  const { errors } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const history = useHistory();

  //variable state
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isNameValid, setNameValid] = useState({
    error: null,
    check: false,
  });
  const [isEmailValid, setEmailValid] = useState({ error: null, check: false });
  const [isPasswordValid, setPasswordValid] = useState({
    error: null,
    check: false,
  });
  const [isFormValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  //check form is valid
  useEffect(() => {
    if (isEmailValid.check && isPasswordValid.check && isNameValid.check) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    dispatch(errorActions.setError());
    setLoading(false);
  }, [isNameValid, isPasswordValid, isEmailValid, dispatch]);

  //handle valid register input
  const onRegisterHandler = (e) => {
    switch (e.target.name) {
      case "name":
        const nameValid = valid(e, inputValue);
        setNameValid(nameValid);
        break;
      case "email":
        const emailValid = valid(e, inputValue);
        setEmailValid(emailValid);
        break;
      case "password":
        const passwordValid = valid(e, inputValue);
        setPasswordValid(passwordValid);
        break;
      default:
        return "";
    }
  };

  //handle input change
  const onChangeHandler = (e) => {
    setInputValue((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  //handle create new user
  const onClickHandler = (e) => {
    if (!isFormValid) {
      return;
    }
    dispatch(allActions.userActs.registerUser(inputValue, history));
    setLoading(true);
  };

  return (
    <div className="container my-4">
      <div className="register">
        <div className="row">
          <div className="col-lg-6 p-5 mx-auto register__col">
            {loading && !errors && (
              <Errors variant="primary">
                Creating...(Please check your email when register done)
              </Errors>
            )}
            {errors && <Errors variant="danger">{errors}</Errors>}
            <h4 className="register__title">Register</h4>
            <FormInput
              onChange={onChangeHandler}
              onKeyUp={onRegisterHandler}
              label="name"
              type="input"
              placeholder="Enter your name..."
              name="name"
              className={isNameValid.error ? "classform--error" : ""}
            />
            {isNameValid.error && (
              <p className="register__error">{isNameValid.error}</p>
            )}
            <FormInput
              onChange={onChangeHandler}
              onKeyUp={onRegisterHandler}
              label="email"
              type="input"
              placeholder="Enter your email..."
              name="email"
              className={isEmailValid.error ? "classform--error" : ""}
            />
            {isEmailValid.error && (
              <p className="register__error">{isEmailValid.error}</p>
            )}
            <FormInput
              onChange={onChangeHandler}
              onKeyUp={onRegisterHandler}
              label="password"
              type="password"
              placeholder="Enter your password..."
              name="password"
              className={isPasswordValid.error ? "classform--error" : ""}
            />
            {isPasswordValid.error && (
              <p className="register__error">{isPasswordValid.error}</p>
            )}
            <div className="register__remind">
              <span>By creating an account you agree to the</span>
              <br />
              <Link className="register__a" to="/">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="register__a" to="/">
                Privacy Policy
              </Link>
            </div>
            <Button
              onClick={onClickHandler}
              className={isFormValid ? "button--active" : "button--disable"}
            >
              Register
            </Button>
            <hr />
            <div className="text-center">
              Do you have an account?{" "}
              <Link className="register__a" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
