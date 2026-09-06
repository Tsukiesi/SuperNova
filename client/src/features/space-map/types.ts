import { type RefObject } from "react";

export interface AnimationControllerProps {
  isPaused: boolean;
  elapsed: RefObject<number>;
}

export interface PlanetProps {
  planetName: string;
  textureUrl: string;
  distance: number;
  radius: number;
  speed: number;
  rotationSpeed: number;
  elapsed: RefObject<number>;
  isPaused: boolean;
  selectPlanet: (planetName: string) => void;
  selected: string | null;
}

export interface PlanetMenuProps {
  name: string;
  closeMenu: () => void;
}
