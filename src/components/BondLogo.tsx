import { isBondLP, getTokenImage, getPairImage } from '../helpers';
import { Box } from '@material-ui/core';

interface IBondHeaderProps {
  bond: string;
}

function BondHeader({ bond }: IBondHeaderProps) {
  const reserveAssetImg = () => {
    if (bond.indexOf('ponzi') >= 0) {
      return getTokenImage('ponzi');
    } else if (bond.indexOf('busd') >= 0) {
      return getTokenImage('busd');
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width={'74px'}>
      {isBondLP(bond) ? getPairImage(bond) : reserveAssetImg()}
    </Box>
  );
}

export default BondHeader;
