import { ChangeEventHandler, useEffect, useState } from 'react'

import { useAppSelector } from '../../../store'

export const useManufacturerFilterPart = () => {
  const products = useAppSelector((state) => state.productsReducer.products)

  const [searchString, setSearchString] = useState('')
  const [manufacturerCount, setManufacturerCount] = useState<
    Record<string, number>
  >({})
  const [manufacturers, setManufacturers] = useState<string[]>([])
  const [filteredManufacturers, setFilteredManufacturers] =
    useState<string[]>(manufacturers)
  const [manufacturerListCount, setManufacturerListCount] = useState<
    'four' | 'all'
  >('four')

  useEffect(() => {
    setManufacturerCount(() => {
      return products.reduce<Record<string, number>>((acc, product) => {
        if (product.manufacturer in acc) {
          acc[product.manufacturer] += 1
          return acc
        }

        acc[product.manufacturer] = 1
        return acc
      }, {})
    })
  }, [products])

  useEffect(() => {
    setManufacturers(() => {
      return Object.keys(manufacturerCount)
    })
  }, [manufacturerCount])

  useEffect(() => {
    let filteredManufacturers = manufacturers.filter((manufacturer) =>
      manufacturer.toLowerCase().includes(searchString.toLowerCase())
    )

    if (manufacturerListCount === 'four') {
      filteredManufacturers = filteredManufacturers.slice(0, 4)
    }

    setFilteredManufacturers(filteredManufacturers)
  }, [searchString, manufacturers, manufacturerListCount])

  const buttonClickHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      setManufacturerListCount('all')
    } else {
      setManufacturerListCount('four')
    }
  }

  return {
    filteredManufacturers,
    manufacturerCount,
    manufacturerListCount,
    setSearchString,
    buttonClickHandler,
  }
}
