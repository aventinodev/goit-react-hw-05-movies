import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { HomePage } from 'pages/HomePage';
// import { MoviesPage } from 'pages/MoviesPage';
// import { MovieInfoPage } from 'pages/MovieInfoPage/MovieInfoPage';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
// import { NotFoundPage } from 'pages/NotFoundPage';

import { Navbar } from './Navbar/Navbar';
import '../index.css';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieInfoPage = lazy(() => import('pages/MovieInfoPage/MovieInfoPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
