import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { setModalImage } from '../../../slices/productsSlice';

const ProductGallery = ({ images }: ImagesProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = (url: string) => {
    dispatch(setModalImage(url));
  };

  return (
    <div className='w-full flex flex-wrap gap-5'>
      {images.map((url) => (
        <div
          className='relative bg-white rounded-md'
          onClick={() => clickHandler(url)}
          key={url}
        >
          <div className='p-2'>
            <img src={url} className='w-[220px] h-[220px] border' alt='img' />
          </div>
          <div className='absolute top-0 left-0 w-full h-full rounded-md bg-transparent hover:bg-[#000000a0] hover:cursor-pointer z-3'></div>
        </div>
      ))}
    </div>
  );
};

interface ImagesProps {
  images: string[];
}

export default ProductGallery;
