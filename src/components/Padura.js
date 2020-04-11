import React from 'react';
import FanHand from './FanHand';
import './Padura.scss';

function Padura() {
  return (
    <div className={'padura'}>
      <div className={'player'} />
      <div className={'player player-deck'}>player one</div>
      <div className={'player'} />
      <div className={'player player-deck'}>Player two</div>
      <div className={'player'} />
      <div className={'player player-deck'}>Player three</div>
      <div className={'player'} />
      <div className={'player player-deck'}>
        <FanHand />
      </div>
      <div className={'player'} />
    </div>
  );
}

export default Padura;
