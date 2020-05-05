import React, { useContext } from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import { Histogram, DensitySeries, BarSeries, withParentSize, XAxis, YAxis } from '@data-ui/histogram';

import CalculatorContext from '../../context/calculator/calculatorContext';
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
