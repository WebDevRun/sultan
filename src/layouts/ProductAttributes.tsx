import { ReactNode, FC } from 'react'

import styles from './ProductAttributes.module.scss'
import triangle from '/images/general/triangle.png'

interface ProductAttributesProps {
  title: string
  children: ReactNode
}

export const ProductAttributes: FC<ProductAttributesProps> = ({
  title,
  children,
}) => {
  return (
    <details className={styles.details}>
      <summary className={styles.details__title}>
        <span className={styles.details__titleText}>{title}</span>
        <img
          className={styles.details__titleImage}
          src={triangle}
          alt="triangle"
        />
      </summary>
      {children}
    </details>
  )
}
