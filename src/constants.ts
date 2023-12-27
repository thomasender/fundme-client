// import ABI from "./abi.json"
import ABI_PROD from "./abi-prod-testing.json"
import { ContractABI } from "./hooks/use-contract";


// Contract at this address has minusd value of 5e18, as intended to have in the mainnet contract
// "0xe8137837a164Bc716dda32e899480CB972de3CD3"
// Contract at this address has minusd value of 5000 wei for easier testing, getting test Matic is hard
// "0x6DF45b871ab0db23b2a1e631FB39b78A6ec3E60f";
// FUND ME FOR TESTING Contract on MAINNET: 0x7e140496Abc7227b0ae0081CBe8eeC399B2c86D6
// FUND ME PROD ON MAINNET: 0xBADC8EEe035bE0f0b8B7f2eb63FD5a89ECB1b361
// OWNER: 0x47c65A5A41cB8f369c053CaB475708e065637b82
export const FUND_ME_ADDRESS = "0xBADC8EEe035bE0f0b8B7f2eb63FD5a89ECB1b361";
export const CONTRACT_ABI = ABI_PROD as ContractABI;
// Mumbai Testnet TX BASE URL: https://mumbai.polygonscan.com/tx/
// Mainnet TX BASE URL: https://polygonscan.com/tx/
export const ETHERSCAN_POLYGON_BASE_URL = "https://polygonscan.com/"
export const ETHERSCAN_POLYGON_TX_BASE_URL = `${ETHERSCAN_POLYGON_BASE_URL}tx/`
export const ETHERSCAN_POLYGON_ADDRESS_BASE_URL = `${ETHERSCAN_POLYGON_BASE_URL}address/`
export const ETHERSCAN_MUMBAI_POLYGON_TX_BASE_URL = "https://mumbai.polygonscan.com/tx/"
export const POLYGON_MUMBAI_CHAIN_ID = 8001;
export const POLYGON_MAINNET_CHAIN_ID = 137;