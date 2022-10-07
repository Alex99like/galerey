import Layout from 'components/common/layout/Layout';
import { route } from 'components/utils/route';
import './global.scss';
import ErrorPage from 'page/errorPage/ErrorPage';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Layout routes={route} />}>
          {route.map((rout) => (
            <Route key={rout.path} path={rout.path} element={<rout.component />} />
          ))}
          <Route path={'*'} element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
