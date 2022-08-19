import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ProductObj } from '../../../slices/productsSlice';
import { EyeIcon } from '@heroicons/react/solid'

const Tdata = styled.td`
  padding: 8px;
`;

const Trow = styled.tr`
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TableRow = (props: ProductObj) => {
  return (
    <>
      <Tdata className='text-center'>{props.id}</Tdata>
      <Tdata className='text-center'>{props.title}</Tdata>
      <Tdata>{props.description}</Tdata>
      <Tdata className='text-center'>{props.price}</Tdata>
      <Tdata className='text-center'>{props.discountPercentage}</Tdata>
      <Tdata className='text-center'>{props.rating}</Tdata>
      <Tdata className='text-center'>{props.stock}</Tdata>
      <Tdata>{props.brand}</Tdata>
      <Tdata>{props.category}</Tdata>
      <Tdata className='flex justify-center'>
        <img src={props.thumbnail} alt={`#${props.id}`} className={'w-10 h-10'} />
      </Tdata>
      <Tdata>
        <Link to={`/product/${props.id}`}>
          <button className='hover:bg-[#ffffff50] rounded-md p-2'>
            <EyeIcon className="h-6 w-6"/>
          </button>
        </Link>
      </Tdata>
    </>
  )
};

export default TableRow;