import { CustomError, ICustomError } from '@src/types/common';

export const throwError = ({ code, message = '', data }: ICustomError) => {
  throw new CustomError(code, message, data);
};

export const outputUnNullish = <T>(input: T, output = '') => input ?? output;

export const randomInteger = (min: number, max: number) => {
  const _min = Math.min(min, max);
  const _max = Math.max(min, max);
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
};

export const randomHSL = () => {
  const hue = randomInteger(0, 360);
  const saturation = randomInteger(0, 100);
  const lightness = randomInteger(0, 100);

  return { h: hue, s: saturation, l: lightness };
};
