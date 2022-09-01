import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import Container from '../../components/container/Container';
import { ProductObj } from '../../slices/productsSlice';
import ImageModal from './components/ImageModal';
import ProductDisclosure from './components/ProductDisclosure';
import ProductGallery from './components/ProductGallery';

const ProductTable = () => {
  let { id } = useParams();

  const data = useSelector((state: RootState) => state.data);

  const product = data.productsInfo.products.find(
    (value) => value.id.toString() === id
  ) as ProductObj;

  return (
    <>
      <Container addClass='min-h-screen flex justify-center py-10 lg:py-32 bg-gradient-to-r from-[#300016] to-[#911c1e] bg-opcity-400'>
        <div className='flex w-full gap-10 p-10 rounded-md bg-[#00000050]'>
          <div className='w-[300px]'>
            <ProductDisclosure {...product} />
          </div>
          <div>
            <ProductGallery images={product.images} />
          </div>
        </div>
      </Container>
      <ImageModal />
    </>
  );
};

export default ProductTable;
