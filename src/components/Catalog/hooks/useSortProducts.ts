import { MutableRefObject, useEffect, useState, useRef } from 'react'

export const useSortProducts = (
  params: URLSearchParams
): {
  sortOptions: MutableRefObject<
    Array<{
      name: string
      description: string
    }>
  >
  selectValue: string | undefined
  checkboxStatus: boolean
} => {
  const sortOptions = useRef([
    {
      name: 'name',
      description: 'Название',
    },
    {
      name: 'price',
      description: 'Цена',
    },
  ])

  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const [selectValue, setselectValue] = useState<string | undefined>(undefined)

  useEffect(() => {
    const value = params.get('toggleASC')

    if (value === null) {
      setCheckboxStatus(false)
      return
    }
    if (value === 'false') {
      setCheckboxStatus(false)
      return
    }

    setCheckboxStatus(true)
  }, [params])

  useEffect(() => {
    const value = params.get('select')

    if (value === null) {
      setselectValue(sortOptions.current[0].name)
      return
    }

    setselectValue(value)
  }, [params])

  return { sortOptions, selectValue, checkboxStatus }
}
