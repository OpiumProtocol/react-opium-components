import React, { FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import './Button.scss'

interface Props {
  theme: Theme
  text?: string
  variant?: string
  className?: string
  style?: CSSProperties
  onClick: () => void
}

const defaultProps: Props = {
  theme: Theme.DARK,
  className: '',
  variant: 'primary',
  text: 'Initial button text',
  style: { color: '', borderColor: '' },
  onClick: () => { },
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, theme, className, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Button
      className={`color-scheme-${theme} ${className}`}
      {...rest}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
