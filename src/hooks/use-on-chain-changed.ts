import { useEffect } from 'react'
import { useCheckWindowEthereum } from './use-check-window-ethereum';

export const useOnChainChanged = () => {
    const hasWindowEthereum = useCheckWindowEthereum();

    useEffect(() => {
        if(!hasWindowEthereum) {
            return;
        }
        const handleChainChanged = () => {
            window.location.reload();
        }
        window.ethereum?.on("chainChanged", handleChainChanged);
    }, [hasWindowEthereum])
  return null
}
