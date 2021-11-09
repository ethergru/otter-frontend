import { SvgIcon } from '@material-ui/core';
import { ReactComponent as MAI } from '../assets/tokens/MAI.svg';
import { ReactComponent as CLAM } from '../assets/tokens/CLAM.svg';
import { ReactComponent as StakedClam } from '../assets/tokens/sCLAM.svg';

function getMAITokenImage() {
  return <SvgIcon component={MAI} viewBox="0 0 32 32" style={{ height: '32px', width: '32px' }} />;
}

function getCLAMTokenImage() {
  return <SvgIcon component={CLAM} viewBox="0 0 32 32" style={{ height: '32px', width: '32px' }} />;
}

function getStakedCLAMTokenImage() {
  return <SvgIcon component={StakedClam} viewBox="0 0 32 32" style={{ height: '32px', width: '32px' }} />;
}

export function getTokenImage(name: 'ponzi' | 'busd' | 'sponzi'): JSX.Element {
  if (name === 'busd') return getMAITokenImage();
  if (name === 'ponzi') return getCLAMTokenImage();
  if (name === 'sponzi') return getStakedCLAMTokenImage();

  throw Error(`Token image doesn't support: ${name}`);
}

function toUrl(base: string): string {
  const url = window.location.origin;
  return url + '/' + base;
}

export function getTokenUrl(name: string) {
  if (name === 'ponzi') {
    const path = require('../assets/tokens/CLAM.svg').default;
    return toUrl(path);
  }

  if (name === 'sponzi') {
    const path = require('../assets/tokens/sCLAM.svg').default;
    return toUrl(path);
  }

  throw Error(`Token url doesn't support: ${name}`);
}
