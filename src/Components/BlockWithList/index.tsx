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
    accentColor,
    frontSide,
    backSide,
  } = renderProps

  const [isShown, setIsShown] = React.useState<boolean>(false)

  const { color, backgroundColor, borderColor } = widgetThemes[theme as ETheme]

  return (
    <div
      className={`BlockWithList color-scheme-${theme} ${isShown ? 'hovered' : ''}`}
      style={{borderColor: isShown ? accentColor : ''}}
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
