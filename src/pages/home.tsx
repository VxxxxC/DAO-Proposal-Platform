import { useState } from "react";
import { ActionButtonList } from "@components/ActionButtonList";
import { SmartContractActionButtonList } from "@components/SmartContractActionButtonList";
import { InfoList } from "@components/InfoList";

export const Home = () => {
  const [transactionHash, setTransactionHash] = useState<
    `0x${string}` | undefined
  >(undefined);
  const [signedMsg, setSignedMsg] = useState("");
  const [balance, setBalance] = useState("");

  const receiveHash = (hash: `0x${string}`) => {
    setTransactionHash(hash); // Update the state with the transaction hash
  };

  const receiveSignedMsg = (signedMsg: string) => {
    setSignedMsg(signedMsg); // Update the state with the transaction hash
  };

  const receivebalance = (balance: string) => {
    setBalance(balance);
  };

  return (
    <>
      <h1>HOME PAGE</h1>

      <appkit-button />
      <ActionButtonList
        sendHash={receiveHash}
        sendSignMsg={receiveSignedMsg}
        sendBalance={receivebalance}
      />
      <SmartContractActionButtonList />
      <InfoList
        hash={transactionHash}
        signedMsg={signedMsg}
        balance={balance}
      />
    </>
  );
};
