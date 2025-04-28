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
      <div className="w-full h-full px-5 flex flex-col items-center">
      <h1>HOME PAGE</h1>

      <div className="self-end">
      <appkit-button />
      </div>
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
    </div>
    </>
  );
};
