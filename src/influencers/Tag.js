// import React from "react";

const Tag = ({ priority }) => {
  console.log("type", typeof priority);

  return <td className={priority}>{priority}</td>;
};

export default Tag;
