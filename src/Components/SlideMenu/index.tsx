import React, { useState } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './SlideMenu.scss'

export type Props = {
    /** Define theme */
    theme?: ETheme
    /** To set the target */
    id: string
    /**  Slider mode (By default false) */
    open?: boolean,
    header: any,
    content: any
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  id: '',
  open: false,
  header: '',
  content: ''
}

const SlideMenu: React.FC<Props> = (props: Props) => {
  const [status, setStatus] = useState(false)
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    id,
    open,
    header,
    content
  } = renderProps

  return (<>
    <div className={`slide-menu color-scheme-${theme} ${!status ? 'slide-in' : 'slide-out'}`} onClick={() => setStatus(!status)}>
      <div className={'header-block'}>{header}</div>
      <div className={'body-block'}>{content}</div>
    </div>
  </>)
}

export default SlideMenu
