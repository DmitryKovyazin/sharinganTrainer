import { Routes, Route, Link } from 'react-router-dom';
import './index.scss';

import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

function App(props: any) {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
        <Routes>
          <Route 
          path="/about" 
          element={
            <Suspense fallback={<div>Загрузка About...</div>}>
              <AboutPageAsync />
            </Suspense>
          } 
        />
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Загрузка Main...</div>}>
              <MainPageAsync />
            </Suspense>
          } 
        />
          </Routes>
    </div>
  );
}

export default App;
