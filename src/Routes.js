import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import RecoverPasswordPage from './pages/RecoverPasswordPage';
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import UpdatePasswordPage from './pages/UpdatePasswordPage';

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <LoginPage />
        </Route>
        <Route exact path = {"/register"}>
          <RegisterPage />
        </Route>
        <Route exact path = {"/recover-password"}>
          <RecoverPasswordPage />
        </Route>
        <Route exact path = {"/register-newPassword/:token"}>
          <UpdatePasswordPage />
        </Route>
        <Route exact path = {"/profile"}>
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default Routes;
