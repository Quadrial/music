import { useState } from "react";
import { ethers } from "ethers";
import { getPaymentContract } from "../constant/contractpayment"; // adjust path as needed
import { useWeb3 } from "../context/Web3Context";

/**
 * Hook to mint an NFT.
 * @returns {Object} - { mintNFT, loading, error }
 */

export const useMintNFT = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mintNFT = async (
    amount,
    tokenURI,
    price,
    artist,
    title,
    description
  ) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.mintNFT(
        amount,
        tokenURI,
        price,
        artist,
        title,
        description
      );
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { mintNFT, loading, error };
};

/**
 * Hook to buy an NFT.
 * @returns {Object} - { buyNFT, loading, error }
 */
export const useBuyNFT = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // value should be provided in wei (ethers.parseEther("amount") can help)
  const buyNFT = async (tokenId, amount, value) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.buyNFT(tokenId, amount, { value });
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { buyNFT, loading, error };
};

/**
 * Hook to subscribe.
 * @returns {Object} - { subscribe, loading, error }
 */
export const useSubscribe = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // value should equal the subscriptionPrice (in wei)
  const subscribe = async (value) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.subscribe({ value });
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { subscribe, loading, error };
};

/**
 * Hook to check if a given user is subscribed.
 * @param {string} userAddress - The user's wallet address.
 * @returns {Object} - { isSubscribed, checkSubscription, error }
 */
export const useIsSubscribed = (userAddress) => {
  const { provider } = useWeb3();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const checkSubscription = async () => {
    if (!provider) throw new Error("Provider is not available");
    try {
      const contract = getPaymentContract(provider);
      const subscribed = await contract.isSubscribed(userAddress);
      setIsSubscribed(subscribed);
    } catch (err) {
      setError(err);
    }
  };

  return { isSubscribed, checkSubscription, error };
};

/**
 * Hook to fetch subscription history.
 * Note: For large histories consider adding pagination.
 * @returns {Object} - { getSubscriptionHistory, loading, error }
 */
export const useSubscriptionHistory = () => {
  const { provider } = useWeb3();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSubscriptionHistory = async () => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const contract = getPaymentContract(provider);
      const subs = await contract.getSubscriptionHistory();
      setHistory(subs);
      setLoading(false);
      return subs;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { history, getSubscriptionHistory, loading, error };
};

/**
 * Hook to get NFT details.
 * @returns {Object} - { getNFTDetails, loading, error }
 */
export const useNFTDetails = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNFTDetails = async (tokenId) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const contract = getPaymentContract(provider);
      const details = await contract.getNFTDetails(tokenId);
      setLoading(false);
      return details;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { getNFTDetails, loading, error };
};

/**
 * Hook for artist to approve the marketplace.
 * @returns {Object} - { approveMarketplace, loading, error }
 */
export const useApproveMarketplace = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const approveMarketplace = async () => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.approveMarketplace();
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { approveMarketplace, loading, error };
};

/**
 * Hook for admin to set the subscription fee.
 * @returns {Object} - { setSubscriptionFee, loading, error }
 */
export const useSetSubscriptionFee = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setSubscriptionFee = async (fee) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.setSubscriptionFee(fee);
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { setSubscriptionFee, loading, error };
};

/**
 * Hook for admin to set the service fee.
 * @returns {Object} - { setServiceFee, loading, error }
 */
export const useSetServiceFee = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setServiceFee = async (fee) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.setServiceFee(fee);
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { setServiceFee, loading, error };
};

/**
 * Hook for admin to verify an artist.
 * @returns {Object} - { verifyArtist, loading, error }
 */
export const useVerifyArtist = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyArtist = async (artistAddress) => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.verifyArtist(artistAddress);
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { verifyArtist, loading, error };
};

/**
 * Hook for admin to withdraw earnings.
 * @returns {Object} - { withdrawEarnings, loading, error }
 */
export const useWithdrawEarnings = () => {
  const { provider } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const withdrawEarnings = async () => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const contract = getPaymentContract(signer);
      const tx = await contract.withdrawEarnings();
      await tx.wait();
      setLoading(false);
      return tx;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { withdrawEarnings, loading, error };
};

/**
 * Hook to check the platform's balance.
 * @returns {Object} - { checkPlatformBalance, loading, error }
 */
export const useCheckPlatformBalance = () => {
  const { provider } = useWeb3();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkPlatformBalance = async () => {
    if (!provider) throw new Error("Provider is not available");
    try {
      setLoading(true);
      const contract = getPaymentContract(provider);
      const balance = await contract.checkPlatformBalance();
      setBalance(balance);
      setLoading(false);
      return balance;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { balance, checkPlatformBalance, loading, error };
};
