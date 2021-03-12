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
  frontSide: ReactNode
  backSide: ReactNode
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  frontSide: <div>frontside</div>,
  backSide: <div>backSide</div>,
}

const BlockWithList: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    frontSide,
    backSide
  } = renderProps

  const [isShown, setIsShown] = React.useState<boolean>(false)

  const { color, backgroundColor, borderColor } = widgetThemes[theme as ETheme]

  return (
    <div
      className={`BlockWithList color-scheme-${theme} ${isShown ? 'hovered' : ''}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="BlockWithList__front">
        {frontSide}
      </div>
      <div className="BlockWithList__back">
        {backSide}
      </div>
    </div>
  )
}

export default BlockWithList
