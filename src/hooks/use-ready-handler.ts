import {useEffect, useState} from 'react'
import { useNetworkInfo } from './use-network-info';
import { useContract } from './use-contract';
import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants';
import { useContractBalance } from './use-contract-balance';
import { useMinUsd } from './use-min-usd';
import { usePrice } from './use-price';
import { useSigner } from './use-signer';
import { useAccountBalance } from './use-account-balance';
import { useChainId } from './use-chain-id';

export const useReady = () => {
    const networkInfo = useNetworkInfo();
    const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
    const contractBalance = useContractBalance();
    const minUsd = useMinUsd();
    const maticPrice = usePrice();
    const signer = useSigner();
    const accountBalance = useAccountBalance();
    const chainId = useChainId();

    const [ready, setReady] = useState(false);


    useEffect(() => {
        if (!networkInfo || !contract || !contractBalance || !minUsd || !maticPrice || !signer || !accountBalance || !chainId) {
            return;
        }
        setReady(true);
    }, [networkInfo, contract, contractBalance, minUsd, maticPrice, signer, accountBalance, chainId])
  return ready
}
