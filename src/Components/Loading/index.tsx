import React, { FC } from 'react'
import Loader, { LoadingType } from 'react-loading'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './Loading.scss'

type Props = {
  theme: Theme
  height?: string
  width?: string,
  color?: string,
  type?: LoadingType
  className?: string
}

const defaultProps = {
  theme: Theme.DARK,
  className: 'loading',
  color: '',
  height: '4rem',
  width: '6rem',
  type: 'bubbles' as LoadingType,
}

const Loading: FC<Props> = (props: Props) => {
  const { className, theme, ...rest } = generateRenderProps(defaultProps, props)

  return (
    <Loader
      className={`${className} color-scheme-${theme}`}
      {...rest}
    />
  )
}

export default Loading
