import { useEffect, useState } from 'react'
import { useCheckWindowEthereum } from './use-check-window-ethereum';

export const useChainId = () => {
    const [chainId, setChainId] = useState<number | undefined>();
    const hasWindowEthereum = useCheckWindowEthereum();

    useEffect(() => {
        if (!hasWindowEthereum) return;
        const getChainId = async () => {
            const chainId = await window.ethereum?.request({ method: 'eth_chainId' });
            const chainIdInt = parseInt(chainId, 16);
            setChainId(chainIdInt);
        }

        getChainId();
    }, [hasWindowEthereum])

    return chainId;
}
