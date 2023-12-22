import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { OutlinedInput, TextField } from "@mui/material";
import { forwardRef } from "react";

interface DatePickerComponentProps {
  value: Dayjs | null;
  onChange?: (newValue: Dayjs | null) => void; // Cập nhật type của hàm onChange
  label?: string;
  inputFormat?: string;
  size?: "small" | "medium";
  maxDate?: any;
}

const DatePickerComponent = forwardRef<any, DatePickerComponentProps>(
  ({ value, onChange, label, inputFormat = "DD/MM/YYYY", maxDate, ...other }, ref) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { size: "small", ref: ref } }}
          label={label}
          sx={{
            maxWidth: "150px",
            width: "100%",
          }}
          maxDate={maxDate}
          format="DD/MM/YYYY"
          value={value}
          onChange={onChange}
          {...other}
        />
      </LocalizationProvider>
    );
  }
);
DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
