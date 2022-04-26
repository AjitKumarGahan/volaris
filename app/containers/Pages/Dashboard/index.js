import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import CompossedLineBarArea from "./CompossedLineBarArea";
import StrippedTable from "../Table/StrippedTable";
import Graphchaert from "./Graphchaert";
import Grapgchartcountry from "./Grapgchartcountry";
import StandardCard from "./StandardCard";

function BasicTable() {
  const title = brand.name + " - Dashboard";
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <StandardCard />
      <br />
      {/* <PapperBlock
        title="Statistic Chart"
        icon="ion-ios-stats-outline"
        desc=""
        overflowX
      >
        <div>
          <CompossedLineBarArea />
        </div>
      </PapperBlock> */}
      <PapperBlock
        title="Statistic Chart"
        icon="ion-ios-stats-outline"
        desc=""
        overflowX
      >
        <div className="row">
          <div className="col-md-6">
            <Graphchaert />
          </div>
          <div className="col-md-6">
            <Grapgchartcountry />
          </div>
        </div>
      </PapperBlock>
      <PapperBlock
        title="Company Data"
        whiteBg
        icon="ion-ios-menu-outline"
        // desc="UI Table when no data to be shown"
      >
        <div>
          <StrippedTable />
        </div>
      </PapperBlock>
    </div>
  );
}

export default BasicTable;
