/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoAES from "crypto-js/aes";

export const encrypt = (data: any) => {
  if (data && typeof data === "object") {
    const jsonData = JSON.stringify(data);
    const encrypt = CryptoAES.encrypt(jsonData, "testProbation");
    return encrypt.toString();
  } else {
    return "Data not valid";
  }
};
