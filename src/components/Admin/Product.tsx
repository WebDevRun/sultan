import { FC, MouseEventHandler, useRef } from 'react'

import { useAppDispatch } from '../../store'
import { ProductSize } from '../general'
import styles from './Product.module.scss'
import { IProduct, removeProduct } from '../../store/productsSlice'
import { ProductForm } from './ProductForm'
import urn from '/images/general/urn.svg'

interface ProductProps {
  product: IProduct
}

export const Product: FC<ProductProps> = ({ product }) => {
  const details = useRef<HTMLDetailsElement>(null)
  const dispatch = useAppDispatch()

  const removeClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(removeProduct(product.id))
  }

  return (
    <details className={styles.product} ref={details}>
      <summary className={styles.product__summary}>
        <div className={styles.product__info}>
          <img
            className={styles.product__image}
            src={product.url}
            alt={product.name}
          />
          <span className={styles.product__name}>{product.name}</span>
          <span className={styles.product__size}>
            <ProductSize size={product.size} typeSize={product.typeSize} />
          </span>
        </div>

        <button className={styles.product__remove} onClick={removeClickHandler}>
          <img src={urn} alt="urn" />
        </button>
      </summary>

      <div className={styles.product__form}>
        <ProductForm product={product} container={details} />
      </div>
    </details>
  )
}
