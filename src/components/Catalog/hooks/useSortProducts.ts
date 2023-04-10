import { useEffect, useState, ChangeEventHandler } from 'react'
import { useSearchParams } from 'react-router-dom'

const sortOptions = [
  {
    name: 'name',
    description: 'Название',
  },
  {
    name: 'price',
    description: 'Цена',
  },
]

export const useSortProducts = () => {
  const [params, setParams] = useSearchParams()

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
      setselectValue(sortOptions[0].name)
      return
    }

    setselectValue(value)
  }, [params])

  const selectChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    params.set('select', event.currentTarget.value)
    setParams(params)
  }

  const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    params.set('toggleASC', String(event.currentTarget.checked))
    setParams(params)
  }

  return {
    sortOptions,
    selectValue,
    checkboxStatus,
    selectChangeHandler,
    checkboxChangeHandler,
  }
}
