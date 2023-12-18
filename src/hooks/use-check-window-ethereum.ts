import React from 'react'

export const useCheckWindowEthereum = () => {
    const [hasWindowEthereum, setHasWindowEthereum] = React.useState(false)

    React.useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            setHasWindowEthereum(true)
        }
    }, [])

    return hasWindowEthereum
}
