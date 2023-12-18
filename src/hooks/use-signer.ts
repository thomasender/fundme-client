import { useState, useEffect } from 'react'
import { useProvider } from './use-provider';
import { JsonRpcSigner } from 'ethers';

export const useSigner = () => {
  const provider = useProvider();
  const [signer, setSigner] = useState<JsonRpcSigner>();

   useEffect(() => {
    if (!provider) {
      return;
    }

    const getSigner = async () => {
      const signer = await provider.getSigner();
      setSigner(signer);
    }
    getSigner();
  }, [provider])

  return signer;
}
