import React from "react";
import { GetAnalyticCategory } from "../../services/Doughtnut.service";
import { DoughtnutCommonComponent } from "./DoughtnutCommon.component";

export const DoughtnutCommonContainer: React.FC = () => {
  const { analyticCategory, loadAnalyticCategory } = GetAnalyticCategory();

  React.useEffect(() => {
    loadAnalyticCategory();
  }, []);
  return <DoughtnutCommonComponent analyticDoughtnut={analyticCategory} />;
};
