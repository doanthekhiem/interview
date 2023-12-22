import { TOGGLE_DATE, formatPrice, formatQuantity, formatValue } from "@/helpers/constants/constants";
import { Download } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Chip,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import DatePickerComponent from "../../common/DatePickerComponent";
import { TOKENS_LIST } from "@/helpers/mock/api";
import Image from "next/image";

export const TokensDataTable = () => {
  const rows = TOKENS_LIST;
  return (
    <div className="flex flex-col gap-4 w-full">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={200}>Collateral</TableCell>
              <TableCell width={200} align="center">
                Strategy
              </TableCell>
              <TableCell width={200} align="center">
                Protocol
              </TableCell>
              <TableCell width={200} align="right">
                Quantity
              </TableCell>
              <TableCell width={200} align="right">
                Value
              </TableCell>
              <TableCell align="right">Interest Earn / Paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              if (index < 4)
                return (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <div className="flex gap-2 items-center">
                        <Image alt="logo" height={24} width={24} src={row.logo_url || "/a"} /> {row.symbol}
                      </div>
                    </TableCell>
                    <TableCell align="center">Lending</TableCell>
                    <TableCell align="center">Amnis</TableCell>
                    <TableCell align="right">
                      {formatQuantity(row?.balance as number, row?.decimals as number)}
                    </TableCell>
                    <TableCell align="right">
                      {formatValue(row?.price as number, row?.balance as number, row?.decimals as number)}
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
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={200}>Position</TableCell>
              <TableCell width={200} align="center">
                Strategy
              </TableCell>
              <TableCell width={200} align="center">
                Protocol
              </TableCell>
              <TableCell width={200} align="right">
                Total Value
              </TableCell>
              <TableCell width={200} align="right">
                Fees APY
              </TableCell>
              <TableCell align="right">PnL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              if (index < 4)
                return (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <div className="flex gap-2 items-center">
                        <Image alt="logo" height={24} width={24} src={row.logo_url || "/a"} /> {row.symbol}
                      </div>
                    </TableCell>
                    <TableCell align="center">Liquidity</TableCell>
                    <TableCell align="center">Amnis</TableCell>
                    <TableCell align="right">
                      {formatQuantity(row?.balance as number, row?.decimals as number)}
                    </TableCell>
                    <TableCell align="right">
                      {formatValue(row?.price as number, row?.balance as number, row?.decimals as number)}
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
                );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
