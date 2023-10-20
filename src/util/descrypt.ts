import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";

export const decrypt = (originalData: string) => {
  if (typeof originalData == "string") {
    const decrypted = JSON.parse(
      JSON.parse(
        CryptoAES.decrypt(originalData, "testProbation").toString(CryptoENC)
      )
    );
    return decrypted;
  } else {
    return "data tidak valid";
  }
};