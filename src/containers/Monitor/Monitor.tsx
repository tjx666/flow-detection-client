import * as React from 'react';
import { Card, Button } from 'antd';
const {
  Home: { Monitor: strings }
} = require('../../constants/strings');
import './Monitor.scss';

const Title = <span style={{ fontWeight: 'bold' }}>{strings.title}</span>;
const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

interface Props {
  videoLink: string;
}

export const Monitor = (props: Props) => {
  const { videoLink } = props;

  return (
    <Card
      title={Title}
      headStyle={{ textAlign: 'center' }}
      className="monitor"
      bodyStyle={bodyStyle}
    >
      <video
        className="player"
        src={videoLink}
        preload="auto"
        poster="http://www.w3school.com.cn/i/w3school_logo_black.gif"
      />
      <DataPanel carFlow={200} humanFlow={200} />
      <img
        className="thermal-map"
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1603182816,1362687610&fm=26&gp=0.jpg"
      />
      <Button type="primary" block>
        查看详情 >
      </Button>
    </Card>
  );
};

interface PropsDataPanel {
  carFlow: number;
  humanFlow: number;
}

const DataPanel = (props: PropsDataPanel) => {
  const { carFlow, humanFlow } = props;

  return (
    <div className="data-panel">
      <span>{`车流量: ${carFlow}`}</span>
      <span>{`人流量: ${humanFlow}`}</span>
    </div>
  );
};
