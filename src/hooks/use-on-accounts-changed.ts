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
         // @ts-expect-error unknown property
        window.ethereum?.on("accountsChanged", handleAccountsChanged);
    }, [hasWindowEthereum])
  return null
}
