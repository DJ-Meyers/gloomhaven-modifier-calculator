import React from 'react';
import { Header } from 'semantic-ui-react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const EffectsGraph = (props) => {

  return (
    props === undefined || props === null || props.bins.length === 0 ?
      <Header>No Effects Data</Header> :
      <XYPlot height={250} width={858} xType='ordinal' margin={{bottom: 80}}>
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45}/>
        <YAxis tickFormat={v => `${v}%`} tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}/>
        <VerticalBarSeries data={props.bins} />
      </XYPlot>
  );
};

export default EffectsGraph;
