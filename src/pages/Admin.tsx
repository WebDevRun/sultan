import { FC } from 'react'

import styles from './Admin.module.scss'
import { ProductList, AppendProduct } from '../components/Admin'
import { useAppSelector } from '../store'

export const Admin: FC = () => {
  const products = useAppSelector((state) => state.productsReducer.products)

  if (products.length === 0) {
    return <div className={styles.admin__error}>Загрузка...</div>
  }

  return (
    <div className={styles.admin}>
      <h2 className={styles.admin__title}>Админка</h2>

      <div className={styles.admin__appendProduct}>
        <AppendProduct />
      </div>

      <div className={styles.admin__productList}>
        <ProductList products={products} />
      </div>
    </div>
  )
}
