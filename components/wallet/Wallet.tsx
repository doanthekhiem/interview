"use client";
import { shortenString } from "@/helpers/constants/constants";
import Image from "next/image";
import logo from "@/assests/icons/petra-wallet.svg";

import { useEffect, useState } from "react";

const Wallet = () => {
  const [userAcount, setUserAcount] = useState<any>(null);
  const [wallet, setWallet] = useState<any>(null);
  const connectWallet = async () => {
    try {
      await wallet.connect();
      getWallet();
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
  };

  const getWallet = async () => {
    try {
      const account = await wallet.account();
      setUserAcount(account);
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
  };

  const disconnectWallet = async () => {
    await wallet.disconnect();
    setUserAcount(null);
  };

  useEffect(() => {
    const getAptosWallet = () => {
      if (typeof window !== "undefined" && "aptos" in window) {
        return window.aptos;
      } else {
        // window.open("https://petra.app/", `_blank`);
      }
    };

    setWallet(getAptosWallet());
  }, []);

  return (
    <div
      className="flex gap-1 bg-white rounded-full w-[213px] cursor-pointer h-8 items-center justify-start px-[14px]"
      style={{
        boxShadow: "0px 0px 8px 0px #0000001A",
      }}
    >
      {userAcount ? (
        <div className="text-neutral-9 font-bold text-16-22 flex items-center gap-1" onClick={disconnectWallet}>
          <Image src={logo} alt="logo" height={27} width={27} />
          {shortenString(userAcount?.address)}
        </div>
      ) : (
        <div className="text-neutral-9 font-bold text-16-22 flex items-center gap-1" onClick={connectWallet}>
          Connect Wallet <div className="text-16-22">→</div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
