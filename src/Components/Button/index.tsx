import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

import './Button.scss'

type Props = {
  text?: string
  onClick: () => void
}

const defaultProps: Props = {
  text: 'Initial button',
  onClick: () => {}
}

const generateProps = (defaults: Props, props: Props): Props => {
  const obj: any = {}
  for (const key in props) {
    if (key === undefined) {
      obj[key] = defaults[key]
      continue
    }
    obj[key] = props[key]
  }
  return obj
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
