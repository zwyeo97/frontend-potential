import { useState } from "react";
declare const window: any;
export const useWallet = () => {
    const { ethereum } = window;
    const [currentAccount, setCurrentAccount] = useState<string | undefined>(ethereum.selectedAddress);

    // @ts-ignore
    ethereum.on("accountsChanged", ([newAccount]) => {
        console.log("accountsChanged: ", newAccount);
        setCurrentAccount(newAccount);
    })

    return { currentAccount, setCurrentAccount};
}