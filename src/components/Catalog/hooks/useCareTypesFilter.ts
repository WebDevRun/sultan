import { ChangeEventHandler, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useCareTypesFilter = () => {
  const [params, setParams] = useSearchParams()
  const [typesOfCare, setTypesOfCare] = useState<string[]>(
    () => params.get('typesOfCare')?.split(',') || []
  )

  useEffect(() => {
    params.set('typesOfCare', typesOfCare.join(','))

    if (typesOfCare.length === 0) {
      params.delete('typesOfCare')
    }

    setParams(params)
  }, [typesOfCare])

  const checkboxChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTypesOfCare((prev) => {
      const value = event.target.value

      if (prev.includes(value)) {
        prev = prev.filter((type) => type !== value)
      } else {
        prev = [...prev, value]
      }

      return prev
    })
  }

  return checkboxChangeHandler
}
