import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import syles from './Button.module.scss'

interface Props {
  text?: string
  onClick: () => void
}

const defaultProps: Props = {
  text: 'Initial button text',
  onClick: () => {}
}

const generateRenderProps = (defaults: Props, props: Props): Props => {
  return { ...defaults, ...props }
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Button className={syles.btn} {...rest}>
      { text }
    </Button>
  )
}

export default ButtonComponent
