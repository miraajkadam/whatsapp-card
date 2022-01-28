import { FC, Fragment, useState } from 'react';

import Card from './components/Card';
import CreateCardArea from './components/CreateCardArea';
import type { CardType } from './index.d';

let App: FC = () => {
  const [cardList, setCardList] = useState<CardType[]>([]);

  const handleAddCard = (item: CardType) => {
    setCardList([...cardList, item]);
  };

  const handleDelete = (id: number) => {
    setCardList((preValues) => {
      return preValues.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <Fragment>
      <CreateCardArea onAdd={handleAddCard} />
      <div className='flex flex-row items-start flex-wrap p-20 content-center'>
        {cardList.map((item: CardType, index) => (
          <Card key={index} cardID={index} card={item} onDelete={handleDelete} />
        ))}
      </div>
    </Fragment>
  );
};

export default App;
