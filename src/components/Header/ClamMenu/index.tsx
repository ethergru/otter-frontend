import { useState, useRef } from 'react';
import { getAddresses, TOKEN_DECIMALS, DEFAULT_NETWORK } from '../../../constants';
import { useSelector } from 'react-redux';
import { Link, SvgIcon, Popper, Button, Paper, Typography, Divider, Box, Fade } from '@material-ui/core';
import { ReactComponent as ArrowUpIcon } from '../../../assets/icons/arrow-up.svg';
import './clam-menu.scss';
import { IReduxState } from '../../../store/slices/state.interface';
import { getTokenUrl } from '../../../helpers';

const addTokenToWallet = (tokenSymbol: string, tokenAddress: string) => async () => {
  const tokenImage = getTokenUrl(tokenSymbol.toLowerCase());

  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: TOKEN_DECIMALS,
            image: tokenImage,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

function ClamMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isEthereumAPIAvailable = window.ethereum;

  const networkID = useSelector<IReduxState, number>(state => {
    return (state.app && state.app.networkID) || DEFAULT_NETWORK;
  });

  const addresses = getAddresses(networkID);

  const { CLAM_ADDRESS, sCLAM_ADDRESS } = addresses;

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = 'ohm-popper';
  return (
    <>
      <Box
        component="div"
        onMouseEnter={e => handleClick(e)}
        onMouseLeave={e => handleClick(e)}
        id="ohm-menu-button-hover"
      >
        <div className="ohm-button">
          <p>BUY PONZI</p>
        </div>

        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => {
            return (
              <Fade {...TransitionProps} timeout={400}>
                <Paper className="ohm-menu" elevation={1}>
                  <Box component="div" className="buy-tokens">
                    <Link
                      href={'https://quickswap.exchange/#/swap?outputCurrency=' + CLAM_ADDRESS}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button size="large" variant="contained" color="secondary" fullWidth>
                        <Typography className="buy-text" align="left">
                          Buy on QuickSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                        </Typography>
                      </Button>
                    </Link>
                  </Box>

                  {isEthereumAPIAvailable ? (
                    <Box className="add-tokens">
                      <Divider color="secondary" />
                      <p>ADD TOKEN TO WALLET</p>
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={addTokenToWallet('PONZI', CLAM_ADDRESS)}
                      >
                        <Typography className="buy-text">PONZI</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        onClick={addTokenToWallet('sPONZI', sCLAM_ADDRESS)}
                      >
                        <Typography className="buy-text">sPONZI</Typography>
                      </Button>
                    </Box>
                  ) : null}
                </Paper>
              </Fade>
            );
          }}
        </Popper>
      </Box>
    </>
  );
}

export default ClamMenu;
