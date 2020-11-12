import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import './Button.scss'

type Props = {
  text?: string
  onClick?: () => {}
}

const defaultProps: Props = {
  text: 'Initial button'
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const {text, ...rest} = props

  return (
    <Button className='btn' {...rest}>
      { text ? text : defaultProps.text }
    </Button>
  )
}

export default ButtonComponent
