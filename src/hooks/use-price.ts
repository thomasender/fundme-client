import { useState, useEffect } from 'react'
import { useContract } from './use-contract';
import { BigNumberish, formatEther } from 'ethers';

import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants';

const PRICE_FETCH_INTERVAL = 60000;

export const usePrice = () => {
    const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
    const [price, setPrice] = useState("");

    useEffect(() => {
        if(!contract) {
            return;
        }
        const getMinUsd = async () => {
            const maticPrice: BigNumberish = await contract.getPrice();
            setPrice(formatEther(maticPrice));
        }
        getMinUsd();
        const timer = setInterval(() => getMinUsd(), PRICE_FETCH_INTERVAL);

        return () => clearInterval(timer);

    }, [contract]);
  return parseFloat(price);
}
