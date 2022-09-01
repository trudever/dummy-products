import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../../../app/store';
import { getInitialProducts } from '../../../slices/productsSlice';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Thead = styled.th`
  padding: 16px;
`;

const Table = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(getInitialProducts(data.page));
    return () => {};
  }, []);

  return (
    <>
      <LoadingOverlay
        active={data.isLoading}
        spinner
        styles={{
          wrapper: { position: 'static' },
        }}
      >
        <table className='text-white w-full'>
          <thead>
            <tr className='bg-[#ffffff88]'>
              <Thead>product_id</Thead>
              <Thead>title</Thead>
              <Thead>description</Thead>
              <Thead>price</Thead>
              <Thead>discount</Thead>
              <Thead>rating</Thead>
              <Thead>stock</Thead>
              <Thead>brand</Thead>
              <Thead>category</Thead>
              <Thead>Theadumbnail</Thead>
              <Thead></Thead>
            </tr>
          </thead>
          <tbody>
            {data.productsInfo.products.map((product) => (
              <tr className='hover:bg-[#ffffff1a]' key={product.id}>
                <TableRow {...product} />
              </tr>
            ))}
          </tbody>
        </table>
      </LoadingOverlay>
      <Pagination />
    </>
  );
};

export default Table;
