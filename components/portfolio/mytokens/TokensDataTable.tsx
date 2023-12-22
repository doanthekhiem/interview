import { formatPrice, formatQuantity, formatValue } from "@/helpers/constants/constants";
import { TOKENS_LIST } from "@/helpers/mock/api";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const TokensDataTable = () => {
  const rows = TOKENS_LIST;
  const [isShowAll, setIsShowAll] = useState<boolean>(false);
  return (
    <div className="flex w-full flex-col justify-center items-center gap-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tokens</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="center">Risk</TableCell>
              <TableCell align="right">APY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0, isShowAll ? rows.length : 10).map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <div className="flex gap-2 items-center">
                    <Image
                      alt="logo"
                      height={24}
                      width={24}
                      src={
                        row.logo_url ||
                        "https://static.debank.com/image/bsc_token/logo_url/0xf700d4c708c2be1463e355f337603183d20e0808/2cf379395d1cd25f36a3b43367ff5fe2.png"
                      }
                    />{" "}
                    {row.symbol}
                  </div>
                </TableCell>
                <TableCell align="right">{formatPrice((row?.price as number) || 0)}</TableCell>
                <TableCell align="right">{formatQuantity(row?.balance as number, row?.decimals as number)}</TableCell>
                <TableCell align="right">
                  {formatValue(row?.price as number, row?.balance as number, row?.decimals as number)}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    color={row?.is_verified ? "success" : "warning"}
                    label={row?.is_verified ? "Height" : "Low"}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    classes={{
                      root: "text-success",
                    }}
                  >
                    {row.decimals}%
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!isShowAll ? (
        <Typography variant="body1">
          Tokens with small balances are not displayed.{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => {
              setIsShowAll(!isShowAll);
            }}
          >
            Show all
          </span>
          .
        </Typography>
      ) : (
        <Typography variant="body1">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsShowAll(!isShowAll);
            }}
          >
            Hide tokens with small balances.
          </span>
          .
        </Typography>
      )}
    </div>
  );
};
