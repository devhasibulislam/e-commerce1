import React from "react";
import Badge from "../Badge";

const AccountLabel = ({ title, info }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <Badge>{title}</Badge>
      <h2 className={`font-medium ${!info?.includes(".com") && "capitalize"}`}>{info}</h2>
    </div>
  );
};

export default AccountLabel;
