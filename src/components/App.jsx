import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieInfoPage } from 'pages/MovieInfoPage';
import { Navbar } from './Navbar/Navbar';
import '../index.css';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieInfoPage />} />
      </Routes>
    </>
  );
};
