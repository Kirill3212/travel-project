import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'http://localhost:3000';
const MAX_RETRIES = 3;

export const travelApi = createApi({
  reducerPath: 'travelApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    { maxRetries: MAX_RETRIES },
  ),
  endpoints: (builder) => ({
    // Home Cards
    getHomeCards: builder.query({
      query: () => '/homeCards',
    }),
    // Popular Locations
    getPopularCountries: builder.query({
      query: () => '/popularCountries',
    }),
    getPopularCities: builder.query({
      query: () => '/popularCities',
    }),
    getPopularBeaches: builder.query({
      query: () => '/popularBeaches',
    }),
  }),
});

export const {
  useGetPopularCountriesQuery,
  useGetPopularCitiesQuery,
  useGetPopularBeachesQuery,
  useGetHomeCardsQuery,
} = travelApi;

// Посмотреть мб стоит типизовать тип данный который должен приходить к обращению к определенному endpoint
