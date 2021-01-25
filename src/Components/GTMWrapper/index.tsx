import React, { FC, cloneElement } from 'react'

import { generateRenderProps } from '../../Utils/helpers'

import './GTMWrapper.scss'

export type TProps = {
  /** ID */
  id: string
  /** Wrapped children */
  children: JSX.Element
  /** Is production mode */
  isProduction: boolean
}

export const defaultProps: TProps = {
  id: 'seo-wrapped-component',
  children: <></>,
  isProduction: false,
}

const GTMWrapper: FC<TProps> = (props: TProps) => {
  const {
    id,
    children,
    isProduction,
  } = generateRenderProps(defaultProps, props)
  
  return isProduction ? cloneElement(children, { id }) : children

  // const modifyChildren = isProduction ? () => cloneElement(children, { id }) : () => (children)
  // return modifyChildren()
}

export default GTMWrapper
