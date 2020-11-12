import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import './Button.scss'

interface Props {
  text?: string
  onClick: () => void
}

const defaultProps: Props = {
  text: 'Initial button text',
  onClick: () => {}
}

const generateProps = (defaults: Props, props: Props): Props => {
  return { ...defaults, ...props }
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, ...rest } = generateProps(defaultProps, props)

  return (
    <Button className='btn' {...rest}>
      { text }
    </Button>
  )
}

export default ButtonComponent
