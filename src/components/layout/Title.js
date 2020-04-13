import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';

const Title = ({ title }) => {
  return (
    <Fragment>
      <Header as="h2">{title}</Header>
    </Fragment>
  );
};

export default Title;
