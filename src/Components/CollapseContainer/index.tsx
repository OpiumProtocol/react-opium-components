import React, {memo} from 'react'
import { Collapse } from 'react-collapse'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './CollapseContainer.scss'

export type Props = {
  /** Uniq key for collapse block */
  collapseKey?: string,
  /** Status for showing collapse body or hide it */
  isOpened: boolean,
  /** Function, which change status */
  setIsOpened?: Function,
  /** Custom class */
  className?: string
  /** Border for dark theme */
  accentColor?: string
  /** Border for light theme */
  accentColorLight?: string
  /** Define theme */
  theme?: ETheme
  /** First visible content */
  header: any
  /** Hidden content */
  body: any
  /** Disabled appearance */
  disabled?: boolean
  /** Message for disabled mode */
  disabledMessage?: string
  /** If true - border will be shown always */
  hoverControlled?: boolean
  /** Name of button or content for button */
  collapseButton?: string | object
  /** Additional action for collapse button */
  onCollapseButtonClick?: Function
}

const defaultProps: Props = {
  isOpened: false,
  theme: ETheme.DARK,
  header: <div></div>,
  body: <div></div>,
}

const CollapseContainer: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    collapseKey,
    isOpened,
    setIsOpened,
    className,
    theme,
    accentColor: accentColorProp,
    accentColorLight: accentColorLightProp,
    header,
    body,
    disabled,
    hoverControlled,
    disabledMessage,
    collapseButton,
    onCollapseButtonClick
  } = renderProps

  let accentColor = (theme === ETheme.LIGHT && accentColorLightProp) ? accentColorLightProp : accentColorProp

  const [hovered, setHovered] = React.useState(false)

  return (
    <div className={`CollapseContainer ${className ? className : ''} color-scheme-${theme} ${disabled ? 'CollapseContainer_disabled' : ''}`}>
      <div
        className={`CollapseContainer__container ${hovered && !disabled ? 'hovered' : ''}`}
        style={
          {
            borderColor:
              ((hovered && !disabled) || hoverControlled) ? accentColor : 'transparent'
          }
        }
        onMouseEnter={() => !hoverControlled && setHovered(true)}
        onMouseLeave={() => !hoverControlled && setHovered(false)}
      >
        <div className="CollapseContainer__header" onClick={(e: any) => {
          e.persist()
          if (!(
            e.target.href ||
            ['BUTTON', 'INPUT'].includes(e.target.nodeName)
          ) && setIsOpened) {
            setIsOpened(collapseKey, !isOpened)
          }
        }}>
          {header}
        </div>
        <div className="CollapseContainer__body">
          <Collapse isOpened={isOpened}>
            <div>
              {body}
            </div>
          </Collapse>
          {collapseButton && <div className={`CollapseContainer__collapse-btn ${isOpened ? 'opened' : ''}`}>
            <button onClick={() => {
              if (onCollapseButtonClick) {
                onCollapseButtonClick()
              }
              setIsOpened(collapseKey, !isOpened)
            }}>
              {collapseButton}
            </button>
          </div>}
        </div>
      </div>
      {disabled && <div className="CollapseContainer__disabled">
        <span>{disabledMessage}</span>
      </div>}
    </div>
  )
}

export default React.memo(CollapseContainer)
