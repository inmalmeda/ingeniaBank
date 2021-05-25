import React from "react";

//Importr clsx para trabajar con las clases
import clsx from "clsx";
import { Grid, Paper, Typography } from "@material-ui/core";

//Makestyles -> Estilos con material UI y el tema (theme) por defecto
import { makeStyles } from "@material-ui/core/styles";
import { Transaction } from "../../models/transaction/Transaction.model";

interface Props {
  transactionList : Transaction[]
}

export const TransactionComponent: React.FC<Props> = (props) => {

  const { transactionList } = props

  const useStyles = makeStyles((theme) => ({
    //Paper del componente
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: theme.spacing(2),
    },
    //Altura fija
    fixedHeight: {
      height: 240,
    },
  }));
  //Clases para aplicar a los elementos
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Grid container spacing={3}>
        {transactionList.map((transaction, index) => (          
            <Grid item xs={12} md={4} lg={3} key = {index}>
              <Paper className={fixedHeightPaper}>     
                <Typography>Tarjeta: {transaction.amount}</Typography>
              </Paper>
            </Grid>
        ))}       
      </Grid>
    </div>
  );
};
