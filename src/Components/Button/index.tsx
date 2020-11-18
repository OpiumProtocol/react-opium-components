import React, { FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'

import { generateRenderProps, generateThemeColors } from '../../Utils/helpers'
import { Colors, colorSchemeLight, Theme } from '../../Constants/Types/theme.types'

// import styles from './Button.module.scss'
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
  theme: Theme.LIGHT,
  className: '',
  variant: 'primary',
  text: 'Initial button text',
  style: { color: '', borderColor: '' },
  onClick: () => { },
}

const ButtonComponent: FC<Props> = (props: Props) => {
  const { text, theme, className, ...rest } = generateRenderProps(defaultProps, props)

  console.log('>>> colors:', generateThemeColors(theme))

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
