import React from 'react'
import { Button } from 'react-bootstrap'

type Props = {
  message: string
}

const defaultProps: Props = {
  message: 'Hello world'
}

const ButtonComponent: React.FC<Props> = (props: Props) => {

  return (
    <Button>{defaultProps.message}</Button>
  )
}
export default ButtonComponent