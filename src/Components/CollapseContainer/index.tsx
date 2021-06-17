import React from 'react'

import {
  Accordion,
  Card,
} from 'react-bootstrap'
import { Collapse } from 'react-collapse'

import _ from '../../Styles/exportColors.scss'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './CollapseContainer.scss'

export type Props = {
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
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  header: <div></div>,
  body: <div></div>,
}

const CollapseContainer: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    className,
    theme,
    accentColor: accentColorProp,
    accentColorLight: accentColorLightProp,
    header,
    body,
    disabled,
    hoverControlled,
    disabledMessage,
    collapseButton
  } = renderProps

  let accentColor = (theme === ETheme.LIGHT && accentColorLightProp) ? accentColorLightProp : accentColorProp

  const [hovered, setHovered] = React.useState(false)
  const [isOpened, setIsOpened] = React.useState(false)

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
          console.log('... ', e.target.nodeName)
          if (!(
            e.target.href ||
            e.target.nodeName.includes('BUTTON') || 
            e.target.nodeName.includes('INPUT')
          )) {
            setIsOpened(!isOpened)
          }
        }}>
          {header}
          <a className="test1 test2" href="https://google.com/" onClick={(e) => e.preventDefault()}>Google</a>
          <button>Test 1</button>
          <button type="button">Test 2</button>
          <input type="button" value="test 3" />
        </div>
        <div className="CollapseContainer__body">
          <Collapse isOpened={isOpened}>
            <div style={{ color: 'white' }}>
              {body}
            </div>
          </Collapse>
          <div className={`CollapseContainer__collapse-btn ${isOpened ? 'opened' : ''}`}>
            <button onClick={() => {
              setIsOpened(!isOpened)
            }}>
              {collapseButton}
            </button>
          </div>
        </div>
      </div>
      {disabled && <div className="CollapseContainer__disabled">
        <span>{disabledMessage}</span>
      </div>}
    </div>
  )
}

export default CollapseContainer
