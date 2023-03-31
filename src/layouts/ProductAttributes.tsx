import { type ReactNode, type FC } from 'react'

import styles from './ProductAttributes.module.scss'

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
          src="/images/general/triangle.png"
          alt="triangle"
        />
      </summary>
      {children}
    </details>
  )
}
