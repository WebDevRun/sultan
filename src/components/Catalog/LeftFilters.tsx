import {
  type FormEventHandler,
  type MouseEventHandler,
  useState,
  type FC,
} from 'react'
import { useSearchParams } from 'react-router-dom'

import { PriceFilterPart } from './PriceFilterPart'
import { ManufacturerFilterPart } from './ManufacturerFilterPart'
import styles from './LeftFilters.module.scss'

export const LeftFilters: FC = () => {
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

  return (
    <div className={styles.leftFilters}>
      <div className={styles.leftFilters__titleContainer}>
        <p className={styles.leftFilters__title}>ПОДБОР ПО ПАРАМЕТРАМ</p>
        <button
          className={[
            styles.leftFilters__toggleHidden,
            formHidden ? styles.leftFilters__toggleHidden_rotate : undefined,
          ].join(' ')}
          type="button"
          onClick={toggleHiddenClickHandler}
        >
          <svg
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <form
        className={[
          styles.leftFilters__form,
          formHidden ? styles.leftFilters__form_hidden : undefined,
        ].join(' ')}
        onSubmit={formSubmitHandler}
        onReset={formResetHandler}
      >
        <div className={styles.leftFilters__price}>
          <PriceFilterPart
            priceStart={searchParams.get('priceStart')}
            priceEnd={searchParams.get('priceEnd')}
          />
        </div>

        <div className={styles.leftFilters__manufacturer}>
          <ManufacturerFilterPart
            manufacturers={searchParams.get('manufacturer')}
          />
        </div>

        <div className={styles.leftFilters__buttons}>
          <button className={styles.leftFilters__submit} type="submit">
            Показать
          </button>
          <button className={styles.leftFilters__reset} type="reset">
            <img src="/images/general/urn.svg" alt="urn" />
          </button>
        </div>
      </form>
    </div>
  )
}
