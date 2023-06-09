import {
  useState,
  FC,
  MouseEventHandler,
  ChangeEventHandler,
  Dispatch,
} from 'react'
import cn from 'classnames'

import styles from './Search.module.scss'

interface SearchProps {
  setValue?: Dispatch<React.SetStateAction<string>>
  position?: 'header' | 'body'
}

export const Search: FC<SearchProps> = ({ setValue, position = 'body' }) => {
  const [searchValue, setSearchValue] = useState('')

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value)
  }

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (setValue === undefined) return
    setValue(searchValue)
  }

  return (
    <label
      className={cn(
        styles.search,
        { [styles.search_header]: position === 'header' },
        { [styles.search_body]: position === 'body' }
      )}
    >
      <input
        className={cn(
          styles.search__input,
          { [styles.search__input_header]: position === 'header' },
          { [styles.search__input_body]: position === 'body' }
        )}
        type="text"
        name="search"
        placeholder="Поиск..."
        value={searchValue}
        onChange={inputChangeHandler}
      />
      <button
        className={cn(
          styles.search__imageContainer,
          { [styles.search__imageContainer_header]: position === 'header' },
          { [styles.search__imageContainer_body]: position === 'body' }
        )}
        type="button"
        onClick={buttonClickHandler}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5294 15.5294L12.0989 12.0928L15.5294 15.5294ZM14 7.5C14 9.22391 13.3152 10.8772 12.0962 12.0962C10.8772 13.3152 9.22391 14 7.5 14C5.77609 14 4.12279 13.3152 2.90381 12.0962C1.68482 10.8772 1 9.22391 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5V7.5Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <p
          className={cn(
            styles.search__text,
            { [styles.search__text_header]: position === 'header' },
            { [styles.search__text_body]: position === 'body' }
          )}
        >
          Поиск
        </p>
      </button>
    </label>
  )
}
