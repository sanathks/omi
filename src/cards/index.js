export const cardPack = () => {
  const numbers = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['C', 'D', 'H', 'S'];
  const pack = [];
  suits.map((suit) => {
    numbers.map((number) => {
      const code = number + suit;
      const card = {
        code,
        img: require('./' + code + '.svg'),
      };
      pack.push(card);
    });
  });

  return pack;
};
