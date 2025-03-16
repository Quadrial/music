import { useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/provider";
import { getPaymentContract } from "../constants/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const useOnlyOwner = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (!address || !isConnected) return;

    const checkOwner = async () => {
      try {
        const contract = getPaymentContract(readOnlyProvider);
        const ownerAddress = await contract.owner();
        // Compare addresses in lowercase for consistency
        setIsOwner(address.toLowerCase() === ownerAddress.toLowerCase());
      } catch (err) {
        console.error("Error fetching owner: ", err);
      }
    };

    checkOwner();
  }, [address, isConnected]);

  return isOwner;
};

export default useOnlyOwner;
