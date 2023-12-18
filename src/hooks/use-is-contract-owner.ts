import { useState, useEffect } from 'react'
import { useSigner } from './use-signer';
import { useContract } from './use-contract';
import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants';

export const useIsContractOwner = () => {
  const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
  const signer = useSigner();
  const [isContractOwner, setIsContractOwner] = useState<boolean>(false);

   useEffect(() => {
    if (!contract || !signer) {
      return;
    }

    const getContractOwnerAddress = async () => {
      const contractOwnerAddress = await contract.getOwner();
      setIsContractOwner(signer.address === contractOwnerAddress);
    }
    getContractOwnerAddress();
  }, [contract, signer])

  return isContractOwner;
}
