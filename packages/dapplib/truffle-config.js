require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember push grace option bridge sure'; 
let testAccounts = [
"0x21221aa2ef1669f1b57203a0f4d2c7d19d73588b8ceee33efba1e2a3f4eee00d",
"0x158cbd6fa392f0552f34bc42f158b15fbb27bd1e8567e6dbe423202c692c15e6",
"0x8b852ecd63b71837576d0327b2322f961eda1ad36979439ab5953b849eb53699",
"0x8de9bdbecd569f33d10a175505a3333bbed6e15f4c22c28304f2e1b5c2ce95a6",
"0x0ce9c343807f60c957de562788b5751e72420393555bf9b7c3afd35c1afa86dc",
"0x210a7e506fec2d4a5c62f60c729ce70405ba6a1a77733095d1ecc1545a6ee295",
"0x8402457e30a1e1688e6f7a849f51adc8ee7512b952a9a0363ebd8976c3cfce75",
"0xb27b91f088fc8a4bf5068f4ee8ed884f98997ce19b0f603fb8cdcca5e0222f8d",
"0x2b608a172ade545334d084714020b96667b272fe4a1fc34655a59d3b402f3445",
"0xe41107b2eed99b9663359766d785f05a21e304a3f3f1470da4e42a1f822222c2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


