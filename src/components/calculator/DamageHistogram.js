import React from 'react';
import { Header } from 'semantic-ui-react';
import { Histogram,  BarSeries, withParentSize, XAxis, YAxis } from '@data-ui/histogram';

const DetailsContainer = (props) => {

  const ResponsiveHistogram = withParentSize(({ parentWidth, parentHeight, ...rest }) =>
    <Histogram
      width={parentWidth}
      height={250}
      {...rest} />
  );

  return (
    props === undefined || props === null || props.rawData.length === 0 ?
      <Header>No Data</Header> :
      <ResponsiveHistogram
        ariaLabel='Damage'
        orientation='vertical'
        cumulative={false}
        normalized={true}
        valueAccessor={datum => datum}
        binValues={Array(props.max + 1).fill().map((_, index) => index)} >
        <BarSeries rawData={props.rawData} />
        <XAxis label='damage'/>
        <YAxis label='percentage' />
      </ResponsiveHistogram>

  );
};

export default DetailsContainer;
