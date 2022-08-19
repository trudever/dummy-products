import { Fragment, useEffect, useState } from "react"
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getProducts } from '../../../helper/getData';
import { getCategories, setPage, setSelectedCategory } from '../../../slices/productsSlice';

const CategoryCombobox = () => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.data);

  const [query, setQuery] = useState('')

  const changeHandler = (value: string) => {
    dispatch(setPage(1));
    dispatch(setSelectedCategory(value));
    getProducts(1, value, dispatch);
  }

  useEffect(() => {
    dispatch(getCategories());
    return () => {}
  }, [])

  const filteredCategories =
    query === ''
      ? data.categories
      : data.categories.filter((category) =>
          category
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-72">
      <Combobox value={data.selectedCategory} onChange={changeHandler}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden text-left shadow-md border border-[#ffffff88] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 bg-transparent text-white focus:ring-0"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10000">
              {filteredCategories.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <Combobox.Option
                    key={category}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-[#6f131a] text-white' : 'text-gray-900'
                      }`
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {category}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-[#6f131a]'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
};

export default CategoryCombobox;