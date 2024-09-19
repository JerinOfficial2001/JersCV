import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Menus {
  value: string;
  label: string;
}
type Props = {
  menus: Menus[];
  label: string;
  onChange: any;
  name: string;
  value: string;
};

export default function SelectInput({
  menus,
  label,
  onChange,
  name,
  value,
}: Props) {
  return (
    <Select
      onValueChange={(value) => {
        onChange(value, name);
      }}
      value={value}
      name={name}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {menus.map((elem: Menus, index: number) => {
          return (
            <SelectItem key={index} value={elem?.value}>
              {elem?.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
