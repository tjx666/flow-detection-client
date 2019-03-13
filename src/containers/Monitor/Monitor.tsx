import * as React from 'react';
import { Card, List, Icon } from 'antd';
const {
  Home: { Monitor: strings }
} = require('../../constants/strings');

const Title = <span>{strings.title}</span>;

export const Monitor = () => {
  return <Card title={Title} />;
};
