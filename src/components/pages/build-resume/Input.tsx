import React from "react";
import { TextField, FormLabel } from "@mui/material";
type Props = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: () => void | undefined;
  placeholder?: string;
  height?: string;
  width?: string;
  multiline?: boolean;
};

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  height,
  width,
  multiline,
}: Props) {
  return (
    <div className="w-full">
      <FormLabel
        sx={{
          color: "black",
          textTransform: "uppercase",
          fontSize: "11px",
        }}
      >
        {label}
      </FormLabel>
      <TextField
        size="small"
        variant="outlined"
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        multiline={multiline}
        rows={5}
        // InputLabelProps={{ shrink: true }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid silver",
          },
          "& .MuiFormLabel-root": {
            color: "gray",
            textTransform: "capitalize",
          },
          "&:hover": {
            "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
              border: "2px solid silver",
              boxShadow: "2px 2px 4px 0 rgba(0,0,0,.25)",
              transition: "all .3s",
            },
            "& .MuiFormLabel-root": {
              color: "cornflowerblue",
            },
          },
          "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "3px solid #2f5cf8",
              transition: "all .3s",
            },
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "cornflowerblue",
          },
          "& input": {
            color: "black",
            height: height ? height : "auto",
            fontWeight: "bold",
          },
          "& .MuiInputBase-root": {
            color: "black",
          },
          width: width ? width : "100%",
        }}
        fullWidth
      />
    </div>
  );
}
