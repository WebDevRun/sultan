import { FC, FormEventHandler, RefObject } from 'react'

import styles from './ProductForm.module.scss'
import { IProduct, useAppDispatch, useAppSelector } from '../../store'
import { setProduct } from '../../store/productsSlice'

interface ProductForm {
  product?: IProduct
  container?: RefObject<HTMLDetailsElement>
}

export const ProductForm: FC<ProductForm> = ({ product, container }) => {
  const typesOfCare = useAppSelector((state) => state.productsSlice.typesOfCare)
  const dispatch = useAppDispatch()

  const submitClickHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const newProduct = {} as IProduct
    const formData = new FormData(event.currentTarget)
    newProduct.id = product?.id || String(Date.now())
    newProduct.name = formData.get('name') as string
    newProduct.barcode = Number(formData.get('barcode'))
    newProduct.brand = formData.get('brand') as string
    newProduct.description = formData.get('description') as string
    newProduct.manufacturer = formData.get('manufacturer') as string
    newProduct.price = Number(formData.get('price'))
    newProduct.size = formData.get('size') as string
    newProduct.typeSize = formData.get('typeSize') as string
    newProduct.url = formData.get('url') as string
    newProduct.typeOfCare = formData.getAll('typeOfCare') as string[]

    dispatch(setProduct(newProduct))
    if (container !== undefined && container.current)
      container.current.open = false
  }

  const cancelClickHandler: FormEventHandler<HTMLFormElement> = (event) => {
    if (container !== undefined && container.current)
      container.current.open = false
  }

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
