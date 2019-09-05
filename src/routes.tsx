import React from 'react';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import SettingsPage from './pages/settings';

import { Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    //all routes
    <React.Fragment>
      <Route path='/' exact component={HomePage} />
      <Route path='/me' component={ProfilePage} />
      <Route path='/settings' component={SettingsPage} />
    </React.Fragment>
  );
}

export default AppRouter;
