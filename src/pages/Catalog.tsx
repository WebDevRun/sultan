import { FC } from 'react'

import {
  CareTypesFilter,
  SortProducts,
  LeftFilters,
  ProductList,
  Text,
} from '../components/Catalog'
import styles from './Catalog.module.scss'
import { useCatalog } from './hooks/useCatalog'

export const Catalog: FC = () => {
  const { error, status, typesOfCare, filteredProducts } = useCatalog()

  if (status === 'failed') {
    return <div className={styles.catalog__error}>{error}</div>
  }

  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalog__title}>Косметика и гигиена</h2>
      <div className={styles.catalog__sort}>
        <SortProducts />
      </div>

      <div className={styles.catalog__filter}>
        <CareTypesFilter filters={typesOfCare} />
      </div>

      <div className={styles.catalog__leftFilters}>
        <div className={styles.catalog__priceAndManufacturer}>
          <LeftFilters />
        </div>

        <div className={styles.catalog__filterProducts}>
          <CareTypesFilter filters={typesOfCare} position="vertical" />
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
