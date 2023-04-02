import { type FC } from 'react'

import { type IProduct } from '../../store'
import styles from './ProductSize.module.scss'
import weight from '/images/general/weight.svg'
import volume from '/images/general/volume.svg'

interface ProductSizeProps {
  typeSize: IProduct['typeSize']
  size: IProduct['size']
}

export const ProductSize: FC<ProductSizeProps> = ({ size, typeSize }) => {
  return (
    <div className={styles.size}>
      <img
        className={styles.size__image}
        src={typeSize === 'г' ? weight : volume}
        alt={typeSize}
      />
      <span className={styles.size__text}>
        {size} {typeSize}
      </span>
    </div>
  )
}
