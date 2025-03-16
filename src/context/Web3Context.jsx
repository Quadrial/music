import { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Create the context
const Web3Context = createContext();

// Hook for consuming Web3 context
export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Connect wallet function
  const connectWallet = async (walletType) => {
    try {
      let web3Provider;
  
      if (walletType === "metamask") {
        if (!window.ethereum) {
          alert("MetaMask is not installed!");
          return;
        }
        web3Provider = new ethers.BrowserProvider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []);
      } else if (walletType === "walletconnect") {
        const walletConnectProvider = new WalletConnectProvider({
          rpc: { 11155111: import.meta.env.VITE_rpc_url }, // Sepolia RPC
          chainId: 11155111,
        });
        await walletConnectProvider.enable();
        web3Provider = new ethers.BrowserProvider(walletConnectProvider);
      }
  
      const signer = await web3Provider.getSigner();
      const address = await signer.getAddress();
  
      setProvider(web3Provider);
      setWalletAddress(address);
      setIsWalletConnected(true);
  
      console.log("Connected to:", address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };  

  // Disconnect Wallet
  const disconnectWallet = async () => {
    setProvider(null);
    setWalletAddress(null);
    setIsWalletConnected(false);

    // If using WalletConnect, close the session
    if (provider?.provider?.disconnect) {
      await provider.provider.disconnect();
    }
  };

  return (
    <Web3Context.Provider
      value={{
        provider,
        walletAddress,
        isWalletConnected,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
