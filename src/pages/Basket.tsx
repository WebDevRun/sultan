import { type MouseEventHandler, useEffect, type FC, useState } from 'react'

import styles from './Basket.module.scss'
import { PopupMessage, ProductList } from '../components/Basket'
import { useAppDispatch, useAppSelector } from '../store'
import { PopupLayout } from '../layouts'
import { clearProducts } from '../store/basketSlice'

export const Basket: FC = () => {
  const { totalCount, selectedProducts, totalPrice } = useAppSelector(
    (state) => state.basketSlice
  )
  const dispatch = useAppDispatch()
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    console.log(totalCount, selectedProducts, totalPrice)
  }, [selectedProducts])

  useEffect(() => {
    if (isClicked) dispatch(clearProducts())
  }, [isClicked])

  const buyClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsClicked(true)
  }

  if (selectedProducts.length === 0) {
    if (isClicked) {
      return (
        <div className={styles.basket}>
          <p className={styles.basket__error}>Нет товаров в корзине</p>
          <div
            className={[
              styles.basket__popup,
              isClicked ? styles.basket__popup : undefined,
            ].join()}
          >
            <PopupLayout onClose={setIsClicked}>
              <PopupMessage />
            </PopupLayout>
          </div>
        </div>
      )
    }

    return <p className={styles.basket__error}>Нет товаров в корзине</p>
  }

  return (
    <div className={styles.basket}>
      <h2 className={styles.basket__title}>Корзина</h2>

      <div className={styles.basket__productList}>
        <ProductList products={selectedProducts} />
      </div>

      <div className={styles.basket__buyAndPrice}>
        <button
          className={styles.basket__buy}
          type="button"
          onClick={buyClickHandler}
        >
          Оформить заказ
        </button>

        <p className={styles.basket__totalPrice}>{totalPrice} ₸</p>
      </div>
    </div>
  )
}
