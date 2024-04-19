import { PATH_PAGE } from '../../app/paths';

export const NAV_LINK_DISCOVER = {
  discover: {
    name: 'Discover',
    path: PATH_PAGE.discover,
  },
  allPlaces: 'All Places',
  latestPlaces: 'Latest Places',
  mostPopular: 'Most Popular',
  random: 'Random Place',
};

export const NAV_LINKS_USER = [
  { path: PATH_PAGE.about, name: 'About' },
  { path: PATH_PAGE.contact, name: 'Contact' },
  { path: PATH_PAGE.favorites, name: ' Favorites' },
];

export const NAV_LINKS_GUEST = [
  { path: PATH_PAGE.discover, name: 'Discover' },
  { path: PATH_PAGE.about, name: 'About' },
  { path: PATH_PAGE.contact, name: 'Contact' },
];
