import { BONDS } from '../constants';

export const bondName = (bond: string): string => {
  if (bond === BONDS.busd) return 'BUSD';
  if (bond === BONDS.busd_ponzi) return 'PONZI-BUSD LP';

  throw Error(`Bond name doesn't support: ${bond}`);
};
