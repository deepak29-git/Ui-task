import "../Statistic/Statistic.css";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";

import { useState } from "react";
import { Chart } from "../Chart/Chart";
export const Statistic = () => {
  const [value, setValue] = useState([null, null]);

  const inputStyle = {
    "& .MuiInputBase-input": {
      width: "5.5rem",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      border: "1px solid #9ca3af",
    },
  };

  const dateRangePickerStyle = {
    "& .css-1tape97": {
      backgroundColor: "#0f172a",
      color: "white",
    },
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiDateRangePickerDay-root": {
      border: "1px solid #9ca3af",
    },
    "& .MuiButtonBase-root": {
      color: "#9ca3af",
    },
 
  };


  return (
    <div className="statistic-container">
      <p className="white-text">Statistic</p>
      <LocalizationProvider   dateAdapter={AdapterDateFns}>
        <div className="daterange-picker-parent">
        <DateRangePicker
          calendars={1}
          PopperProps={{ sx: dateRangePickerStyle }}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
              <>
              <Box sx={{ mx: 2, color: "#9ca3af" }}> From </Box>
              <TextField sx={inputStyle} {...startProps} />
              <Box sx={{ mx: 2, color: "#9ca3af" }}> to </Box>
              <TextField sx={inputStyle} {...endProps} />
              </>
              )}
              />
              </div>
      </LocalizationProvider>
      <Chart/>
    </div>
  );
};
