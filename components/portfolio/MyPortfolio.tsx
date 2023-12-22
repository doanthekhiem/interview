import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Paper, Typography } from "@mui/material";
import { MyPositions } from "./myPositions/MyPositions";
import { MyTokens } from "./mytokens/MyTokens";
const MyPortfolio = () => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div>
        <div className="grid w-full grid-cols-3 gap-2">
          <Paper
            sx={{
              p: 2,
            }}
            className="col-span-2 flex justify-start sm:justify-around flex-wrap"
          >
            <div className="flex flex-col gap-0  sm:items-start justify-start">
              <Typography variant="body1" fontWeight={700}>
                Net value
              </Typography>
              <div className="flex gap-1">
                <Typography variant="h4" color={"primary"} fontWeight={700}>
                  $20,000
                </Typography>
                <div className="flex">
                  <ArrowDropUpIcon style={{ color: "#28a745" }} />
                  <Typography variant="body2" style={{ color: "#28a745" }} fontWeight={700}>
                    1.1%
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" fontWeight={700}>
                0 APT
              </Typography>
            </div>
            <div className="flex flex-col gap-0  sm:items-start justify-start">
              <Typography variant="body1" fontWeight={700}>
                Fees & Interest
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                $1.800
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                0 APT
              </Typography>
            </div>
            <div></div>
          </Paper>
          <Paper className="flex bg-main flex-col gap-0 items-center justify-center">
            <Typography variant="body1" color={"white"} fontWeight={700}>
              Positions
            </Typography>
            <Typography color={"white"} variant="h2" fontWeight={700}>
              10
            </Typography>
          </Paper>
        </div>
      </div>
      <MyTokens />
      <MyPositions />
    </div>
  );
};

export default MyPortfolio;
