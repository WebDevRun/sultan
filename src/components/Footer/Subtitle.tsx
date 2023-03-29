import { type FC } from 'react'

import styles from './Subtitle.module.scss'

interface SubtitleProps {
  text: string
}

export const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <h3 className={styles.subtitle}>{text}</h3>
}
