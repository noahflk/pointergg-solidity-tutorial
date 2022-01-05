import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x7025D03e081849a114765eb147FF639919a617f6";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
