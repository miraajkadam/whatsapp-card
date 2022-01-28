import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { FC, useState } from 'react';
import { CardType } from '../index.d';

type Props = {
  cardID: number;
  card: CardType;
  onDelete: (cardID: number) => void;
};

const Card: FC<Props> = ({ cardID, card, onDelete }) => {
  let [like, setLike] = useState<number>(0);
  let [isExpanded, setExpanded] = useState<boolean>(false);

  const handleLike = () => {
    setLike((prevState) => prevState + 1);
  };
  const handleDislike = () => {
    setLike((prevState) => prevState - 1);
  };

  const handleDelete = () => {
    onDelete(cardID);
  };

  let handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className='mt-8 mx-5 pt-2 px-5 border-2 rounded-lg shadow-md'>
      {!isExpanded ? (
        <>
          <div className='text-center'>
            <h1 className='font-md text-4xl	font-semibold'>{card.name}</h1>
          </div>
          <div className='text-right mb-2'>
            <IconButton onClick={handleExpand} style={{ outline: 'none' }}>
              <ExpandMoreIcon />
            </IconButton>
            <IconButton onClick={handleDelete} style={{ outline: 'none' }}>
              <DeleteIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <div className='text-right mb-2'>
            <IconButton onClick={handleExpand} style={{ outline: 'none' }}>
              <ExpandLessIcon />
            </IconButton>
            <IconButton onClick={handleDelete} style={{ outline: 'none' }}>
              <DeleteIcon />
            </IconButton>
          </div>
          <div>
            <span className='font-medium text-2xl'>Name: </span>
            <span className='font-light text-2xl'>{card.name}</span>
          </div>
          <div>
            <span className='font-medium text-2xl'>Salutation: </span>
            <span className='font-light text-2xl'>{card.salutation}</span>
          </div>
          <div>
            <span className='font-medium text-2xl'>Amount: </span>
            <span className='font-light text-2xl'>{card.amount}</span>
          </div>
          <div>
            <span className='font-medium text-2xl'>Age: </span>
            <span className='font-light text-2xl'>{card.age}</span>
          </div>
          <div>
            <span className='font-medium text-2xl'>Date of Birth: </span>
            <span className='font-light text-2xl'>{card.dob}</span>
          </div>
          <div className='mt-3 text-center'>
            <IconButton onClick={handleLike} style={{ outline: 'none' }}>
              <ThumbUpAltIcon />
            </IconButton>
            <span className='font-bold mx-2'>{like}</span>
            <IconButton onClick={handleDislike} style={{ outline: 'none' }}>
              <ThumbDownAltIcon />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
