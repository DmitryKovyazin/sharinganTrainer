import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';

import { Suspense} from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { UseTheme } from './theme/UseTheme';
import { classNames } from './helpers/classNames/classNames';

//перечисление для хранения тем)

function App() {

  
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle Theme</button>
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
