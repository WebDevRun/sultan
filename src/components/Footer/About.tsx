import { FC } from 'react'
import { Subscribe } from './Subscribe'
import styles from './About.module.scss'

export const About: FC = () => {
  return (
    <div className={styles.about}>
      <p className={styles.about__text}>
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
        Кокчетаве и Акмолинской области
      </p>
      <div className={styles.about__subscribe}>
        <Subscribe />
      </div>
    </div>
  )
}
