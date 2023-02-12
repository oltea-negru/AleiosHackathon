import React from "react";
import { useEffect, useState } from "react";

import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
import { router } from 'next/router'
import { setTokens, authenticate } from "../api/auth";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers,utils } from "ethers";
import Lock from '../artifacts/contracts/Lock.sol/Lock.json'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'
import MetaMask from '../assets/images/MetaMask.png'

export const deployedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


export default function Profile()
{
  const [user, setUser] = useState({});
  const [image, setImage] = useState("");

    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    

    async function requestAccount(){
      return await window.ethereum.request({
        method: 'eth_requestAccounts',
       });
    }

    const connectWallet = async () => {
      try{
          if (!window.ethereum) {
              sethaveMetamask(false);
          }
          const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts',
          });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          console.log("provider "+provider);

          let balance = await provider.getBalance(accounts[0]);
          let bal = ethers.utils.formatEther(balance);
          setAccountAddress(accounts[0]);
          setAccountBalance(bal);
          setIsConnected(true);
          sessionStorage.setItem('address', accounts[0]);
          sessionStorage.setItem('balance', bal);
          sessionStorage.setItem('isConnected', true);
          window.location.reload();
      } catch (error) {
          setIsConnected(false);
          sessionStorage.removeItem('address');
          sessionStorage.removeItem('balance');
          sessionStorage.setItem('isConnected', false);
      }
  };
   
    return (
      <div id="animatedBackground" className="w-full items-center  justify-center bg-one" >
    <div marginTop="50px" className="bg-three h-[40%] font-extrabold justify-center flex items-center rounded-3xl hover:-translate-y-10 :hover transition duration-700 ease-out shadow-xl hover:shadow-zinc-100 w-[60%]">
      <button onClick={connectWallet} className="text-four hover:text-four font-mono scale-[5]">Connect Wallet</button>
    </div>
  </div>
    )
};
