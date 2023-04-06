import { ChangeEventHandler, FC } from 'react'

import { Search } from '../general'
import { useuseManufacturerFilterPart } from './hooks/useManufacturerFilterPart'
import styles from './ManufacturerFilterPart.module.scss'
import triangle from '/images/general/triangle.png'

interface ManufacturerFilterPartProps {
  manufacturers?: string | null
}

export const ManufacturerFilterPart: FC<ManufacturerFilterPartProps> = ({
  manufacturers = null,
}) => {
  const [
    setSearchString,
    setManufacturerListCount,
    filteredManufacturers,
    manufacturerCount,
    manufacturerListCount,
  ] = useuseManufacturerFilterPart()

  const buttonClickHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.checked)
    if (event.target.checked) {
      setManufacturerListCount('all')
    } else {
      setManufacturerListCount('four')
    }
  }

  return (
    <div className={styles.manufacturer}>
      <p className={styles.manufacturer__title}>Производитель</p>

      <div className={styles.manufacturer__search}>
        <Search setValue={setSearchString} />
      </div>

      <ul className={styles.manufacturer__List}>
        {filteredManufacturers.map((manufacturer) => {
          return (
            <li className={styles.manufacturer__element} key={manufacturer}>
              <label className={styles.manufacturer__label}>
                <input
                  className={styles.manufacturer__checkbox}
                  name="manufacturer"
                  value={manufacturer}
                  type="checkbox"
                  defaultChecked={
                    manufacturers === null
                      ? false
                      : manufacturers.includes(manufacturer)
                  }
                />
                <span className={styles.manufacturer__text}>
                  {manufacturer}
                </span>
                <span className={styles.manufacturer__count}>
                  ({manufacturerCount[manufacturer]})
                </span>
              </label>
            </li>
          )
        })}
      </ul>

      {filteredManufacturers.length >= 4 && (
        <label className={styles.manufacturer__showMore}>
          <span className={styles.manufacturer__showMoreText}>
            {manufacturerListCount === 'four' ? 'Показать все' : 'Скрыть'}
          </span>
          <img
            className={[
              styles.manufacturer__showMoreImage,
              manufacturerListCount === 'four'
                ? undefined
                : styles.manufacturer__showMoreImage_rotate,
            ].join(' ')}
            src={triangle}
            alt="traingle"
          />
          <input
            className={styles.manufacturer__showMoreCheckbox}
            type="checkbox"
            defaultChecked={manufacturerListCount === 'all'}
            onChange={buttonClickHandler}
          />
        </label>
      )}
    </div>
  )
}
