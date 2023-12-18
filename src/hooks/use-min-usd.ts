import { useState, useEffect } from 'react'
import { useContract } from './use-contract';
import { BigNumberish, formatEther } from 'ethers';

import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants';

export const useMinUsd = () => {
    const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
    const [minUsd, setMinUsd] = useState("");

    useEffect(() => {
        if(!contract) {
            return;
        }
        const getMinUsd = async () => {
            const minUsd: BigNumberish = await contract.getMinUsd();
            setMinUsd(formatEther(minUsd));
        }
        getMinUsd();

    }, [contract]);

  return minUsd;
}
