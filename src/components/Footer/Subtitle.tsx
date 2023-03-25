import { FC } from 'react'

import styles from './Subtitle.module.scss'

interface SubtitleProps {
  text: string
}

export const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>
}
