import { ethers } from "ethers";
import Abi from "./paymentabi.json";


export const getPaymentContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi,
        providerOrSigner
    );