import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import '../index.css';
import { Loader } from './Loader/Loader';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MovieInfoPage = lazy(() =>
  import('../pages/MovieInfoPage/MovieInfoPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />{' '}
        </Routes>
      </Suspense>
    </div>
  );
};
