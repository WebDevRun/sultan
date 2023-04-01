import { FC, useRef } from 'react'

import styles from './AppendProduct.module.scss'
import { ProductForm } from './ProductForm'

export const AppendProduct: FC = () => {
  const details = useRef<HTMLDetailsElement>(null)

  return (
    <details className={styles.appendProduct} ref={details}>
      <summary className={styles.appendProduct__summary}>
        <p className={styles.appendProduct__info}>Добавить продукт</p>
      </summary>

      <div className={styles.appendProduct__form}>
        <ProductForm container={details} />
      </div>
    </details>
  )
}
