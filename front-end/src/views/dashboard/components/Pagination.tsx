import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getProducts } from '../../../helper/getData';
import { changePage, setPage } from '../../../slices/productsSlice';

const Table = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.data);

  const clickPrevNextHandler = (delta: number) => {
    dispatch(changePage(delta));
    getProducts(data.page + delta, data.selectedCategory, dispatch);
  };

  const clickPageHandler = (page: number) => {
    dispatch(setPage(page));
    getProducts(page, data.selectedCategory, dispatch);
  };

  const isPrevAvailable = () => {
    return data.page > 1;
  };

  const isNextAvailable = () => {
    return data.page * 10 < data.productsInfo.total;
  };

  return (
    <div className='flex gap-3 justify-center'>
      <button
        onClick={() => clickPageHandler(1)}
        className='p-[8px_16px] rounded-md bg-red-400 hover:bg-red-500 disabled:bg-gray-500 transition-all duration-200 text-white mb-4'
        disabled={data.page === 1}
      >
        &lt;&lt;
      </button>
      <button
        onClick={() => clickPrevNextHandler(-1)}
        className='p-[8px_16px] rounded-md bg-red-400 hover:bg-red-500 disabled:bg-gray-500 transition-all duration-200 text-white mb-4'
        disabled={!isPrevAvailable()}
      >
        &lt;
      </button>
      {[...Array(Math.ceil(data.productsInfo.total / 10))].map((_, page) => (
        <button
          onClick={() => clickPageHandler(page + 1)}
          className={`p-[8px_16px] rounded-md hover:bg-[#ff000050] ${
            page + 1 === data.page ? 'bg-red-400' : 'bg-[#ff000020]'
          } transition-all duration-200 text-white mb-4`}
          key={`page#${page}`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={() => clickPrevNextHandler(1)}
        className='p-[8px_16px] rounded-md bg-red-400 hover:bg-red-500 disabled:bg-gray-500 transition-all duration-200 text-white mb-4'
        disabled={!isNextAvailable()}
      >
        &gt;
      </button>
      <button
        onClick={() =>
          clickPageHandler(Math.ceil(data.productsInfo.total / 10))
        }
        className='p-[8px_16px] rounded-md bg-red-400 hover:bg-red-500 disabled:bg-gray-500 transition-all duration-200 text-white mb-4'
        disabled={data.page === Math.ceil(data.productsInfo.total / 10)}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Table;
