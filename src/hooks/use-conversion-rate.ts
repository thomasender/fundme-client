import { useState, useEffect } from 'react'
import { useContract } from './use-contract';
import { BigNumberish, formatEther } from 'ethers';

import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants';

export const useConversionRate = (amount: number) => {
    const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
    const [conversionRate, setConversionRate] = useState("");

    useEffect(() => {
        if(!contract || !amount) {
            return;
        }
        const getMinUsd = async () => {
            const maticAmountToUsd: BigNumberish = await contract.getConversionRate(amount);
            setConversionRate(formatEther(maticAmountToUsd));
        }
        getMinUsd();

    }, [contract, amount]);
  return conversionRate;
}
