export type HomeCardType = {
  flexDir: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alterativeTxt: string;
  btnHeader: string;
  btnTxt: string;
  header: string;
  imgSrc: string;
  txt: string;
};

// Popular Locations
export type PopularBeachType = {
  name: string;
  location: string;
  description: string;
  activities: string[];
  image: string;
  rating: number;
};

export type PopularCountryType = {
  name: string;
  capital: string;
  image: string;
  flagImage: string;
  popularExpression: string;
};

export type PopularCityType = {
  name: string;
  image: string;
  flagImage: string;
  popularPlaces: string[];
};
