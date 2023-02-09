import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { Header } from './Header/Header';
import '../index.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};
