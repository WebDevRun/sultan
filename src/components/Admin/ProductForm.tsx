import { FC, RefObject } from 'react'

import styles from './ProductForm.module.scss'
import { IProduct } from '../../store/productsSlice'
import { useProductForm } from './hooks/useProductForm'

interface ProductFormProps {
  product?: IProduct
  container?: RefObject<HTMLDetailsElement>
}

export const ProductForm: FC<ProductFormProps> = ({ product, container }) => {
  const { typesOfCare, submitClickHandler, cancelClickHandler } =
    useProductForm(product, container)

  return (
    <form
      className={styles.form}
      onSubmit={submitClickHandler}
      onReset={cancelClickHandler}
    >
      <label className={styles.form__label}>
        <span className={styles.form__text}>URL изображения:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="url"
          defaultValue={product?.url}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Назвaние:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="name"
          defaultValue={product?.name}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Размер:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="size"
          defaultValue={product?.size}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Тип размера:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="typeSize"
          defaultValue={product?.typeSize}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Штрихкод:</span>
        <input
          className={styles.form__input}
          type="number"
          required
          name="barcode"
          defaultValue={product?.barcode}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Производитель:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="manufacturer"
          defaultValue={product?.manufacturer}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Бренд:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="brand"
          defaultValue={product?.brand}
        />
      </label>

      <label className={styles.form__label}>
        <span className={styles.form__text}>Цена:</span>
        <input
          className={styles.form__input}
          type="text"
          required
          name="price"
          defaultValue={product?.price}
        />
      </label>

      <details className={styles.form__typesOfCare}>
        <summary className={styles.form__typesOfCareText}>Тип ухода:</summary>
        <div className={styles.form__typesOfCareContainer}>
          {typesOfCare?.map((type) => {
            return (
              <label key={type} className={styles.form__label}>
                <input
                  type="checkbox"
                  name="typeOfCare"
                  value={type}
                  defaultChecked={product?.typeOfCare.includes(type)}
                />
                <span className={styles.form_text}>{type}</span>
              </label>
            )
          })}
        </div>
      </details>

      <label className={styles.form__textareaLabel}>
        <span className={styles.form__text}>Описание:</span>
        <textarea
          className={styles.form__textarea}
          required
          name="description"
          defaultValue={product?.description}
        />
      </label>

      <button className={styles.form__submit} type="submit">
        Добавить
      </button>

      <button className={styles.form__cancel} type="reset">
        Отмена
      </button>
    </form>
  )
}
