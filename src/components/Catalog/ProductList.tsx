import { FC } from 'react'

import { IProduct } from '../../store/productsSlice'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import styles from './ProductList.module.scss'
import { useProductList } from './hooks/useProductList'

interface ProductListProps {
  products: IProduct[]
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  const { productCountOnPage, splitedProducts, currentPage, setCurrentPage } =
    useProductList(products)

  return (
    <div className={styles.productList}>
      <div className={styles.productList__grid}>
        {splitedProducts[currentPage - 1]?.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
      {products.length >= productCountOnPage.current && (
        <div className={styles.productList__pagination}>
          <Pagination
            productsLength={products.length}
            productCountOnPage={productCountOnPage.current}
            setValue={setCurrentPage}
          />
        </div>
      )}
    </div>
  )
}
