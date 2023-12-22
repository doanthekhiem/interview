import { TOGGLE_DATE } from "@/helpers/constants/constants";
import { Download } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, ListItemIcon, Menu, MenuItem, ToggleButton, ToggleButtonGroup } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import DatePickerComponent from "../../common/DatePickerComponent";

export const TokensFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-end gap-2 flex-wrap items-center">
      <ToggleButtonGroup
        sx={{
          height: "40px",
        }}
        size="small"
        color="primary"
        value={"overview"}
        exclusive
        aria-label="Platform"
      >
        {TOGGLE_DATE?.map((dateType) => (
          <ToggleButton key={dateType?.id} className="text-12-18" value={dateType?.id}>
            {dateType?.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div className="flex gap-2 items-center">
        <DatePickerComponent value={dayjs()} />
        <ArrowForwardIcon color="disabled" />
        <DatePickerComponent value={dayjs()} />
      </div>
      <IconButton
        color="default"
        classes={{
          root: "bg-slate-100 rounded-lg",
        }}
        onClick={handleClick}
      >
        <MoreHorizIcon className="rotate-90" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={0}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Download fontSize="small" />
          </ListItemIcon>
          Export CSV
        </MenuItem>
      </Menu>
    </div>
  );
};
