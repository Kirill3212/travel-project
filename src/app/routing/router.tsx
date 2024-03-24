import { Suspense, lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Layout
import { Layout } from '../Layout/Layout';

// Helpers
import Loading from '../../components/Loading/Loading';

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
        <Suspense fallback={<Loading />}>
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
