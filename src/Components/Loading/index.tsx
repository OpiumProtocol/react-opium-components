import React from 'react'
import Loader, { LoadingType } from 'react-loading'
import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './Loading.scss'

type Props = {
  theme: Theme
  height?: string
  width?: string,
  type?: LoadingType
  className?: string
}

const loadingProps = {
  theme: Theme.DARK,
  className: 'loading',
  color: '',
  height: '4rem',
  width: '6rem',
  type: 'bubbles' as LoadingType,
}

const Loading: React.FC<Props> = (props: Props) => {
  const { className, theme, ...rest } = generateRenderProps(loadingProps, props)

  return (
    <Loader
      className={`${className} color-scheme-${theme}`}
      {...rest}
    />
  )
}

export default Loading
