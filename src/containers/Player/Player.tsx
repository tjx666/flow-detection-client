import * as React from 'react';
import './Player.scss';

interface Props {
  link: string;
}

export const Player = (props: Props) => {
  const { link } = props;

  return <video className="player" src={link} />;
};
