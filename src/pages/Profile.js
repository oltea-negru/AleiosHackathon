import React from "react";
import { useEffect, useState } from "react";

import { useLazyQuery, useMutation } from "@apollo/client";
// import { useAccount, useSigner, useDisconnect } from 'wagmi'
import { router } from 'next/router'
import { setTokens, authenticate } from "../api/auth";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers,utils } from "ethers";

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

import LandingPage from '../api/landing'

const APIURL = 'https://api-mumbai.lens.dev/';
const apolloClient= new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
    })

export default function Profile(){
    const [user, setUser]=useState({});
    const [image, setImage]=useState("");

    const [haveMetamask, sethaveMetamask] = useState(true);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    
    const connectWallet = async () => {
        try{
            if (!window.ethereum) {
                sethaveMetamask(false);
            }
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            let balance = await provider.getBalance(accounts[0]);
            let bal = ethers.utils.formatEther(balance);
            setAccountAddress(accounts[0]);
            setAccountBalance(bal);
            setIsConnected(true);
            getChallenge(accounts[0],provider);
        } catch (error) {
            setIsConnected(false);
        }
    };
    const GET_CHALLENGE = `
        query($request: ChallengeRequest!) {
            challenge(request: $request) { text }
        }
    `;
    const getChallenge = async (accountAddress, provider) => {
        const response = await apolloClient.query({
         query: gql(GET_CHALLENGE),
         variables: {
           request: {
              address: accountAddress
           },
         },
       })
       const chall= response['data']['challenge']['text']
       console.log('Challenge: ',chall );
       // const sign  = useSigner.signMessage(response)
       
        const signer = provider.getSigner();
        const hexMessage = utils.hexlify(utils.toUtf8Bytes(chall))
        const signature = signer.signMessage(hexMessage).then(s=>{console.log(s)
            console.log("signature "+s);
            authenticate(accountAddress,s).then
            (()=>{
                // setTokens(response['data']['authenticate']['accessToken'],response['data']['authenticate']['refreshToken']);
                alert("success")
                router.push('/home');
            })
        });
    }

    const AUTHENTICATION = gql`
        mutation Authenticate(
          $address: EthereumAddress!
          $signature: Signature!
        ) {
          authenticate(request: {
            address: $address,
            signature: $signature
          }) {
            accessToken
            refreshToken
          }
        }
      `
        //todo change to signature
    const authenticate = (address, signature) => {
      console.log(address+" "+signature);
      
        const ans = apolloClient.mutate({
            mutation: AUTHENTICATION,
            variables: {
                address,
                signature,
            },
        })
        console.log("authenticate "+ans);
        return ans;
    }
    
    return (<div id="animatedBackground" className="h-screen w-full flex items-center  justify-center bg-one ">
    <div className="bg-three h-[40%] font-extrabold justify-center flex items-center rounded-3xl hover:-translate-y-10 :hover transition duration-700 ease-out shadow-xl hover:shadow-zinc-100 w-[60%]">
      <button onClick={connectWallet} className="text-four hover:text-four font-mono scale-[5]">WELCOME</button>
  
    </div>
  </div>)
};