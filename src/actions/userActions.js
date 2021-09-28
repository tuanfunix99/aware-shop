import { register, fetchuser, login } from "../api/index";
import { userActions } from "../reducers/user";
import { errorActions } from "../reducers/error";

export const registerUser = (user, history) => async (dispatch) => {
  try {
      const { data } = await register(user);
      dispatch(userActions.register(data));
      history.push('/login')
  } catch (e) {
    if (e.response && e.response.data) {
      return dispatch(errorActions.setError(e.response.data));
    }
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
      const { data } = await fetchuser();
      return dispatch(userActions.fetchuser(data));
  } catch (e) {
    if (e.response && e.response.data) {
      return dispatch(errorActions.setError(e.response.data));
    }
  }
};

export const loginUser = (user, history) => async (dispatch) => {
  try {
      const { data } = await login(user);
      dispatch(userActions.login(data));
      history.push('/')
  } catch (e) {
    if (e.response && e.response.data) {
      return dispatch(errorActions.setError(e.response.data));
    }
  }
};

const userActs = {
    registerUser,
    fetchUser,
    loginUser,
}

export default userActs;

