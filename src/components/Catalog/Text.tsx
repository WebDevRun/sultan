import { FC } from 'react'

import styles from './Text.module.scss'

export const Text: FC = () => {
  return (
    <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
      ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate
      feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
      pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
      dignissim sed nulla ullamcorper enim, malesuada.
    </p>
  )
}
