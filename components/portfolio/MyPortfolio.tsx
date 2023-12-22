import logoCustom from "@/assests/images/logo-customer.png";
import logo from "@/assests/images/logo.png";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";
import { PortfolioFilter } from "./PortfolioFilter";
const MyPortfolio = () => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <Typography variant="h4" color={"primary"} fontWeight={700}>
            Dashboard
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            Track all your positions in one place
          </Typography>
        </div>
      </div>
      <div
        className="px-4 rounded-xl flex items-center justify-around w-full border border-primary h-[140px]"
        style={{
          background: "rgba(255, 255, 255, 0.50)",
        }}
      >
        <div className="flex flex-col gap-0 items-start">
          <Typography variant="body1" fontWeight={500}>
            Net value
          </Typography>
          <Typography variant="h4" color={"primary"} fontWeight={500}>
            $5.800
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            0 APT
          </Typography>
        </div>
        <div className="flex flex-col gap-0 items-start">
          <Typography variant="body1" fontWeight={500}>
            Fees & Interest
          </Typography>
          <Typography variant="h4" color={"primary"} fontWeight={500}>
            $1.800
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            0 APT
          </Typography>
        </div>
        <div className="flex flex-col gap-0 items-start">
          <Typography variant="body1" fontWeight={500}>
            Positions
          </Typography>
          <Typography variant="h4" color={"primary"} fontWeight={500}>
            10
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            &nbsp;
          </Typography>
        </div>
      </div>
      <PortfolioFilter />
    </div>
  );
};

export default MyPortfolio;
