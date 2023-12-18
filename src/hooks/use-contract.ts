import { useState, useEffect } from 'react'
import { Contract } from 'ethers';
import { useProvider } from './use-provider';
import { useSigner } from './use-signer';

export type ContractABI = Array<{
  constant?: boolean;
  inputs?: Array<{
    name: string;
    type: string;
  }>;
  name: string;
  outputs?: Array<{
    name: string;
    type: string;
  }>;
  payable?: boolean;
  stateMutability?: "nonpayable" | "payable" | "view" | "pure";
  type: "function" | "constructor" | "event" | "fallback";
}>;

export const useContract = (contractAddress: string, abi: ContractABI) => {
    const provider = useProvider();
    const signer = useSigner();
    const [contract, setContract] = useState<Contract | null>(null);
      useEffect(() => {
        if (!provider || !signer) {
        return;
        }

        const getContract = async () => {
        const contract = new Contract(
            contractAddress,
            abi,
            signer
        );
        setContract(contract);
        };
        getContract();
    }, [provider, signer, abi, contractAddress]);

  return contract;
}
