import { type MouseEventHandler, useEffect, type FC, useState } from 'react'

import styles from './Basket.module.scss'
import { PopupMessage, ProductList } from '../components/Basket'
import { useAppDispatch, useAppSelector } from '../store'
import { PopupLayout } from '../layouts'
import { clearProducts } from '../store/basketSlice'

export const Basket: FC = () => {
  const { selectedProducts, totalPrice } = useAppSelector(
    (state) => state.basketSlice
  )
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) dispatch(clearProducts())
  }, [isOpen])

  const buyClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsOpen(true)
  }

  if (selectedProducts.length === 0) {
    if (isOpen) {
      return (
        <div className={styles.basket}>
          <p className={styles.basket__error}>Нет товаров в корзине</p>
          <div
            className={
              isOpen ? styles.basket__popup_open : styles.basket__popup
            }
          >
            <PopupLayout setIsOpen={setIsOpen}>
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
