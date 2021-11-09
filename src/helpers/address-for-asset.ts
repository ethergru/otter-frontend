import { getAddresses, BONDS } from '../constants';

export const addressForAsset = (bond: string, networkID: number): string => {
  const addresses = getAddresses(networkID);

  if (bond === BONDS.busd) {
    return addresses.RESERVES.MAI;
  }

  if (bond === BONDS.busd_ponzi) {
    return addresses.RESERVES.MAI_CLAM;
  }

  throw Error(`Address for asset doesn't support: ${bond}`);
};
