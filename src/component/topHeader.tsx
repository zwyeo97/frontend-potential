import {Link, useNavigate}from "react-router-dom";
import laxBro from "../images/laxbro.svg"
import { useWallet } from "../hooks/useWallet";


import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
declare const window: any;
type Props = {
  currentAccount?: string,
  setCurrentAccount: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CWallet: React.FC<Props> = ({ currentAccount, setCurrentAccount }) => {
  const { ethereum } = window;

  const connectWallet = async () => {
      if (!ethereum) {
          console.log("No wallet plugin is available!");
          return;
      }

      try {
          const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
          setCurrentAccount(account);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <div>
        {!currentAccount &&
        <button className="btn-rounded connect-button" onClick={() => connectWallet()}>
            Connect to wallet
        </button>
        }
        {currentAccount &&
        <p>
            Address: {currentAccount.slice(0, 5)}...{currentAccount.slice(currentAccount.length - 5)}
        </p>
        }
    </div>

  )
}






const TopHeader = () => {
  const [currentID, setCurrentID]  = useState(useLocation().pathname)
  const { currentAccount, setCurrentAccount } = useWallet();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();


  const changeColor = (id_ : string) => {
    if (currentID !== id_){
      document.getElementById(currentID)?.classList.remove("bg-black","text-white");
      document.getElementById(currentID)?.classList.add("bg-text-black","bg-gray-250");
    }
    document.getElementById(id_)?.classList.add("bg-black","text-white");
    document.getElementById(id_)?.classList.remove("bg-text-black","bg-gray-250");
    setCurrentID(id_);
  }

  const showDrop = () => {
    document.getElementById("dropdownitem")?.classList.remove("hidden");
    document.getElementById("dropdownitem")?.classList.add("block");
  }

  const hideDrop = () => {
    document.getElementById("dropdownitem")?.classList.remove("block");
    document.getElementById("dropdownitem")?.classList.add("hidden");
  }

  const blurAll = () => {
    console.log("Test2");
    if(showMenu){
      document.getElementById("head_main")?.classList.remove("bg-gray-200");

    }
    else{
      document.getElementById("head_main")?.classList.add("bg-gray-200");
    }
    setShowMenu(!showMenu);
    
  }



  

  useEffect(() => {
    changeColor(currentID);
  
    });



  return (
        <div id="head_main" className="fixed w-full h-full md:h-auto top-0 md:px-8 bg-red-200 px-2 pb-2 md:pt-8 pt-5 z-50 backdrop-blur-lg" >
            <div className="flex h-auto w-full items-start justify-start md:items-center md:justify-center mx-auto bg-opacity-70  md:border-opacity-0">
                {/* left side*/}
                <div className="flex-grow">
                    <div className="flex">
                    <Link className="
                        w-min-content" onClick={()=>changeColor("/")} to="/">
                          <img className="h-7 rounded " alt="" src={laxBro} >
                          </img>
                          </Link>
                    </div>
                </div>
                {/* right side */}
                <div className="md:hidden z-50 ">
                  <button className="transition-transform" onClick={() => {blurAll()}}>
                    <div className="inner transition ease-in-out duration-500">
                      {showMenu ? <img alt="" src={require("../images/close.png")}></img>  :<img 
                      alt="" src={require("../images/menu.png")}></img>}

                    </div>
                  </button>
                  
                </div>

                <div className="items-center hidden md:flex">
                    <ul className="flex space-x-2">
                        <li className="px-1">
                          <Link id="/" onClick={() => changeColor("/")} className="
                              items-center relative h-7 items-center tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base	font-500 padding-huge 
                              items-center px-4 active:text-white active:bg-black hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250" to="/">HOME</Link>
                            
                        </li>
                        <li className="px-1" >
                            <Link id="/brozone" onClick={() => changeColor("/brozone")} className={`
                              items-center relative h-7 items-center  tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                              items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`} to="/brozone">
                                Bro-Zone</Link>
                        </li>
                        <li className="px-1">
                            <Link id="/lockerroom" onClick={() => changeColor("/lockerroom")}  className={`
                              items-center relative h-7 items-center tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base font-500 padding-huge 
                              items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`} to="/lockerroom">
                                Locker Room</Link>
                        </li>
                        <li className="px-1">
                            <Link id="/roadmap" onClick={() => changeColor("/roadmap")}  className={`
                              items-center relative h-7 items-center tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                              items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/roadmap">
                                Roadmap</Link>
                        </li>
                        
                        <li className="px-1"> 
                          {/* <Link id="/stadium" onClick={() => changeColor("/stadium")}  className={`
                                items-center relative h-7 items-center  tracking-wider 
                                pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                                items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/stadium">
                                  Stadium</Link> */}
                                  <div className="relative" onMouseEnter={()=>showDrop()} onMouseLeave={()=>hideDrop()}>
                                    <div className={`
                                  items-center  h-7 items-center  tracking-wider 
                                  pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                                  items-center px-4 hover:bg-black hover:text-white rounded font-superstar text-black bg-gray-250 `} >  
                                    The Fraternity 
                                    </div>
                                    <div className="absolute hidden z-50 w-full" id="dropdownitem">
                                    <Link id="/stadium" onClick={() => changeColor("/stadium")}  className={`
                                    items-center relative h-7 items-center  tracking-wider 
                                     first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                                    items-center hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/stadium">
                                      Stadium</Link>
                                    <Link id="/shop" onClick={() => changeColor("/shop")}   className={`
                                    items-center relative h-7 items-center  tracking-wider 
                                    first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                                    items-center hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/shop">
                                      Shop</Link> 
                                    </div>
                                  </div>
                        </li>
                        <li className="px-1">
                        {/* <Link id="/shop" onClick={() => changeColor("/shop")}   className={`
                              items-center relative h-7 items-center  tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                              items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/shop">
                                Shop</Link> */}
                        </li>
                        {/* <li className="px-1">
                        <a id="/mint" onClick={() => {changeColor("/mint"); navigate('/mint', { state: { walletAddr: currentAccount } })}} href="/mint"  className={`
                              items-center relative h-7 items-center  tracking-wider 
                              pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                              items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`} >
                                Mint</a> 
                        </li> */}
                        <li >
                            <a className="
                              bg-opacity-0 
                              text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge bg-white  items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row" rel="noreferrer" target="_blank" href="https://twitter.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40">
                                    <path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 
                                    0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 
                                    9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 
                                    7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 
                                    15.499 0 003.799-3.941z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li >
                            <a className="
                              bg-opacity-0 
                              text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white  items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row" rel="noreferrer" target="_blank" href="https://instagram.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M27.524 1.79c3.334.17 5.899 1.11 7.694 2.992 1.796 1.88 2.822 4.36 2.993 7.694 0 1.314.078 3.651.085 7.089v2.108c-.002 2.768-.014 4.702-.085 5.85-.171 3.335-1.112 5.9-2.993 7.695-1.88 1.796-4.36 2.822-7.694 2.993-1.15.071-3.143.083-5.88.085h-3.317c-2.768-.002-4.702-.014-5.85-.085-3.335-.171-5.9-1.112-7.695-2.993-1.796-1.795-2.822-4.36-2.993-7.694-.065-1.04-.08-2.771-.084-5.118v-4.812c.004-2.347.02-4.078.084-5.118.171-3.334 1.112-5.899 2.993-7.694 1.795-1.796 4.36-2.822 7.694-2.993 1.04-.065 2.771-.08 5.118-.084h4.847c2.361.004 4.043.02 5.083.084Zm-7.61 8.805c-2.65 0-4.873.94-6.668 2.736C11.45 15.212 10.51 17.35 10.51 20c0 2.65.94 4.873 2.736 6.669 1.88 1.795 4.018 2.736 6.668 2.736 2.65 0 4.874-.94 6.67-2.736 1.795-1.881 2.735-4.019 2.735-6.669 0-2.65-.94-4.873-2.736-6.669-1.795-1.88-4.018-2.736-6.669-2.736Zm0 3.25c1.71 0 3.164.598 4.36 1.795A6.076 6.076 0 0 1 26.07 20c0 1.624-.598 3.078-1.795 4.275-1.197 1.197-2.65 1.795-4.36 1.795-1.71 0-3.164-.598-4.36-1.795-1.198-1.112-1.796-2.565-1.796-4.275 0-1.71.598-3.163 1.795-4.36 1.197-1.197 2.65-1.796 4.36-1.796Zm9.833-5.9c-.599 0-1.112.257-1.54.684-.427.427-.683.94-.683 1.539 0 .598.256 1.111.684 1.539.427.427.94.684 1.539.684.598 0 1.111-.257 1.538-.684.428-.428.684-.94.684-1.54 0-.598-.256-1.11-.684-1.538-.427-.427-.94-.684-1.538-.684Z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a className="
                              bg-opacity-0 
                              text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white  items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row" rel="noreferrer"  target="_blank" href="https://discord.gg/jRsRkFwC">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"></path></svg>
                            </a>
                        </li>
                        {/* <li>
                          <CWallet currentAccount={currentAccount} setCurrentAccount={setCurrentAccount}></CWallet>
                        </li> */}

                    </ul>
                </div>

            </div>

            {showMenu ?  
                <div className="flex md:hidden w-full items-start 
                h-full flex flex-col fixed pt-0 
                bg-opacity-70 z-60 overflow-scroll
                
                " >
                  <ul className="text-xl w-full uppercase font-900 font-superstar text-2xl">
                    <li className="px-1 border-b border-black border-opacity-10">
                      <Link id="/" onClick={() => {changeColor("/");blurAll()}} className="
                          py-3 w-full items-center block relative flex text-black" to="/">HOME</Link>
                        
                    </li>
                    <li className="px-1  border-b border-black border-opacity-10" >
                        <Link id="/brozone" onClick={() => {changeColor("/brozone");blurAll()}} className={`
                           py-3 w-full items-center block relative flex text-black`} to="/brozone">
                            Bro-Zone</Link>
                    </li>
                    <li className="px-1 border-b border-black border-opacity-10">
                        <Link id="/lockerroom" onClick={() => {changeColor("/lockerroom");blurAll()}}  className={`
                           py-3 w-full items-center block relative flex text-black`} to="/lockerroom">
                            Locker Room</Link>
                    </li>
                    <li className="px-1 border-b border-black border-opacity-10">
                        <Link id="/roadmap" onClick={() => {changeColor("/roadmap");blurAll()}}  className={`
                          py-3 w-full items-center block relative flex text-black`}to="/roadmap">
                            Roadmap</Link>
                    </li>

                    <li className="px-1 border-b border-black border-opacity-10"> 
                      
                     
                      <Link id="/stadium" onClick={() => {changeColor("/stadium");blurAll()}}  className={`
                      py-3 w-full items-center block relative flex text-black`}to="/stadium">
                        Stadium</Link>
                    </li>
                    <li  className="px-1 border-b border-black border-opacity-10">
                      <Link id="/shop" onClick={() => {changeColor("/shop");blurAll()}}   className={`
                        py-3 w-full items-center block relative flex text-black`}to="/shop">
                        Shop</Link> 
                      
                              
                    </li>
                    <li >
                    {/* <Link id="/shop" onClick={() => changeColor("/shop")}   className={`
                          items-center relative h-7 items-center  tracking-wider 
                          pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                          items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`}to="/shop">
                            Shop</Link> */}
                    </li>
                    {/* <li className="px-1">
                    <a id="/mint" onClick={() => {changeColor("/mint"); navigate('/mint', { state: { walletAddr: currentAccount } })}} href="/mint"  className={`
                          items-center relative h-7 items-center  tracking-wider 
                          pt-0.5 first::pt-0 duration-1000 uppercase text-base	 font-500 padding-huge 
                          items-center px-4 hover:bg-black hover:text-white  rounded flex justify-center flex-row font-superstar text-black bg-gray-250`} >
                            Mint</a> 
                    </li> */}
                    <li className="px-1 py-3 border-b border-black border-opacity-10">
                      
                      <a className="
                          bg-opacity-0 
                          text-black opacity-80 items-center relative h-7 flex flex-row place-content-between
                           tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-base font-500 padding-huge 
                             hover:bg-opacity-70 rounded " rel="noreferrer" target="_blank" href="https://twitter.com">
                            <p>Twitter</p>
                            <svg  xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4 mx-5" viewBox="0 0 40 40">
                                <path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z">
                                </path>
                            </svg>
                        </a>
                      
                        
                    </li>
                    <li className="px-1 py-3 border-b border-black border-opacity-10">
                      <a className="
                        flex flex-row place-content-between
                        bg-opacity-0 
                        text-black opacity-80 items-center relative h-7
                          tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-base font-500 padding-huge 
                          hover:bg-opacity-70 rounded " rel="noreferrer" target="_blank" href="https://instagram.com">
                            <p>Instagram </p>
                          <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-4 w-4 mx-5" viewBox="0 0 40 40"><path d="M27.524 1.79c3.334.17 5.899 1.11 7.694 2.992 1.796 1.88 2.822 4.36 2.993 7.694 0 1.314.078 3.651.085 7.089v2.108c-.002 2.768-.014 4.702-.085 5.85-.171 3.335-1.112 5.9-2.993 7.695-1.88 1.796-4.36 2.822-7.694 2.993-1.15.071-3.143.083-5.88.085h-3.317c-2.768-.002-4.702-.014-5.85-.085-3.335-.171-5.9-1.112-7.695-2.993-1.796-1.795-2.822-4.36-2.993-7.694-.065-1.04-.08-2.771-.084-5.118v-4.812c.004-2.347.02-4.078.084-5.118.171-3.334 1.112-5.899 2.993-7.694 1.795-1.796 4.36-2.822 7.694-2.993 1.04-.065 2.771-.08 5.118-.084h4.847c2.361.004 4.043.02 5.083.084Zm-7.61 8.805c-2.65 0-4.873.94-6.668 2.736C11.45 15.212 10.51 17.35 10.51 20c0 2.65.94 4.873 2.736 6.669 1.88 1.795 4.018 2.736 6.668 2.736 2.65 0 4.874-.94 6.67-2.736 1.795-1.881 2.735-4.019 2.735-6.669 0-2.65-.94-4.873-2.736-6.669-1.795-1.88-4.018-2.736-6.669-2.736Zm0 3.25c1.71 0 3.164.598 4.36 1.795A6.076 6.076 0 0 1 26.07 20c0 1.624-.598 3.078-1.795 4.275-1.197 1.197-2.65 1.795-4.36 1.795-1.71 0-3.164-.598-4.36-1.795-1.198-1.112-1.796-2.565-1.796-4.275 0-1.71.598-3.163 1.795-4.36 1.197-1.197 2.65-1.796 4.36-1.796Zm9.833-5.9c-.599 0-1.112.257-1.54.684-.427.427-.683.94-.683 1.539 0 .598.256 1.111.684 1.539.427.427.94.684 1.539.684.598 0 1.111-.257 1.538-.684.428-.428.684-.94.684-1.54 0-.598-.256-1.11-.684-1.538-.427-.427-.94-.684-1.538-.684Z"></path></svg>
                      </a>
                    </li>
                    <li className="px-1 py-3 border-b border-black border-opacity-10">
                      
                        
                        <a className="
                        flex flex-row place-content-between
                          bg-opacity-0 
                          text-black opacity-80 items-center 
                          relative h-7 tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-base font-500 padding-huge hover:bg-opacity-70 rounded " rel="noreferrer"  target="_blank" href="https://discord.com">
                           <p>
                          Discord
                          </p>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-4 w-4 mx-5" viewBox="0 0 40 40"><path d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"></path></svg>
                        </a>
                     
                        
                    </li>
                    {/* <li>
                      <CWallet currentAccount={currentAccount} setCurrentAccount={setCurrentAccount}></CWallet>
                    </li> */}

                    </ul>
                  </div>
                
                
                : ""}
        </div>
    );


}

export default TopHeader;