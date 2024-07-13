import { createContext } from 'react';

type HeroContextProps = {
  heroData: HeroItem;
};

export const HeroContext = createContext<HeroContextProps | undefined>(undefined);
