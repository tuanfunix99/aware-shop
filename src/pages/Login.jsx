import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions/allActions";
import { errorActions } from "../reducers/error";
import "./Login.styles.scss";

import Button from "../components/ui/Button";
import FormInput from "../components/ui/FormInput";
import Errors from "../components/default/Errors";

import { Link, useHistory } from "react-router-dom";

import { valid } from "../utils/validatation";

const Login = () => {

  //variable hooks
  const { errors } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const history = useHistory();

  //variable state
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
    if (isEmailValid.check && isPasswordValid.check) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    dispatch(errorActions.setError());
    setLoading(false);
  }, [isPasswordValid, isEmailValid, dispatch]);

  //handle valid login input
  const onRegisterHandler = (e) => {
    switch (e.target.name) {
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

  //handle login
  const onClickHandler = (e) => {
    if (!isFormValid) {
      return;
    }
    dispatch(allActions.userActs.loginUser(inputValue, history));
    setLoading(true);
  };

  return (
    <div className="container my-4">
      <div className="login">
        <div className="row">
          <div className="col-lg-6 p-5 mx-auto login__col">
          {loading && !errors && (
              <Errors variant="primary">
                Logging...
              </Errors>
            )}
            {errors && <Errors variant="danger">{errors}</Errors>}
            <h4 className="login__title">Login</h4>
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
              <p className="login__error">{isEmailValid.error}</p>
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
              <p className="login__error">{isPasswordValid.error}</p>
            )}
            <div className="login__password-remind">
              <div className="password-remind__form">
                {/* <input type="checkbox">Remember password</input> */}
              </div>
              <Link className="login__a" to="/">Forgot your password?</Link>
            </div>

            <Button
              onClick={onClickHandler}
              className={isFormValid ? "button--active" : "button--disable"}
            >
              Login
            </Button>
            <hr />
            <div className="text-center">
              Don't have an account? <Link className="login__a" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
