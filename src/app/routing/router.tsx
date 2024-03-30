import { Suspense, lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Layout
import { Layout } from '../Layout/Layout';

// Helpers
import LoadingRouter from '../../components/loadingRouter/LoadingRouter';

// Pages
const Home = lazy(() => import('../../pages/home/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Discover = lazy(() => import('../../pages/Discover'));
const Favorites = lazy(() => import('../../pages/Favorites'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={
        <Suspense fallback={<LoadingRouter />}>
          <Layout />
        </Suspense>
      }
    >
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Discover' element={<Discover />} />
      <Route path='Favorites' element={<Favorites />} />
    </Route>,
  ),
);
