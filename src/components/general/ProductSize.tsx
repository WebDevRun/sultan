import { type FC } from 'react'

import { type IProduct } from '../../store'
import styles from './ProductSize.module.scss'

interface ProductSizeProps {
  typeSize: IProduct['typeSize']
  size: IProduct['size']
}

export const ProductSize: FC<ProductSizeProps> = ({ size, typeSize }) => {
  return (
    <div className={styles.size}>
      <img
        className={styles.size__image}
        src={
          typeSize === 'г'
            ? '/images/general/weight.svg'
            : '/images/general/volume.svg'
        }
        alt={typeSize}
      />
      <span className={styles.size__text}>
        {size} {typeSize}
      </span>
    </div>
  )
}
