import React, { useEffect } from 'react'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './SlideMenu.scss'

export type Props = {
    /** Define theme */
    theme?: ETheme
    /** To set the target */
    id: string
    onClick?: Function,
    /**  Slider mode (By default false) */
    open?: boolean,
    closeButton?: boolean,
    header: any,
    content: any,
    headerHeight?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  id: '',
  open: false,
  header: '',
  content: '',
  closeButton: false,
  headerHeight: '75px'
}

const SlideMenu: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    id,
    open,
    header,
    content,
    onClick,
    closeButton,
    headerHeight
  } = renderProps

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--header-height', headerHeight)
  }, [headerHeight])

  return (<>
    <div className={`slide-menu color-scheme-${theme} ${!open ? 'slide-in' : 'slide-out'}`}>
      <div className={'header-block'}>
        <div className={'header-content'}>{header}</div>
        {(open && closeButton) && <button className="close-button" onClick={onClick}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.00162" y1="2.05615" x2="15.5312" y2="15.5858" strokeWidth="2" strokeLinecap="round"/>
            <line x1="2.02563" y1="15.5296" x2="15.5553" y2="2.00001" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>}
      </div>
      <div className={'body-block'}>{content}</div>
    </div>
  </>)
}

export default SlideMenu
