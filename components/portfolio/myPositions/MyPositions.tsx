import { Chip, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { TokensFilter } from "./TokensFilter";
import { TokensDataTable } from "./TokensDataTable";

export const MyPositions = () => {
  return (
    <Paper
      sx={{ p: 2 }}
      elevation={0}
      classes={{
        root: "flex flex-col gap-2",
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-0 items-start">
          <Typography variant="h5" fontWeight={700}>
            Positions
          </Typography>
          <Typography variant="body1">
            Change your positions{" "}
            <Link href={"/"} className="underline">
              here
            </Link>
            .
          </Typography>
        </div>
        <Chip
          classes={{
            root: "text-16-20 font-bold ",
          }}
          label={"$20,000"}
          color="default"
          variant="filled"
          size="medium"
        />
      </div>
      <TokensFilter />
      <TokensDataTable />
    </Paper>
  );
};
