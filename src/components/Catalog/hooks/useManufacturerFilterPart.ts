import { type Dispatch, useEffect, useState } from 'react'
import { useAppSelector } from '../../../store'

export const useuseManufacturerFilterPart = (): [
  Dispatch<React.SetStateAction<string>>,
  string[],
  Record<string, number>
] => {
  const products = useAppSelector((state) => state.productsSlice.products)

  const [searchString, setSearchString] = useState('')
  const [manufacturerCount, setManufacturerCount] = useState<
    Record<string, number>
  >({})
  const [manufacturers, setManufacturers] = useState<string[]>([])
  const [filteredManufacturers, setFilteredManufacturers] =
    useState<string[]>(manufacturers)

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
    setFilteredManufacturers(
      manufacturers.filter((manufacturer) =>
        manufacturer.toLowerCase().includes(searchString.toLowerCase())
      )
    )
  }, [searchString, manufacturers])

  return [setSearchString, filteredManufacturers, manufacturerCount]
}
