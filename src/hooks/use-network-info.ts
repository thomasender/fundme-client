import { useEffect, useState } from 'react';
import { useProvider } from './use-provider'
import { Network } from 'ethers';

export const useNetworkInfo = () => {

    const provider = useProvider();
    const [networkInfo, setNetworkInfo] = useState<Network>();

    useEffect(() => {
        if (!provider) {
        return
        }
        const getNetworkInfo = async () => {
            const info = await provider.getNetwork();
            setNetworkInfo(info);
        }
        getNetworkInfo();
    }, [provider]);
  return networkInfo
}
