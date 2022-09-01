import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { setModalImage } from '../../../slices/productsSlice';
import { XIcon } from '@heroicons/react/solid';

const ImageModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.data);

  function closeModal() {
    dispatch(setModalImage(''));
  }

  return (
    <Transition appear show={data.modalImage !== ''}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-70' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <img src={data.modalImage} alt='img' />
            </Transition.Child>
          </div>
        </div>

        <button
          type='button'
          className='fixed top-5 right-5 text-gray-400'
          onClick={closeModal}
        >
          <XIcon className='h-10 w-10' />
        </button>
      </Dialog>
    </Transition>
  );
};

export default ImageModal;
