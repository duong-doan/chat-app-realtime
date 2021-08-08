import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './modules/auth/Login/view';
import Homepage from './modules/home/view.jsx';

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/chat' component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
