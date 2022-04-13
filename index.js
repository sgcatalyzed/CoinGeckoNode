// run `node index.js` in the terminal
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async () => {
  // await CoinGeckoClient.ping();
  // coins.all()
  // coins.list()
  // coins.market()
  // let data = await CoinGeckoClient. coins.list();
  // console.log(data)

  let data = await CoinGeckoClient.simple.price({
    ids: [
      'akash-network',
      'band-protocol',
      'bitcanna',
      'bitsong',
      'bostrom',
      'cerberus-2',
      'certik',
      'cheqd-network',
      'chihuahua-token',
      'comdex',
      'cosmos',
      'crypto-com-chain',
      'cryptyk',
      'darcmatter-coin',
      'decentr',
      'desmos',
      'dig-chain',
      'e-money',
      'e-money-eur',
      'hope-galaxy',
      'ion',
      'iris-network',
      'ixo',
      'juno-network',
      'ki',
      'likecoin',
      'lum-network',
      'medibloc',
      'microtick',
      'neta',
      'osmosis',
      'persistence',
      'pstake-finance',
      'regen',
      'secret',
      'sentinel',
      'sommelier',
      'stargaze',
      'starname',
      'terra-krw',
      'terra-luna',
      'terrausd',
      'umee',
      'vidulum',
      'bitcoin',
    ],
    vs_currencies: ['usd'],
  });
  console.log(data);
};
func();
