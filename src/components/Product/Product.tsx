import { type FC } from 'react'

import { type IProduct } from '../../store'
import { ProductSize, Specifications } from '../general'
import styles from './Product.module.scss'
import { SelectProduct } from './SelectProduct'
import { ProductAttributes } from '../../layouts'

interface ProductProps {
  product: IProduct
}

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__imageContainer}>
        <img
          className={styles.product__image}
          src={product.url}
          alt={product.name}
        />
      </div>

      <div className={styles.product__infomation}>
        <div className={styles.product__status}>В наличии</div>

        <h2 className={styles.product__name}>{product.name}</h2>

        <div className={styles.product__size}>
          <ProductSize size={product.size} typeSize={product.typeSize} />
        </div>

        <div className={styles.product__selectProduct}>
          <SelectProduct product={product} />
        </div>

        <div className={styles.product__specifications}>
          <Specifications
            args={{
              Производитель: product.manufacturer,
              Бренд: product.brand,
              Артикул: 460404,
              Штрихкод: product.barcode,
            }}
          />
        </div>

        <div className={styles.product__description}>
          <ProductAttributes title="Описание">
            <p className={styles.product__descriptionText}>
              {product.description}
            </p>
          </ProductAttributes>
        </div>

        <hr className={styles.product__line} />

        <div className={styles.product__characteristic}>
          <ProductAttributes title="Характеристики">
            <div className={styles.product__characteristicInner}>
              <Specifications
                args={{
                  Производитель: product.manufacturer,
                  Бренд: product.brand,
                  Артикул: 460404,
                  Штрихкод: product.barcode,
                }}
              />
            </div>
          </ProductAttributes>
        </div>
      </div>
    </div>
  )
}
