import React, { useState } from 'react';

function Card({ onClick, style, img, coord, code }) {
  const [customStyle, setCustomStyle] = useState(style);

  const onMouseOver = () => {
    const top = coord.y - 10 + 'px';
    setCustomStyle({ ...style, top });
  };

  const onMouseOut = () => {
    const top = coord.y + 'px';
    setCustomStyle({ ...style, top });
  };

  const onClickHandler = () => {
    onClick(code);
  };

  return (
    <img
      className={'card'}
      style={customStyle}
      src={img}
      alt=""
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClickHandler}
    />
  );
}

export default Card;
