import { useEffect, useState } from 'react'
import { CONTRACT_ABI, FUND_ME_ADDRESS } from '../constants'
import { useContract } from './use-contract'

export const useFunders = () => {
    const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI)
    const [funders, setFunders] = useState<string[]>([]);

    useEffect(() => {
        if (!contract) {
            return
        }
        const getFunders = async () => {
            const funders = await contract.getFunders()
            // remove duplicates
            const fundersArray = Array.from(new Set(funders)) as string[];
            setFunders(fundersArray)
        }
        getFunders()
    }, [contract])

    return funders
}

