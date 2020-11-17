import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'

import styles from './Button.module.scss'

interface Props {
  text?: string
  variant?: string
  className?: string
  style?: { color: string, borderColor: string }
  onClick: () => void
}

const defaultProps: Props = {
  className: '',
  variant: 'primary',
  text: 'Initial button text',
  style: { color: '', borderColor: '' },
  onClick: () => { },
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, className, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Button className={`${styles.btn} ${className}`} {...rest}>
      {text}
    </Button>
  )
}

export default ButtonComponent
