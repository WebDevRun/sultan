import { useEffect, useState, FC } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../store'
import { IProduct } from '../store/productsSlice'
import { Product as ProductInfomation } from '../components/Product'
import styles from './Product.module.scss'

export const Product: FC = () => {
  const productId = useParams().id
  const [product, setProduct] = useState<IProduct | undefined>()
  const { status, products } = useAppSelector((state) => state.productsReducer)

  useEffect(() => {
    if (status === 'succeeded') {
      setProduct(products.filter((product) => product.id === productId)[0])
    }
  }, [status])

  if (productId === undefined || product === undefined)
    return <div className={styles.product__error}>Нет такого товара</div>

  return (
    <div className={styles.product}>
      <ProductInfomation product={product} />
    </div>
  )
}
