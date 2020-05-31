import React from 'react';
import { Header } from 'semantic-ui-react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalRectSeries } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';


const DamageHistogram = (props) => {
  

  return (
    props === undefined || props === null || props.bins.length === 0 ?
      <Header>No Damage Data</Header> :
      <XYPlot height={250} width={858} xType='linear' yType='linear' xDomain={[0, props.max + 1]} >
        <HorizontalGridLines />
        <XAxis tickValues={Array(props.max + 1).fill().map((_, index) => index)}/>
        <YAxis tickFormat={v => `${v}%`} />
        <VerticalRectSeries data={props.bins} />
        <VerticalGridLines tickValues={Array(props.max + 1).fill().map((_, index) => index)} />
      </XYPlot>
  );
};

export default DamageHistogram;
