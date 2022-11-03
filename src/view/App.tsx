import Layout from 'components/common/layout/Layout';
import { route } from 'components/utils/route';
import './global.scss';
import ErrorPage from 'page/errorPage/ErrorPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'page/home/Home';
import Welcome from 'page/welcome/Welcome';
import About from 'page/about/About';
import FormPage from 'page/formPage/FormPage';
import CardPage from 'page/cardPage/CardPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout routes={route} />}>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'about'} element={<About />} />
        <Route path={'form'} element={<FormPage />} />
        <Route path={'home'} element={<Home />} />
        <Route path={'home/:page'} element={<Home />} />
        <Route path={'home/card/:idPage'} element={<CardPage />} />
        {/* {route.map((rout) => (
          <Route key={rout.path} path={rout.path} element={<rout.component />} />
        ))} */}
        <Route path={'*'} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
