import React from "react";

import { Divider, Grid } from "@material-ui/core";
import { CardContainer } from "../pods/card/CardHome.container";
import { TransactionContainer } from "../pods/transaction/TransactionHome.container";

import "../styles/Dashboard.style.css";
import { AnalyticContainer } from "../pods/analytic/AnalyticHome.container";
import { DoughtnutContainer } from "../pods/grafic-doughtnut/doughtnut.container";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={7}>
          <CardContainer />
          <Divider />
          <TransactionContainer />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <AnalyticContainer />
          <Divider />
          <DoughtnutContainer />
        </Grid>
      </Grid>
    </div>
  );
};
