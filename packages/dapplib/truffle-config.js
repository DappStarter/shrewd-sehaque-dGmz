require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rifle noble around imitate private equal genre'; 
let testAccounts = [
"0xedfe4aab5dc4680cd8f37d95f16e57b00bffa270a092301868e8ae619bf81cc8",
"0x41a4d17a99523cada4ae8685bd2899ed448727f5f16981493443ffbd34da5407",
"0xe888b6bd70728c534343ed12ace1f1153426f07341368894d6e39fc8c4c1bfce",
"0xf1a969f5cbd239eecf0c5271d2cc8ca9307a00350251054e51c4bca5600fd674",
"0x632da83814d6a2fcd6d27878def2c8890460437952e03068a45e361e0369fb8d",
"0x458c51409980541b81f905437aa49a75448435fe4467477f3ff638a561ff20f9",
"0x25f9e7882ee49a738ade129588f1b6c85228146df0176bdedb069ce150ee2f51",
"0x6c2330239305c0d0e52a7b6b06a7af672f2026fb80700034436c30e492343da4",
"0xf3fc32f86eea783fc395ffc23324c72ae457c7a5ebb269f7b0c142d378f741bd",
"0xa797fb7fc81acc343cb540db769a2e8010c046b8c19cabc01218eebead408ec7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

