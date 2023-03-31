import { type MouseEventHandler, type FC } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, type IProduct } from '../../store'
import { appendProduct } from '../../store/basketSlice'
import { ProductSize, Specifications } from '../general'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: IProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    dispatch(appendProduct({ product, count: 1 }))
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imageContainer}>
        <img
          className={styles.productCard__image}
          src={product.url}
          alt={product.name}
        />
      </div>

      <div className={styles.productCard__size}>
        <ProductSize size={product.size} typeSize={product.typeSize} />
      </div>

      <Link to={product.id} className={styles.productCard__title}>
        {product.name}
      </Link>

      <div className={styles.productCard__specifications}>
        <Specifications
          args={{
            Штрихкод: product.barcode,
            Производитель: product.manufacturer,
            Бренд: product.brand,
            'Типу ухода': product.typeOfCare.join(', '),
          }}
        />
      </div>

      <div className={styles.productCard__priceAndButton}>
        <p className={styles.productCard__price}>{product.price} ₸</p>
        <button
          className={styles.productCard__button}
          type="button"
          onClick={buttonClickHandler}
        >
          <span className={styles.productCard__buttonText}>В КОРЗИНУ</span>
          <svg
            width="24"
            height="17"
            viewBox="0 0 41 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.6514 5.78617C40.3916 5.42327 40.043 5.24182 39.6055 5.24182H11.7559L11 3.27403C10.8086 2.62887 10.5488 2.07779 10.2207 1.6208C9.89258 1.16381 9.54395 0.841232 9.1748 0.65306C8.80566 0.464888 8.48438 0.3372 8.21094 0.269996C7.9375 0.202792 7.66406 0.169189 7.39062 0.169189H1.77148C1.41602 0.169189 1.11523 0.290157 0.869141 0.532093C0.623047 0.774028 0.5 1.08317 0.5 1.45951C0.5 1.67457 0.554688 1.8829 0.664062 2.08451C0.773438 2.28612 0.930664 2.44069 1.13574 2.54822C1.34082 2.65575 1.55273 2.70951 1.77148 2.70951H7.39062C7.5 2.70951 7.60254 2.72295 7.69824 2.74983C7.79395 2.77672 7.92383 2.89096 8.08789 3.09258C8.25195 3.29419 8.38867 3.59661 8.49805 3.99983L14.3809 20.1531C14.4355 20.3144 14.5244 20.4689 14.6475 20.6168C14.7705 20.7646 14.9141 20.8789 15.0781 20.9595C15.2422 21.0402 15.4199 21.0805 15.6113 21.0805H33.3301C33.6035 21.0805 33.8564 20.9998 34.0889 20.8385C34.3213 20.6773 34.4785 20.4756 34.5605 20.2337L40.8359 6.97569C40.9727 6.54558 40.9111 6.14908 40.6514 5.78617ZM32.4277 18.4998H16.6367L12.4531 7.82246H37.7188L32.4277 18.4998ZM30.0625 22.4798C29.1602 22.4798 28.3877 22.7957 27.7451 23.4274C27.1025 24.0591 26.7812 24.8186 26.7812 25.7057C26.7812 26.5928 27.1025 27.3522 27.7451 27.9839C28.3877 28.6156 29.1602 28.9315 30.0625 28.9315C30.9648 28.9315 31.7373 28.6156 32.3799 27.9839C33.0225 27.3522 33.3438 26.5928 33.3438 25.7057C33.3438 24.8186 33.0225 24.0591 32.3799 23.4274C31.7373 22.7957 30.9648 22.4798 30.0625 22.4798ZM18.25 22.4798C17.6484 22.4798 17.0947 22.6277 16.5889 22.9234C16.083 23.2191 15.6865 23.6089 15.3994 24.0927C15.1123 24.5766 14.9688 25.1143 14.9688 25.7057C14.9688 26.5928 15.29 27.3522 15.9326 27.9839C16.5752 28.6156 17.3477 28.9315 18.25 28.9315C19.1523 28.9315 19.9248 28.6156 20.5674 27.9839C21.21 27.3522 21.5312 26.5928 21.5312 25.7057C21.5312 25.4906 21.5107 25.2755 21.4697 25.0605C21.4287 24.8454 21.3672 24.6438 21.2852 24.4557C21.2031 24.2675 21.1006 24.086 20.9775 23.9113C20.8545 23.7366 20.7178 23.5753 20.5674 23.4274C20.417 23.2796 20.2529 23.1452 20.0752 23.0242C19.8975 22.9032 19.7129 22.8024 19.5215 22.7218C19.3301 22.6411 19.125 22.5806 18.9062 22.5403C18.6875 22.5 18.4688 22.4798 18.25 22.4798Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
