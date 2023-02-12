import { useEffect, useState } from 'react'
import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import { setTokens } from "./auth";
import { Web3ReactProvider } from '@web3-react/core';
import logo from "../assets/images/logo512.png";
import { ethers, utils } from "ethers";


import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';
const apolloClient = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

export default function Profile()
{

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () =>
  {
    const { ethereum } = window;
    try
    {
      if (!ethereum)
      {
        sethaveMetamask(false);
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);

      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
      getChallenge(accounts[0], provider);
    } catch (error)
    {
      setIsConnected(false);
    }
  };

  const GET_CHALLENGE = `
        query($request: ChallengeRequest!) {
            challenge(request: $request) { text }
        }
    `;

  const getChallenge = async (accountAddress, provider) =>
  {
    console.log("getChallenge " + accountAddress);
    const response = await apolloClient.query({
      query: gql(GET_CHALLENGE),
      variables: {
        request: {
          address: accountAddress
        },
      },
    })
    console.log('Lens example data: ', response);
    //    const sign  = useSigner.signMessage(response)

    const signer = provider.getSigner();
    const hexMessage = utils.hexlify(utils.toUtf8Bytes(response))
    const signature = await signer.signMessage(hexMessage)
    authenticate(accountAddress, signature);
  }

  const AUTHENTICATION = `
        mutation($request: SignedAuthChallenge!) { 
            authenticate(request: $request) {
            accessToken
            refreshToken
            }
        }`;
  const authenticate = (address, signature) =>
  {
    const ans = apolloClient.mutate({
      mutation: gql(AUTHENTICATION),
      variables: {
        request: {
          address,
          signature,
        },
      }
    })
    console.log("authenticate " + ans);
    return ans;
  }

  return (<div className="App h-screen">
    <header className="App-header">
      {haveMetamask ? (
        <div className="App-header">
          {isConnected ? (
            <div className="card">
              <div className="card-row">
                <h3>Wallet Address:</h3>
                <p>
                  {accountAddress}
                </p>
              </div>
              <div className="card-row">
                <h3>Wallet Balance:</h3>
                <p>{accountBalance}</p>
              </div>
            </div>
          ) : (
            <img src={logo.src} className="App-logo" alt="logo" />
          )}
          {isConnected ? (
            <p className="info">🎉 Connected Successfully</p>
          ) : (
            <button className="btn" onClick={connectWallet}>
              Connect
            </button>
          )}
        </div>
      ) : (
        <p>Please Install MataMask</p>
      )}
    </header>
  </div>
  );
}