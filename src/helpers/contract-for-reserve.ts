import { ethers } from 'ethers';
import { getAddresses, BONDS } from 'src/constants';
import { MimReserveContract, MimTimeReserveContract } from '../abi';

export const contractForReserve = (
  bond: string,
  networkID: number,
  provider: ethers.Signer | ethers.providers.Provider,
) => {
  const addresses = getAddresses(networkID);
  if (bond === BONDS.busd) {
    return new ethers.Contract(addresses.RESERVES.MAI, MimReserveContract, provider);
  }

  if (bond === BONDS.busd_ponzi) {
    return new ethers.Contract(addresses.RESERVES.MAI_CLAM, MimTimeReserveContract, provider);
  }

  throw Error(`Contract for reserve doesn't support: ${bond}`);
};
