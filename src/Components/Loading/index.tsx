import React from 'react'
import Loader, { LoadingType } from 'react-loading'

import { generateRenderProps } from '../../Utils/helpers'

import styles from './Loading.module.scss'

type Props = {
  height?: string
  width?: string,
  type?: LoadingType
  className?: string
}

const loadingProps = {
  className: 'loading',
  color: '#E3000F',
  height: '4rem',
  width: '6rem',
  type: 'bubbles' as LoadingType,
}

const Loading: React.FC<Props> = (props: Props) => {
  const { className, ...rest } = generateRenderProps(loadingProps, props)

  return (
    <Loader
      className={`${styles.loading} ${className}`}
      {...rest}
    />
  )
}

export default Loading
