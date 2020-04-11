import React from 'react';
import { calculateCoords } from '../helpers/calculateCoords';
import Card from './Card';
import './FanHand.scss';
import { cardPack } from '../cards';

function fanCards(cards, options) {
  console.log(cards);
  const n = cards.length;
  if (n === 0) {
    return;
  }

  const cardR = [];
  const width = options.width || 90;
  const height = Math.floor(width * 1.4);
  const box = {};
  const coords = calculateCoords(
    n,
    options.radius,
    width,
    height,
    options.fanDirection,
    options.spacing,
    box
  );

  let i = 0;
  coords.forEach(function (coord) {
    const card = cards[i++];
    const style = {
      left: coord.x + 'px',
      top: coord.y + 'px',
    };

    const rotationAngle = Math.round(coord.angle);
    const prefixes = ['Webkit', 'Moz', 'O', 'ms'];
    prefixes.forEach(function (prefix) {
      style[prefix + 'Transform'] =
        'rotate(' + rotationAngle + 'deg) translateZ(0)';
    });
    cardR.push({ card, style, coord });
  });

  return cardR;
}

function FanHand() {
  const pack = cardPack();

  const cards = fanCards(pack.slice(24, 31), {
    spacing: 0.2,
    radius: 150,
    flow: 'horizontal',
    fanDirection: 'N',
    imagesUrl: 'cards/',
  });

  const onCardPick = (code) => {
    console.log(code);
  };

  return (
    <>
      <div className="hand fan">
        {cards.map(({ card, style, coord }) => (
          <Card
            style={style}
            img={card.img}
            key={card.code}
            coord={coord}
            code={card.code}
            onClick={onCardPick}
          />
        ))}
      </div>
    </>
  );
}

export default FanHand;
