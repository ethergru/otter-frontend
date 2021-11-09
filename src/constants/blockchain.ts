export const EPOCH_INTERVAL = 2200;
export const TOKEN_DECIMALS = 9;
export const BLOCK_RATE_SECONDS = 2;

export enum Networks {
  UNKNOW = 0,
  // POLYGON_MAINNET = 137,
  POLYGON_MAINNET = 56,
  // POLYGON_MUMBAI = 80001,
  POLYGON_MUMBAI = 97,
}

export const RPCURL = {
  // POLYGON_MAINNET: 'https://polygon-rpc.com',
  POLYGON_MAINNET: 'https://bsc-dataseed.binance.org',
  // POLYGON_MUMBAI: 'https://polygon-mumbai.infura.io/v3/d7dae60b5e1d40b9b31767b0086aa75d',
  POLYGON_MUMBAI: 'https://data-seed-prebsc-1-s1.binance.org:8545',
};

// export const DEFAULT_NETWORK = Networks.POLYGON_MAINNET;
export const DEFAULT_NETWORK = Networks.POLYGON_MUMBAI;
