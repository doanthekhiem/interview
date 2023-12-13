import Image from "next/image";
import logo from "@/assests/images/logo.png";
import { MENU } from "@/helpers/constants/constants";
import Link from "next/link";
import Wallet from "../wallet/Wallet";

const Header = () => {
  return (
    <div className="w-full h-[146px]">
      <div className="m-auto max-w-7xl flex items-center gap-[72px]">
        <Image src={logo} alt="logo" height={117} width={226} />
        <div className="flex-1 flex justify-between text-gray-500 bg-primary rounded-xl h-[45px] px-3 items-center">
          {MENU?.map((menu) => (
            <Link key={menu?.id} className="font-bold hover:text-gray-900" href={menu?.url} target="_blank">
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
