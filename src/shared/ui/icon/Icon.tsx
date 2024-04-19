import { FC, SVGProps } from 'react';

import SearchColorSVG from '../../icons/search-color.svg';
import SearchSVG from '../../icons/search.svg';

export type TSvgIconNames = 'search' | 'searchColor';

export type TIcons = Record<TSvgIconNames, string | SVGProps<SVGSVGElement>>;

export const SVGIcons: TIcons = {
  searchColor: SearchColorSVG,
  search: SearchSVG,
};

interface IconProps {
  width?: string;
  height?: string;
  icon: string;
  color?: string;
}

export const Icon: FC<IconProps> = ({ icon, width = '24px', height = '24px', color }) => {
  return <img src={SVGIcons[icon]} alt='' width={width} height={height} color={color} />;
};
