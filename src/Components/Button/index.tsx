import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import './Button.scss'

type Props = {
  message: string
}

const defaultProps: Props = {
  message: 'Hello world'
}

const ButtonComponent: FC<Props> = (props: Props) => {
  return (
    <Button className='btn'>
      {defaultProps.message}
    </Button>
  )
}

export default ButtonComponent
