
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { buyNFT, getMaxSupply, getTotalSupply } from "../network/ethereum";
import Web3 from "web3";

interface StateType {
    walletAddr: { num: string }
};

const MintPage = () => {
    const location = useLocation();
    const { walletAddr } = location.state as StateType;
    const [tokenLeft, setTokenLeft] = useState<number | null>(null);
    const [error, setError] = useState(false);
    const [mintSuccess, setMintSuccess] = useState(false);
    const [minting, setMinting] = useState(false);
    const rpcURL: string | undefined = process.env.REACT_APP_API_URL;
    const web3 = new Web3(rpcURL!!);

    const onBuyClick = async (e: React.MouseEvent<HTMLElement>): Promise<string | null> => {
        setError(false);
        if (!walletAddr) {
            alert("You haven't connect your wallet yet!")
        } else {
            try {
                return await buyNFT();

            } catch (err) {
                setError(true);
            }
        }
        return null;
    }

    const checkIfSuccess = async (receipt: string | null): Promise<boolean> => {
        if (receipt == null) {
            return false;
        }
        let result = await web3.eth.getTransactionReceipt(receipt);
        if (result == null) {
            await new Promise((resolve) => {
                setTimeout(resolve, 3000);
            });
            return false;
        }
        console.log("Result : " + result.status);
        return true


    }

    const buyThenUpdate = (e: React.MouseEvent<HTMLElement>) => {
        onBuyClick(e).then(async (receiptHash) => {
            setMinting(true);
            let looping = true
            while (looping) {
                await new Promise((resolve) => {
                    setTimeout(resolve, 3000);
                }).then(async () => {
                    let tmp__ = await checkIfSuccess(receiptHash)
                    if (tmp__ === true) {
                        looping = false;
                    }
                }
                )

            }


            setMinting(false);
            setMintSuccess(true);


        })

    }


    useEffect(() => {

        const fetchSupply = async () => {
            const totalSupply = await getTotalSupply();
            const maxSupply = await getMaxSupply();
            setTokenLeft(maxSupply - totalSupply);
        }
        fetchSupply();
    }, [mintSuccess]);



    return (
        <div className="w-screen h-screen sm:w-full sm:h-full uppercase flex flex-col items-stretch pt-broPad2 " >
            <div className="flex flex-row w-full justify-center align-center items-center pt-28">
                {tokenLeft && tokenLeft === 0 &&
                    <h1>Sold out!</h1>
                }
                {tokenLeft && tokenLeft > 0 &&
                    <h1>{tokenLeft} token{tokenLeft > 1 && 's'} left!</h1>
                }
            </div>
            <div className="flex flex-row w-full justify-center align-center items-center pt-28">
                <button
                    className="buy-button"
                    onClick={buyThenUpdate}>
                    Buy now!
                </button></div>
            <div>
                {error && <div>Transaction failed </div>}
            </div>
            <div>
                {minting && <div>Minting... please wait for the transaction to be complete</div>}
                {mintSuccess && <div>mint success lol</div>}
            </div>

        </div>
    )


}

export default MintPage;