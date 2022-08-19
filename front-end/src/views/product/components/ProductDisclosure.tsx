import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { ProductObj } from '../../../slices/productsSlice';

const ProductDisclosure = (props: ProductObj) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-md max-w-md bg-white p-2">
        {
          Object.entries(props).map(([key, val]) => (
            key !== 'thumbnail' && key !== 'images' ? (
              <div key={key}>
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{key}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {val}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ) : (<div key={key}></div>)
          ))
        }
      </div>
    </div>
  )
};

export default ProductDisclosure;