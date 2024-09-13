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
}
type Props = { menus: Menus[]; label: string };

export default function SelectInput({ menus, label }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {menus.map((elem: Menus, index: number) => {
          return (
            <SelectItem key={index} value={elem?.value}>
              {elem?.value}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
