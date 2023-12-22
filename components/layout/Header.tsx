"use client";
import Image from "next/image";
import logo from "@/assests/images/logo-customer.png";
import { MENU } from "@/helpers/constants/constants";
import Link from "next/link";
import Wallet from "../wallet/Wallet";

const Header = () => {
  return (
    <div className="w-full h-[88px] flex items-center shadow-md bg-main">
      <div className="m-auto w-full px-4 max-w-7xl flex items-center gap-[72px]">
        <Link href={"/"}>
          <Image src={logo} alt="logo" height={50} width={135} className="h-auto" />
        </Link>
        <div className="flex-1 hidden  lg:flex justify-between text-gray-500 bg-primary rounded-xl h-[45px] px-3 items-center">
          {MENU?.map((menu) => (
            <Link key={menu?.id} className="font-bold text-white hover:text-gray-900" href={menu?.url}>
              {menu?.name}
            </Link>
          ))}
          <Wallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
