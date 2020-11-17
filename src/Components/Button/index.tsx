import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'

import styles from './Button.module.scss'

interface Props {
  variant?: string
  text?: string
  onClick: () => void
}

const defaultProps: Props = {
  variant: 'primary',
  text: 'Initial button text',
  onClick: () => { }
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Button className={styles.btn} {...rest}>
      { text}
    </Button>
  )
}

export default ButtonComponent
