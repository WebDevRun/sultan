import { MouseEventHandler, useEffect, useState, FC } from 'react'

import { useAppDispatch } from '../../store'
import {
  appendProduct,
  removeProduct,
  ISelectedProduct,
} from '../../store/basketSlice'
import { Counter, ProductSize } from '../general'
import styles from './ProductCard.module.scss'
import urn from '/images/general/urn.svg'

interface ProductCardProps {
  selectedProduct: ISelectedProduct
}

export const ProductCard: FC<ProductCardProps> = ({ selectedProduct }) => {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(selectedProduct.count)

  useEffect(() => {
    dispatch(appendProduct({ product: selectedProduct.product, count }))
  }, [count])

  const removeClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(removeProduct(selectedProduct.product.id))
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__imageContainer}>
        <img
          className={styles.product__image}
          src={selectedProduct.product.url}
          alt={selectedProduct.product.name}
        />
      </div>

      <div className={styles.product__info}>
        <ProductSize
          size={selectedProduct.product.size}
          typeSize={selectedProduct.product.typeSize}
        />
        <p className={styles.product__title}>{selectedProduct.product.name}</p>
        <p className={styles.product__description}>
          {selectedProduct.product.description}
        </p>
      </div>

      <div className={styles.product__controlContainer}>
        <div className={styles.product__counter}>
          <Counter count={selectedProduct.count} setCount={setCount} />
        </div>
        <div className={styles.product__priceContainer}>
          <p className={styles.product__price}>
            {selectedProduct.product.price} ₸
          </p>
        </div>
        <div className={styles.product__removeContainer}>
          <button
            className={styles.product__remove}
            type="button"
            onClick={removeClickHandler}
          >
            <img src={urn} alt="urn" />
          </button>
        </div>
      </div>
    </div>
  )
}
