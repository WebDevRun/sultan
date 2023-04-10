import { FormEventHandler, MouseEventHandler, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useLeftFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [formHidden, setFormHidden] = useState(false)

  const toggleHiddenClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setFormHidden((prev) => !prev)
  }

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const manufacturers = formData.getAll('manufacturer')

    if (manufacturers.length === 0) {
      searchParams.delete('manufacturer')
    }

    for (const [key, value] of formData) {
      const strValue = typeof value === 'string' ? value : value.name

      if (key === 'search') continue

      if (key === 'manufacturer') {
        searchParams.set(key, manufacturers.join(','))
        continue
      }

      searchParams.set(key, strValue)
    }

    setSearchParams(searchParams)
  }

  const formResetHandler: FormEventHandler<HTMLFormElement> = (event) => {
    setSearchParams(undefined)
  }

  return {
    searchParams,
    formHidden,
    toggleHiddenClickHandler,
    formSubmitHandler,
    formResetHandler,
  }
}
