import { useState, useEffect } from 'react'
import { useMinUsd } from './use-min-usd';
import { usePrice } from './use-price';


export const useMinAmountInMatic = () => {
      const minUsd = useMinUsd();
  const maticPrice = usePrice();
    const [minAmountInMatic, setMinAmountInMatic] = useState(0);

    useEffect(() => {
        if(!minUsd || !maticPrice) {
            return;
        }
        const minAmountInMatic = parseFloat(minUsd) / maticPrice;
        setMinAmountInMatic(minAmountInMatic);
    }, [minUsd, maticPrice])


  return minAmountInMatic;
}
