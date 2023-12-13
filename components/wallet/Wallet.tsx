import arrow from "@/assests/icons/arrow.svg";
import Image from "next/image";

const Wallet = () => {
  return (
    <div
      className="flex gap-1 bg-white rounded-full w-[213px] h-8 items-center justify-center"
      style={{
        boxShadow: "0px 0px 8px 0px #0000001A",
      }}
    >
      <div className="text-neutral-9 font-bold text-16-22">Connect Wallet</div>
      <div className="text-16-22">→</div>
    </div>
  );
};

export default Wallet;
