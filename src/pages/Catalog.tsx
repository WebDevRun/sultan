import { type FC } from 'react'

import { useAppSelector } from '../store'
import {
  FilterProducts,
  SortProducts,
  LeftFilters,
  ProductList,
  Text,
} from '../components/Catalog'
import styles from './Catalog.module.scss'
import { useCatalog } from './hooks/useCatalog'

export const Catalog: FC = () => {
  const { error, products, status } = useAppSelector(
    (state) => state.productsSlice
  )

  if (status === 'failed') {
    return <div className={styles.catalog__error}>{error}</div>
  }

  const [filters, filteredProducts] = useCatalog(products)

  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalog__title}>Косметика и гигиена</h2>
      <div className={styles.catalog__sort}>
        <SortProducts />
      </div>

      <div className={styles.catalog__filter}>
        <FilterProducts filters={filters} />
      </div>

      <div className={styles.catalog__leftFilters}>
        <div className={styles.catalog__priceAndManufacturer}>
          <LeftFilters />
        </div>
        <div className={styles.catalog__filterProducts}>
          <FilterProducts filters={filters} isLeft={true} />
        </div>
      </div>
      <div className={styles.catalog__productList}>
        <ProductList products={filteredProducts} />
      </div>

      <div className={styles.catalog__text}>
        <Text />
      </div>
    </div>
  )
}
