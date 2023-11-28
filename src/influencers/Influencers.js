import React, { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import "./styles.css";

import sortBy from "../sortBy";

import InfluencersTable from "./InfluencersTable";

const Container = styled.div({
  border: "1px solid black",
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: "#E8EBEC"
});

const Influencers = () => {
  const tableData = data;

  return (
    <Container>
      <h1>Influencers Table</h1>
      <InfluencersTable data={tableData} />
    </Container>
  );
};

export default Influencers;
