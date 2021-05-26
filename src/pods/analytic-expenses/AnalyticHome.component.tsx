import React, {useState,useEffect} from "react";
import { Analytic } from "../../models/analytic-expenses/Analytic.model";

import NumberFormat from "react-number-format";
import { Grid } from "@material-ui/core";


interface Props {
    analytic: Analytic[];
}
  
export const AnalyticComponent: React.FC<Props> = (props) => {

    const { analytic } = props;
    const [expenses, setExpenses] = useState(0);
    const [inComes, setInComes] = useState(0);
    const [stateAnalytic, setStateAnalytic] = useState<Analytic[]>(analytic); 

    useEffect(() => {     
        setStateAnalytic(analytic)      
        if(stateAnalytic.length > 0) {
            let monthToCompare = new Date().getUTCMonth() + 1 < 10 ? 
                                `0${new Date().getUTCMonth() + 1}`
                                 : 
                                 new Date().getUTCMonth() + 1
            let monthData = stateAnalytic.filter((analytic) => analytic.date.split('-')[1] === monthToCompare)       
            if(monthData.length > 0){
                setExpenses(monthData[0].expense)
                setInComes(monthData[0].inCome)
            }
        }
    }, [analytic, stateAnalytic]);
    
    return (        
        <div className="container-flex box-margin-b">
            <div className="incomes-data text-align-flex-h">Ingresos totales del mes: 
                <NumberFormat                      
                        value= {inComes} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        suffix={'€'} 
                        fixedDecimalScale = {true}
                        decimalScale = {2}/> 
            </div>
            <div className = "expenses-data text-align-flex-h">Gastos totales del mes: 
                <NumberFormat                         
                        value= {expenses} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        suffix={'€'} 
                        fixedDecimalScale = {true}
                        decimalScale = {2}/>  
            </div>
        </div>      
      
    );
};
