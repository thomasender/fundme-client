import { useState, useEffect } from 'react'
import { BigNumberish, formatEther } from 'ethers';
import { useProvider } from './use-provider';
import { useSigner } from './use-signer';

export const useAccountBalance = () => {
    const provider = useProvider()
    const signer = useSigner()
    const [signerBalance, setSignerBalance] = useState("");

    useEffect(() => {
        if(!provider || !signer) {
            return;
        }
        const getBalanceFromAddress = async () => {
            const balance: BigNumberish = await provider.getBalance(signer.getAddress());
            setSignerBalance(formatEther(balance));
        }
        getBalanceFromAddress();
        const timer = setInterval(() => getBalanceFromAddress(), 1000);

        return () => clearInterval(timer);

    }, [provider, signer]);
  return signerBalance;
}
