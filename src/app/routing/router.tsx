import { Suspense, lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Layout
import { Layout } from '../Layout/Layout';

// Helpers
import LoadingRouter from '../../components/loadingRouter/LoadingRouter';

// Pages
const Home = lazy(() => import('../../pages/home/Home'));
const About = lazy(() => import('../../pages/about/About'));
const Contact = lazy(() => import('../../pages/contact/Contact'));
const Discover = lazy(() => import('../../pages/discover/Discover'));
const Favorites = lazy(() => import('../../pages/favorites/Favorites'));
const SignIn = lazy(() => import('../../pages/auth/SignIn'));
const SignUp = lazy(() => import('../../pages/auth/SignUp'));

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
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Route>,
  ),
);
