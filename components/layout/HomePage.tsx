import logo from "@/assests/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="m-auto max-w-7xl">
      <div className="pt-[100px] px-9 flex justify-between items-start">
        <div>
          <div className="font-normal text-white text-68-80">Explore and Earn</div>
          <div className="flex gap-8 items-center">
            <div className="font-normal text-white text-68-80">on</div>
            <div>
              <Image src={logo} alt="logo" height={83} width={135} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-[225px] justify-center h-[121px] rounded-[20px] bg-white">
          <div>
            <Image src={logo} alt="logo" height={54} width={104} />
          </div>
          <div className="text-[#8795AF] text-12-18">test Front end interview 1</div>
        </div>
      </div>
      <div className="px-9 pt-8 grid grid-cols-2 gap-5 max-w-[423px]">
        <div className="col-span-2 flex items-center rounded-full bg-[#F2F5FA] h-10 px-[10px]">
          <input className="border-none bg-[#F2F5FA] focus:border-none active:border-none focus:outline-none ml-3" />
          <div className="rounded-full bg-[#F5B4BB] h-[30px] text-[#17344F] text-16-22 w-[118px] flex items-center justify-center">
            Sign up
          </div>
        </div>
        <div className="rounded-full col-span-1 bg-[#7BB8F1] h-10 text-white text-18-32 font-bold flex items-center justify-center">
          Log in
        </div>
        <Link href={"/launch-app"} target="_blank">
          <div className="rounded-full col-span-1 bg-white h-10 text-[#17344F] text-18-32 font-bold flex items-center justify-center">
            Launch App
          </div>
        </Link>
      </div>
      <div
        className="px-4 rounded-[20px] flex items-center justify-around w-full border border-white h-[190px] mt-[85px]"
        style={{
          background: "rgba(255, 255, 255, 0.50)",
        }}
      >
        <div className="flex flex-col gap-0 items-center">
          <div className="text-[#17344F] text-48-64 ">$1.80B</div>
          <div className="text-[#596F78] text-16-24">30 Day Volume</div>
        </div>
        <div className="flex flex-col gap-0 items-center">
          <div className="text-[#17344F] text-48-64 ">$0.84B</div>
          <div className="text-[#596F78] text-16-24">Managed on testX.fi</div>
        </div>
        <div className="flex flex-col gap-0 items-center">
          <div className="text-[#17344F] text-48-64 ">$21.43M</div>
          <div className="text-[#596F78] text-16-24">Total Collateral Automated</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
