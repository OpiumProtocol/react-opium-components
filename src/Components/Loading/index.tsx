import React, { FC } from 'react'
import Loader, { LoadingType } from 'react-loading'
import { ETheme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './Loading.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
    size?: string
  /** Set height */
  height?: string
  /** Set width */
  width?: string,
  /** Set loader color */
  color?: string,
  /** Set loader type */
  type?: LoadingType
  /** Set class selectors for additional customizing */
  className?: string
}

const defaultProps = {
  theme: ETheme.DARK,
  className: 'loading',
  color: '',
  height: '4rem',
  width: '6rem',
    size: '150px',
  type: 'bubbles' as LoadingType,
}

const Loading: FC<Props> = (props: Props) => {
  const { className, theme, size,  ...rest } = generateRenderProps(defaultProps, props)

  return (
    <>
      <svg className="gooey-filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <div className={`tmp-parent color-theme-${theme}`} style={{fontSize: size}}>
        <div className="preloader preloader-newton-gooey" aria-label="Loading...">
          <div className="preloader-inner" role="presentation">
            <span className="dot extra-dot"></span>
            <span className="dot main-dot"></span>
            <span className="dot main-dot"></span>
            <span className="dot main-dot"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
