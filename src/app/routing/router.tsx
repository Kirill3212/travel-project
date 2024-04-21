import { Suspense, lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { PATH_PAGE } from '../paths';

// Layout
import { Layout } from '../Layout/Layout';

// Helpers
import LoadingRouter from '../../components/loadingRouter/LoadingRouter';

// PAGES ----------------------------------------------------------------

// Main Pages
const Home = lazy(() => import('../../pages/home/Home'));
const About = lazy(() => import('../../pages/about/About'));
const Contact = lazy(() => import('../../pages/contact/Contact'));
const Discover = lazy(() => import('../../pages/discover/Discover'));
const Favorites = lazy(() => import('../../pages/favorites/Favorites'));
// Auth Pages
const SignIn = lazy(() => import('../../pages/auth/SignIn'));
const SignUp = lazy(() => import('../../pages/auth/SignUp'));
// Business Pages
const SignUpEmails = lazy(() => import('../../pages/signupEmails/SignUpEmails'));

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
      {/* Main */}
      <Route index element={<Home />} />
      <Route path={PATH_PAGE.about} element={<About />} />
      <Route path={PATH_PAGE.contact} element={<Contact />} />
      <Route path={PATH_PAGE.discover} element={<Discover />} />
      <Route path={PATH_PAGE.favorites} element={<Favorites />} />
      {/* Auth */}
      <Route path={PATH_PAGE.signIn} element={<SignIn />} />
      <Route path={PATH_PAGE.signUp} element={<SignUp />} />
      {/* Business */}
      <Route path={PATH_PAGE.signUpEmails} element={<SignUpEmails />} />
    </Route>,
  ),
);
