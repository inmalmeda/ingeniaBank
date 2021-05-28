import React, {useEffect} from "react";
import { GetAnalyticBalance } from "../../services/Balance.service";
import { AnalyticBalanceCommonComponent } from "./BalanceCommon.component";
import { BalanceSelector } from "./BalanceSelector.component";


interface Props {
  typePeriod : number
}

export const AnalyticBalanceCommonContainer: React.FC<Props> = (props) => {
 
  const { typePeriod } = props;
  const { loadAnalyticBalance, analytic } = GetAnalyticBalance()  

 /*  const [selectTypePeriod, setSelectTypePeriod] = React.useState(typePeriod);
  const handleChange = (event : any) => {
    setSelectTypePeriod(event.target.value as number);  
 
  }; */

  let dataPeriod = []

  if(typePeriod === 0){
    dataPeriod = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'AGO', 'SEP', 'OCT', 'NOV','DIC']
  }else{    
    let month = new Date().getUTCMonth() + 1;
    let daysInMonth = new Date(new Date().getUTCFullYear(), month, 0).getDate();   
    for(let i = 0; i < daysInMonth; i ++){
      dataPeriod[i] = `${i+1}`
    } 
  } 
 
  useEffect(() => {
    loadAnalyticBalance(1)
  }, []);

  return (
    <> 
     {/*  <BalanceSelector handleChange = {handleChange}/>  */}
      <AnalyticBalanceCommonComponent analytic = {analytic} dataPeriod = {dataPeriod} typePeriod= {typePeriod}/>
    </>
  );
};
