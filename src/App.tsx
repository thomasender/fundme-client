import { ChangeEvent, useState } from 'react';
import { useContract } from "./hooks/use-contract";

import { CONTRACT_ABI, FUND_ME_ADDRESS, POLYGON_MAINNET_CHAIN_ID } from './constants';
import { useMinUsd } from './hooks/use-min-usd';
import { usePrice } from './hooks/use-price';
import { useMinAmountInMatic } from './hooks/use-min-amount-in-matic';
import { useIsContractOwner } from './hooks/use-is-contract-owner';
import { parseEther } from 'ethers';
import { useContractBalance } from './hooks/use-contract-balance';
import { useReady } from './hooks/use-ready-handler';
import { useOnAccountsChanged } from './hooks/use-on-accounts-changed';
import { AppFrame, Button, DataItem, ErrorMessage, FlexColCenter, FlexColStart, FlexRowCenter, FundersList, H1, Input, Paragraph } from './styles';
import Avatar from './assets/avatar.jpg';
import { useAccountBalance } from './hooks/use-account-balance';
import { useCheckWindowEthereum } from './hooks/use-check-window-ethereum';
import { useChainId } from './hooks/use-chain-id';
import { useOnChainChanged } from './hooks/use-on-chain-changed';
import { useFunders } from './hooks/use-funders';
import { ThemeToggler } from './theme-toggler';
import { Polygon } from './icons/polygon';
import { ThankYouNotification } from './thank-you-notification';
import { TransactionNotification } from './tx-notification';
import { Footer } from './footer';

function App() {
  const contract = useContract(FUND_ME_ADDRESS, CONTRACT_ABI);
  const [amount, setAmount] = useState(0);
  const contractBalance = useContractBalance();
  const minUsd = useMinUsd();
  const maticPrice = usePrice();
  const minAmountInMatic = useMinAmountInMatic();
  const isContractOwner = useIsContractOwner();
  const accountBalance = useAccountBalance();
  const hasWindowEthereum = useCheckWindowEthereum();
  const [txHash, setTxHash] = useState<string | null>(null);
  const chainId = useChainId();
  const funders = useFunders();
  const ready = useReady();
  const widthdrawable = isContractOwner && parseFloat(contractBalance) > 0;
  const [error, setError] = useState("")
  const [showThankYouNotification, setShowThankYouNotification] = useState(false);

  useOnAccountsChanged();
  useOnChainChanged();


  const onAmountChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setAmount(parseFloat(e.target.value));
  }

  const onFund = async () => {
    if (contract && amount) {
      setError("");
      try {
        const tx = await contract.fund({value: parseEther(amount.toFixed(18))});
        setTxHash(tx.hash);
        const receit = await tx.wait();
        if(receit && receit.status === 1) {
          setAmount(0);
          setTxHash("")
          setShowThankYouNotification(true);
          console.log({receit})
        }
      } catch (err) {
        setTxHash("")
        setError(err.reason)
      }
    }
  }

  const onWithdraw = async () => {
    if(!contract || !isContractOwner) {
      return;
    }
    const tx = await contract.withdraw();
    setTxHash(tx.hash);
    const receit = await tx.wait();
    if(receit) {
      console.log({receit})
    }
  }

  const onConnect = async () => {
    if(hasWindowEthereum) {
      const accounts = await window.ethereum?.request({ method: 'eth_requestAccounts' });
      console.log({accounts})
    }
  }


  if (!hasWindowEthereum) {
    return <>
    <h1>Ooops!</h1>
    <h2>Looks like there is no Web3 Provider available!</h2>
    <p>Please <a href="https://metamask.io" target="_blank">install MetaMask</a> to interact with this DApp!</p>
    </>
  }

  const switchToPolygonMainnet = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: '0x89', // Chain ID for Polygon Mainnet
      }],
    });
  } catch {
      try {
        await window.ethereum.request({
          "method": "wallet_addEthereumChain",
          "params": [
            {
              "chainId": "0x89",
              "chainName": "Polygon LlamaNodes",
              "rpcUrls": [
                "https://polygon.llamarpc.com"
              ],
              "iconUrls": [
                "https://xdaichain.com/fake/example/url/xdai.svg",
                "https://xdaichain.com/fake/example/url/xdai.png"
              ],
              "nativeCurrency": {
                "name": "MATIC",
                "symbol": "MATIC",
                "decimals": 18
              },
              "blockExplorerUrls": [
                "https://polygonscan.com"
              ]
            }
          ]
        })
      } catch {
        console.log('User did not want to switch to Polygon Mainnet!')
      }
  }
};
  if (chainId !== POLYGON_MAINNET_CHAIN_ID) {
    return (
      <>
        <ThemeToggler />
        <h1>Ooops!</h1>
        <h2>Looks like you are not connected to the Polygon Mainnet!</h2>
        <Polygon />
        <p>Please switch to the Polygon Mainnet to interact with this DApp!</p>
        <Button onClick={switchToPolygonMainnet}>Switch to Polygon Now!</Button>
      </>
    )
  }

  if (!ready) {
    return (
      <>
        <ThemeToggler />
        <h1>We are loading the necessary data...</h1>
        <h2>Please make sure to connect your MetaMask in order to interact with this DApp!</h2>
        <Button onClick={onConnect}>Connect</Button>
      </>
      )
  }

  const sliceAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <AppFrame>
      {showThankYouNotification ? <ThankYouNotification closeMe={() => setShowThankYouNotification(false)} /> : null}
      <H1>Fund Me <Polygon /> </H1>
      <ThemeToggler />
      <img className="avatar" src={Avatar} alt="Thomas Ender" />
      {!isContractOwner ?
      <FlexColStart>
        <Paragraph>Hi, my name is Thomas Ender and I love to learn everything about Blockchain Development,</Paragraph>
        <Paragraph>from writing Smart Contracts to building the user interface. This website is an example</Paragraph>
        <Paragraph>of a decentralized application (DApp) that allows you to fund my learning journey.</Paragraph>
        <Paragraph>The Smart Contract is written in Solidity and the Frontend is build with React and Typescript.</Paragraph>
        <Paragraph>It is deployed to the Polygon Mainnet, so you can support me by depositing MATIC into this contract.</Paragraph>
        <Paragraph>You can check out the source code to this project on GitHub if you are curious to learn how it is done!</Paragraph>
        <Paragraph>Thank you for your support!</Paragraph>
      </FlexColStart>
    : null}
    {isContractOwner ? <Paragraph>Hi Thommy!</Paragraph> : null}
    {widthdrawable ? <Paragraph>Here to withdraw some funds?</Paragraph> : null}
      <FlexColCenter className="data-input-wrapper">
        <FlexColCenter className="contract-data">
          {accountBalance ? 
          <FlexRowCenter>
            <DataItem>Your Balance:</DataItem>
            <DataItem>{accountBalance}</DataItem>
          </FlexRowCenter>
            : null
          }
          {contractBalance ?
            <FlexRowCenter>
              <DataItem>Contract Balance:</DataItem>
              <DataItem>{contractBalance}</DataItem>
            </FlexRowCenter>
            : null
            }
          {minUsd ? 
            <FlexRowCenter>
              <DataItem>Minimum USD:</DataItem>
              <DataItem>{minUsd}</DataItem>
            </FlexRowCenter>
            : null
            }
          {maticPrice ? 
            <FlexRowCenter>
              <DataItem>Matic Price: </DataItem>
              <DataItem>{maticPrice} </DataItem>
            </FlexRowCenter>
            : null
            }
          {minAmountInMatic ? 
            <FlexRowCenter>
              <DataItem>Min Amount in Matic:</DataItem>
              <DataItem>{minAmountInMatic}</DataItem>
            </FlexRowCenter>
              : null
            }
        </FlexColCenter>
      {widthdrawable ?
      <Button type="button" onClick={onWithdraw}>Withdraw</Button> : null}
      {!isContractOwner ?<FlexRowCenter>
          <Input type="number" step="0.000000000000001" onChange={onAmountChange} value={amount} placeholder="Amount in Matic" />
          <Button disabled={!amount || amount < minAmountInMatic } type="button" onClick={onFund}>Fund<Polygon /></Button>
        </FlexRowCenter> : null
      }
      
      {amount && maticPrice ?
          <FlexRowCenter>
            <Paragraph>{amount} MATIC = {amount * maticPrice} $</Paragraph>
          </FlexRowCenter> : null
      }
      {txHash ? 
        <TransactionNotification txHash={txHash} />
      : null
      }
      </FlexColCenter>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {funders.length > 0 ? (
        <FundersList>
          <Paragraph>Many thanks to all funders</Paragraph>
          {funders.map(funder => <Paragraph key={funder}>{sliceAddress(funder)}</Paragraph>)}
        </FundersList>
      ) : null}
      <Footer />
    </AppFrame>
  )
}

export default App
