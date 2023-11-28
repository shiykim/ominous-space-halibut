import React from "react";

import Tag from "./Tag";

const HEADER_CONFIG = [
  { key: "member", label: "Member" },
  { key: "affiliation", label: "Affiliation" },
  { key: "primaryState", label: "State" },
  { key: "priority", label: "Priority" }
];

const InfluencersTable = ({ data }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          {HEADER_CONFIG.map(({ label }) => (
            <th style={{ textAlign: "left" }}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((datum) => {
          return (
            <tr>
              {HEADER_CONFIG.map(({ key }) => {
                const value = datum[key];
                return <td>{value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InfluencersTable;
