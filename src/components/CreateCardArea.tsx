import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { CardType } from '../index.d';

type Props = {
  onAdd: (card: CardType) => void;
};

const CreateCard: FC<Props> = (props) => {
  const [card, setCard] = useState<CardType>({
    name: '',
    salutation: '',
    amount: '',
    age: '',
    dob: '',
  });

  let handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setCard((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onAdd(card);
    setCard({
      name: '',
      salutation: '',
      amount: '',
      age: '',
      dob: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='py-2 '>
        <div className='mt-8 max-w-md mx-auto border-2 p-7 rounded-lg'>
          <div className='grid grid-cols-1 gap-6'>
            <label className='block'>
              <span className='text-gray-700'>Full name</span>
              <input
                onChange={handleChange}
                value={card.name}
                name='name'
                type='text'
                className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              />
            </label>
            <label className='block'>
              <span className='text-gray-700'>Salutation</span>
              <select
                onChange={handleChange}
                value={card.salutation}
                name='salutation'
                className='block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              >
                <option>Select</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
              </select>
            </label>
            <label className='block'>
              <span className='text-gray-700'>Amount</span>
              <input
                onChange={handleChange}
                value={card.amount}
                type='text'
                name='amount'
                className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              />
            </label>
            <label className='block'>
              <span className='text-gray-700'>Age</span>
              <input
                onChange={handleChange}
                value={card.age}
                type='text'
                name='age'
                className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              />
            </label>
            <label className='block'>
              <span className='text-gray-700'>Date of Birth</span>
              <input
                onChange={handleChange}
                value={card.dob}
                type='date'
                name='dob'
                className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              />
            </label>
          </div>
          <div className='px-4 py-3 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCard;
