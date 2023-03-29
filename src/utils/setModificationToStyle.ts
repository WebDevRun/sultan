export const setModificationToStyle =
  (baseStyle: string, trueStyle: string, falseStyle: string) =>
  (parameter: boolean) => {
    const styles = [baseStyle]
    if (parameter) {
      styles.push(trueStyle)
    } else {
      styles.push(falseStyle)
    }

    return styles.join(' ')
  }
