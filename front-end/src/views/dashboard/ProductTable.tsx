import Container from '../../components/container/Container';
import Table from './components/Table';
import CategoryCombobox from './components/CategoryCombobox';

const ProductTable = () => {

  return (
    <Container addClass='min-h-screen flex justify-center py-10 lg:py-32 bg-gradient-to-r from-[#300016] to-[#911c1e] bg-opcity-400'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-8 justify-end'>
          <div className='flex items-center'><p className='font-bold text-white'>Category:</p></div>
          <CategoryCombobox />
        </div>
        <Table />
      </div>
    </Container>
  );
};

export default ProductTable;
