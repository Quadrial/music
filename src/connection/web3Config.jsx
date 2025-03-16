import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 11155111;

const sepoliaChain = {
  chainId: SUPPORTED_CHAIN,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: import.meta.env.VITE_rpc_url,
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // Make sure this matches your app domain
  icons: ["https://avatars.mywebsite.com/"],
};

// Export the web3Modal instance
export const web3Modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepoliaChain],
  projectId: import.meta.env.VITE_projectId,
  enableAnalytics: false,
});
