import { useEffect } from 'react'
import { useCheckWindowEthereum } from './use-check-window-ethereum';

export const useOnAccountsChanged = () => {
    const hasWindowEthereum = useCheckWindowEthereum();

    useEffect(() => {
        if(!hasWindowEthereum) {
            return;
        }
        const handleAccountsChanged = () => {
            window.location.reload();
        }
        window.ethereum.on("accountsChanged", handleAccountsChanged);
    }, [hasWindowEthereum])
  return null
}
