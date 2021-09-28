import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import allActions from './actions/allActions'

// Components
import Header from "./components/default/Header";
import Footer from "./components/default/Footer";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.userActs.fetchUser())
  }, [dispatch])

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
