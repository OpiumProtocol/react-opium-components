import React from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './ContainerWithCollapse.scss'

export type Props = {
  key?: string
  className?: string
  /** Define theme */
  theme?: ETheme
  header: any
  body: any
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  header: <div></div>,
  body: <div></div>
}

const ContainerWithCollapse: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    key,
    className,
    theme,
    header,
    body
  } = renderProps

  return (
    <div className={`item ${className} color-scheme-${theme}`} key={key}>
      <div className="item__header">
        {header}
      </div>
      <div className="item__body">
        {body}
      </div>
    </div>
  )
}

export default ContainerWithCollapse
