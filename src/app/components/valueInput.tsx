import React, { FC } from "react";
import TextField from "@mui/material/TextField";
interface valueInputProps {
  title: string;
  value: number;
  measureUnit: string;
}
export const ValueInput: FC<valueInputProps> = ({
  title,
  value,
  measureUnit,
}) => {
  return (
    <div>
      <TextField
        id="filled-number"
        label={title}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        color="success"
        defaultValue={value}
        variant="filled"
        size="small"
      />
    </div>
  );
};
