import { PropsWithChildren } from 'react';
import { HeroContext } from './HeroContext';

type HeroProviderProps = PropsWithChildren & {
  heroData: HeroItem;
};

export function HeroProvider({ children, heroData }: HeroProviderProps) {
  return (
    <HeroContext.Provider value={{ heroData }}>{children}</HeroContext.Provider>
  );
}
