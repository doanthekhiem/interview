import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const PortfolioFilter = () => {
  return (
    <div className="border-t-primary flex justify-between border-t border-b border-b-primary py-6">
      <ToggleButtonGroup
        size="small"
        color="standard"
        value={"overview"}
        exclusive
        // onChange={(_, data) => field.onChange(data)}
        aria-label="Platform"
      >
        <ToggleButton className="text-12-18" value={"overview"}>
          Positions Overview
        </ToggleButton>
        <ToggleButton className="text-12-18" value={""}>
          Transaction History
        </ToggleButton>
      </ToggleButtonGroup>
      <div>
        <ToggleButtonGroup
          size="small"
          color="standard"
          value={"USDT"}
          exclusive
          // onChange={(_, data) => field.onChange(data)}
          aria-label="Platform"
        >
          <ToggleButton className="text-12-18" value={"USDT"}>
            USDT
          </ToggleButton>
          <ToggleButton className="text-12-18" value={"APT"}>
            APT
          </ToggleButton>
        </ToggleButtonGroup>
        <Button endIcon={<MoreHorizIcon />}></Button>
      </div>
    </div>
  );
};
