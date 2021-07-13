import React, { ReactNode } from 'react'

import {
  ETheme,
  widgetThemes,
} from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './BlockWithList.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  accentColor: string
  frontSide: ReactNode
  backSide?: ReactNode
  className?: string
  showBorder?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  accentColor: '#fff',
  frontSide: <div>frontside</div>
}

const BlockWithList: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    className,
    accentColor,
    frontSide,
    backSide,
    showBorder
  } = renderProps

  const [isShown, setIsShown] = React.useState<boolean>(false)

  return (
    <div
      className={`BlockWithList ${className ? className : ''} color-scheme-${theme} ${isShown ? 'hovered' : ''}`}
      style={{ borderColor: (isShown || showBorder) ? accentColor : '' }}
      onMouseEnter={() => backSide && setIsShown(true)}
      onMouseLeave={() => backSide && setIsShown(false)}
    >
      <div className="BlockWithList__front">
        {frontSide}
      </div>
      {backSide && (<div className="BlockWithList__back">
        {backSide}
      </div>)}
    </div>
  )
}

export default BlockWithList
